require 'net/http'
require 'uri'
require 'json'

def get_all_coins_from_coingecko
  uri = URI.parse("https://api.coingecko.com/api/v3/coins/list")
  request = Net::HTTP::Get.new(uri)
  request["Accept"] = "application/json"
  req_options = {
    use_ssl: uri.scheme == "https",
  }
  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  return JSON.parse(response.body)
end


def write_results_in_json_file(json_to_write)
  File.open("coins.json","w") do |f|
    f.write(json_to_write.to_json)
  end
end

def create_json_datas
  api_response_body = get_all_coins_from_coingecko()
  write_results_in_json_file(api_response_body)
end

create_json_datas
