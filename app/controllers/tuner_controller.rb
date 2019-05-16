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
  def error

  end
  def compare
    file = params[:blob]
    context1 = Chromaprint::Context.new(44100, 1)
    fingerprint1 = context1.get_fingerprint(File.binread(file))
    context2     = Chromaprint::Context.new(44100, 1)
    fingerprint2 = context2.get_fingerprint(File.binread('B2.wav'))
    p fingerprint1.compare(fingerprint2)
  end
end
