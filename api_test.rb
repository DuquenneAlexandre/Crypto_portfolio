require 'net/http'
require 'uri'
require 'json'

def get_all_tokens
  uri = URI.parse('http://localhost:3000/api/v1/portfolios/get_coin_list')
  #uri = URI.parse('https://serene-island-80425.herokuapp.com/api/v1/recipes/index')
  request = Net::HTTP::Get.new(uri)
  request["Content-Type"] = "application/json"
  req_options = { use_ssl: uri.scheme == "https"}
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  p response.code
  p response.body
end



def portofolio_details(the_id)
  uri = URI.parse('http://localhost:3000/api/v1/portfolios/portofolio_details')
  #uri = URI.parse('https://serene-island-80425.herokuapp.com/api/v1/recipes/fridge_search')
  request = Net::HTTP::Post.new(uri)
  request["Content-Type"] = "application/json"
  request.body = the_id
  req_options = { use_ssl: uri.scheme == "https"}
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  p response.code
  p response.body
end

def get_all_coins
  uri = URI.parse('http://localhost:3000/api/v1/portfolios/get_all_coins')
  #uri = URI.parse('https://serene-island-80425.herokuapp.com/api/v1/recipes/index')
  request = Net::HTTP::Get.new(uri)
  request["Content-Type"] = "application/json"
  req_options = { use_ssl: uri.scheme == "https"}
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  p response.code
  p response.body
end


def get_all_portfolio
  uri = URI.parse('http://localhost:3000/api/v1/portfolios/index')
  #uri = URI.parse('https://serene-island-80425.herokuapp.com/api/v1/recipes/index')
  request = Net::HTTP::Get.new(uri)
  request["Content-Type"] = "application/json"
  req_options = { use_ssl: uri.scheme == "https"}
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  p response.code
  p response.body
end

def return_portfolio_delete_coins(post_coins_quantity)
  uri = URI.parse('http://localhost:3000/api/v1/portfolios/portfolio_delete_coins')
  #uri = URI.parse('https://serene-island-80425.herokuapp.com/api/v1/recipes/fridge_search')
  request = Net::HTTP::Post.new(uri)
  request["Content-Type"] = "application/json"
  request.body = post_coins_quantity
  req_options = { use_ssl: uri.scheme == "https"}
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  p response.code
  p response.body
end

def return_portfolio_value(post_coins_quantity)
  uri = URI.parse('http://localhost:3000/api/v1/portfolios/get_portfolio_value')
  #uri = URI.parse('https://serene-island-80425.herokuapp.com/api/v1/recipes/fridge_search')
  request = Net::HTTP::Post.new(uri)
  request["Content-Type"] = "application/json"
  request.body = post_coins_quantity
  req_options = { use_ssl: uri.scheme == "https"}
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  p response.code
  p response.body
end


def return_portfolio_new(profolio)
  uri = URI.parse('http://localhost:3000/api/v1/portfolios/new')
  #uri = URI.parse('https://serene-island-80425.herokuapp.com/api/v1/recipes/fridge_search')
  request = Net::HTTP::Post.new(uri)
  request["Content-Type"] = "application/json"
  request.body = profolio
  req_options = { use_ssl: uri.scheme == "https"}
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  p response.code
  p response.body
end

def return_coins_new(coins_new)
  uri = URI.parse('http://localhost:3000/api/v1/portfolios/coins_new')
  #uri = URI.parse('https://serene-island-80425.herokuapp.com/api/v1/recipes/fridge_search')
  request = Net::HTTP::Post.new(uri)
  request["Content-Type"] = "application/json"
  request.body = coins_new
  req_options = { use_ssl: uri.scheme == "https"}
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  p response.code
  p response.body
end



def return_portfolio_show(profolio_id)
  uri = URI.parse('http://localhost:3000/api/v1/portfolios/show')
  #uri = URI.parse('https://serene-island-80425.herokuapp.com/api/v1/recipes/fridge_search')
  request = Net::HTTP::Post.new(uri)
  request["ApiKey"] = "My_portfolio_user_1"
  request["ApiSecret"] = "76FHDTEGFNF87Dfgfdtfdt"
  request["Content-Type"] = "application/json"
  request.body = profolio_id
  req_options = { use_ssl: uri.scheme == "https"}
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  p response.code
  p response.body
end


 #return_portfolio_value('{"data":[{
#  "quantity":"3", "token_id":"bitcoin"},
#   {"quantity":"12", "token_id":"ethereum"},
#   {"quantity":"23599", "token_id":"ripple"}
#   ]}')

   #get_all_tokens()
   #get_all_portfolio()
   return_portfolio_show('{"id":"1"}')
   #get_all_coins()
   #portofolio_details('{"id":"1"}')
   #return_coins_new('{"coin_identificator":"ripple","coin_symbol":"xrp","coin_name":"XRP", "coin_quantity": "2314", "portfolio_id": "1"}')
   #return_portfolio_new('{"name":"Portfolio de Martin", "description":"Un super portfolio binance"}')
#return_portfolio_delete_coins('{"portfolio_id": "1", "coin_symbol": "btc", "coin_name": "Bitcoin", "coin_identificator": "bitcoin", "coin_quantity": "3.5"}')
