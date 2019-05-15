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
  end

  def compare

    render '/compare'
  end
end
