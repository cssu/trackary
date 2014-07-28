Rails.application.routes.draw do

  use_doorkeeper
  devise_for :users
  root 'application#home'
  resources :products
  resources :purchases

end
