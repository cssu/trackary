Rails.application.routes.draw do

  get 'polymer/index'

  use_doorkeeper
  devise_for :users, path: 'user'

  resources :users
  resources :products
  resources :purchases

  root 'products#index'

end
