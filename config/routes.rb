Rails.application.routes.draw do
  get '/', to: 'portfolios#index'
  get '/portfolios/:id', to: 'portfolios#show'
  #resources :portfolios, only: [:show], param: :slug
  namespace :api do
    namespace :v1 do
      post 'portfolios', to: 'portfolios#get_coin_value'
      post 'portfolios/get_portfolio_value', to: 'portfolios#get_portfolio_value'
      get 'portfolios/get_coin_list', to: 'portfolios#get_coin_list'
      post 'portfolios/new', to: 'portfolios#new'
      post 'portfolios/show', to: 'portfolios#show'
      get 'portfolios/index', to: 'portfolios#index'
      get 'portfolios/get_all_coins', to: 'portfolios#get_all_coins'
      post 'portfolios/portofolio_details', to: 'portfolios#portofolio_details'
      post 'portfolios/coins_new', to: 'portfolios#coins_new'
      post 'portfolios/portfolio_delete', to: 'portfolios#portfolio_delete'
      post 'portfolios/portfolio_delete_coins', to: 'portfolios#portfolio_delete_coins'
    end
  end
end
