class DrawingsController < ApplicationController

    protect_from_forgery with: :null_session

    def save
        drawing = Drawing.create(picture_link: params[:link], key: params[:key])

        render json: drawing
    end

    def getdrawing
        @drawing = Drawing.find_by(key: params[:key])

        render :show
    end
end