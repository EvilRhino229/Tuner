class TunerController < ApplicationController
  def home
    render "/home"
  end

  def audio
    audio = @guitar_string.audio
  end

  def record
    params.permit(:audio)
    render '/record'
    @guitar_string.audio.attach(params[:audio])
  end

  def compare

    render '/compare'
  end
end
