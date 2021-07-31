class PortfoliosController < ApplicationController

  def index
    @Portfolios = Portfolio.all
    @tokens = Portfolio.get_all_tokens
  end

  def show

  end

  def get_coin_value
    @tokens = Portfolio.get_all_tokens
    @Portfolio_value = Portfolio.show_params(params)
  end
end
