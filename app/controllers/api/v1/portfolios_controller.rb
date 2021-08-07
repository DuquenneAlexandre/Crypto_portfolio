module Api
  module V1
    class PortfoliosController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :api_authent_check

      def index
        render json: Portfolio.all
      end

      def show
        render json: [Portfolio.find(params[:id]), Portfolio.find(params[:id]).coins]
      end

      def portofolio_details
        render json: Portfolio.portfolio_details_construct(params[:id])
      end

      def get_all_coins
        render json: Coin.all
      end

      def get_coin_list
        render json: Portfolio.get_all_tokens_json
      end

      def get_portfolio_value
        render json: Portfolio.api_get_portfolio_value(params)
      end

      def project_params
        params.permit(data: [:quantity, :token_id])
      end

      def new
        new_portfolio = Portfolio.new(portfolio_params)
        render json: new_portfolio.save
      end

      def coins_new
        new_portfolio = Coin.new(coin_params)
        render json: new_portfolio.save
      end

      def portfolio_delete
        coins = Portfolio.find(params[:id]).coins.ids
        if !coins.empty?
          coins.each{|coin| Coin.find(coin).destroy}
          Portfolio.find(params[:id]).destroy
        else
          Portfolio.find(params[:id]).destroy
        end
      end

      def portfolio_delete_coins
        render json: Coin.find(Coin.where(portfolio_id: params[:portfolio_id],
             coin_symbol: params[:coin_symbol],
              coin_name: params[:coin_name],
               coin_identificator: params[:coin_identificator],
                coin_quantity: params[:coin_quantity]).ids[0]).destroy
      end

      def portfolio_params
        params.permit(:name, :description)
      end

      def coin_params
        params.permit(:coin_name,
          :coin_identificator,
          :coin_symbol,
          :coin_quantity,
          :portfolio_id)
      end

      private
      def api_authent_check
      mafile = JSON.parse(File.read('my.json'))
        if request.headers["ApiKey"] != mafile["ApiKey"]
          render json: "ApiKey unroconized or missing" and return
        end
        if request.headers["ApiSecret"] != mafile["ApiSecret"]
          render json: "Api Secret unroconized or missing" and return
        end
      end

    end
  end
end
