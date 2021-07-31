require 'json'

file = File.open("coins.json")
file_data = file.read
file_data = JSON.parse(file_data)
file_data.each do |coin|
  if coin["symbol"] == "btc"
    p coin
  end
end
