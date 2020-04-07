Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/', to: "application#home"

  post '/savedrawing', to: "drawings#save"

  get '/:key', to: "drawings#getdrawing"
end
