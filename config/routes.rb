Rails.application.routes.draw do

  get 'polymer/index'

  use_doorkeeper
  devise_for :users

  namespace :admin do
    resources :users
    resources :roles
  end
  resources :products
  resources :purchases

  root 'products#index'

end
