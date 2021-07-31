require 'net/http'
require 'uri'
require 'json'


def get_token_price(token_id, vs_currency)
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

def get_token_id_from_symbol(token_symbol)
  file = File.open("coins.json")
  file_data = file.read
  file_data = JSON.parse(file_data)
  file_data.each do |coin|
    if coin["symbol"] == token_symbol
      return coin
    end
  end
end

def get_all_tokens()
  tokens_array = []
  file = File.open("coins.json")
  file_data = file.read
  file_data = JSON.parse(file_data)
  file_data.each do |coin|
    tokens_array << coin
  end
end

def return_result_value(quantity, token_price)
  quantity, token_price = quantity.to_f, token_price.to_f
  (quantity * token_price).round(2)
end

def coins_value(quantity, token_id, vs_currency)
  token_price = get_token_price(token_id, vs_currency)
  return_result_value(quantity, token_price[token_id][vs_currency])
end

p coins_value(3, "ethereum", "usd")
