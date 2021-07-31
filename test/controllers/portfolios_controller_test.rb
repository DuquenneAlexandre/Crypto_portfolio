require "test_helper"

class PortfoliosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get portfolios_index_url
    assert_response :success
  end

  test "should get get_coin_value" do
    get portfolios_get_coin_value_url
    assert_response :success
  end
end
