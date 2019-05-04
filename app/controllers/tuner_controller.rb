class TunerController < ApplicationController
  def home
    render "/home"
  end

  def record
    render '/record'
  end
end
