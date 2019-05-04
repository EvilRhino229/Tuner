Rails.application.routes.draw do
  get '/' => 'tuner#home'
  get '/home' => 'tuner#home'
  get '/about' => 'tuner#about'
  get '/record' => 'tuner#record'
end
