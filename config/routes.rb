Rails.application.routes.draw do

  root 'application#home'
  resources :products
  resources :purchases

end
