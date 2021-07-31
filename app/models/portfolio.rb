class Portfolio < ApplicationRecord
  has_many :coins
  require 'json'
  require 'net/http'
  require 'uri'

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  def self.get_all_tokens()
    tokens_array = []
    file_data = Portfolio.read_and_parse_json_file("coins")
    file_data.each do |coin|
      tokens_array << coin
    end
    tokens_array
  end

  def self.show_params(params)
    if !params[:token_symbol].nil? && !params[:token_choosen].nil?
      Portfolio.coins_value(params[:token_symbol], params[:token_choosen], "usd")
    else
      return 400
    end
  end

  def self.api_get_portfolio_value(api_params)
    Portfolio.return_portfolio_value(api_params)
  end

  def self.get_all_tokens_json
    Portfolio.read_and_parse_json_file("coins")
  end

  def self.portfolio_details_construct(portfolio_id)
    portfolio = Portfolio.find(portfolio_id)
    portfolio_coins = Portfolio.find(portfolio_id).coins
    Portfolio.alim_hash(portfolio, portfolio_coins)
  end

private
  def self.get_token_price(token_id, vs_currency)
    uri = URI.parse("https://api.coingecko.com/api/v3/simple/price?ids=#{token_id}&vs_currencies=#{vs_currency}")
    request = Net::HTTP::Get.new(uri)
    request["Accept"] = "application/json"
    req_options = {
      use_ssl: uri.scheme == "https",
    }
    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end
    JSON.parse(response.body)
  end

  def self.get_token_id_from_symbol(token_symbol)
    file_data = Portfolio.read_and_parse_json_file("coins")
    file_data.each do |coin|
      if coin["symbol"] == token_symbol
         return coin
       end
    end
  end

  def self.read_and_parse_json_file(file_name)
    file_data = File.open("#{file_name}.json").read
    JSON.parse(file_data)
  end

  def self.get_token_id_by_token_name(token_name)
    file_data = Portfolio.read_and_parse_json_file("coins")
    file_data.each do |coin|
      if coin["name"] == token_name
      return coin
      end
    end
  end

  def self.return_result_value(quantity, token_price)
    quantity, token_price = quantity.to_f, token_price.to_f
    (quantity * token_price).round(2)
  end

  def self.coins_value(quantity, token_id, vs_currency)
    token_price = get_token_price(token_id, vs_currency)
    return_result_value(quantity, token_price[token_id][vs_currency])
  end

  def self.return_portfolio_value(token_id_quantity_hash)
    portfolio_value = 0
    token_id_quantity_hash[:data].each{|entry| portfolio_value += coins_value(entry[:quantity].to_f, entry[:token_id], "usd")}
    portfolio_value
  end

  def self.alim_hash(portfolio, portfolio_coins)
    coins_values = 0

    coins_arr = []
    datas_hash = { name: "",
      description: "",
      coins: coins_arr,
      total_value: "",
    }

    datas_hash[:name] = portfolio.name
    datas_hash[:description] = portfolio.description
    portfolio_coins.each do |portfolio_coin|
      valued_hash = {"data":[{"quantity":portfolio_coin.coin_quantity, "token_id":portfolio_coin.coin_identificator}]}
      coins_values += Portfolio.return_portfolio_value(valued_hash)
      coin_hash = {coin_name: "",
      coin_identificator: "",
      coin_symbol: "",
      coin_quantity: "",
      portfolio_id: ""}
      coin_hash[:coin_name] = portfolio_coin.coin_name
      coin_hash[:coin_quantity] = portfolio_coin.coin_quantity
      coin_hash[:coin_identificator] = portfolio_coin.coin_identificator
      coin_hash[:coin_symbol] = portfolio_coin.coin_symbol
      coin_hash[:portfolio_id] = portfolio_coin.portfolio_id
      coins_arr << coin_hash
    end
    datas_hash[:total_value] = coins_values
    datas_hash
  end

end
