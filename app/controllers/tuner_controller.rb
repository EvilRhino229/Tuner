class TunerController < ApplicationController
  def home
    render "/home"
  end

  def audio
    
  end

  def record
    params.require(:guitar_string).permit(:audio)
    render '/record'
    @guitar_string.audio.attach(params[:audio])
  end

  def compare

    render '/compare'
  end
end
