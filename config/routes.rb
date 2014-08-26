Rails.application.routes.draw do

  get 'polymer/index'

  use_doorkeeper
  devise_for :users

  root 'products#index'

  resources :products
  resources :purchases

end
