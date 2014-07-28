Rails.application.routes.draw do

  devise_for :users
  root 'application#home'
  resources :products
  resources :purchases

end
