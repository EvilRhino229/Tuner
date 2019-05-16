Rails.application.routes.draw do
  get '/' => 'tuner#home'
  get '/home' => 'tuner#home'
  get '/about' => 'tuner#about'
  get '/record' => 'tuner#record'
  get '/compare' => 'tuner#compare'
  get '/error' => 'tuner#error'
  post '/compare_audio' => 'application#compare'
end
