Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :index]
    resources :videos 
    resources :comments 
    resources :likes, only: [:create, :destroy, :index]
    resources :dislikes, only: [:create, :destroy, :index]
    resources :follows, only: [:create, :destroy, :index]
    resource :session, only: [:create, :destroy]
    patch '/videos/:id/views', to: 'videos#update'
    get '/search', to: "videos#search"
  end

  root to: 'static_pages#root'
end
