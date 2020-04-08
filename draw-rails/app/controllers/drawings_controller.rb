class DrawingsController < ApplicationController
    before_action :authenticate_user
    after_filter :cors_set_access_control_headers
    skip_before_filter :authenticate_user, :only => [:route_options]

    def save
        drawing = Drawing.create(picture_link: params[:link], key: params[:key])

        render json: drawing
    end

    def getdrawing
        @drawing = Drawing.find_by(key: params[:key])

        render :show
    end

    private

    def authenticate_user
        #Do some cool stuff with tokens to identify the user
    end

    def cors_set_access_control_headers
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, PATCH, DELETE, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token, Auth-Token, Email'
        response.headers['Access-Control-Max-Age'] = "1728000"
    end
        
    def cors_preflight_check
        if request.method == 'OPTIONS'
        request.headers['Access-Control-Allow-Origin'] = '*'
        request.headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, PATCH, DELETE, OPTIONS'
        request.headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-Prototype-Version, Token, Auth-Token, Email'
        request.headers['Access-Control-Max-Age'] = '1728000'  
        render :text => '', :content_type => 'text/plain'
        end
    end
end