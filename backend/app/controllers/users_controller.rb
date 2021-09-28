class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end
    
    def create 

        if user = User.find_or_create_by(user_params)
            render json: user
        else
            render json: {error: user.errors.full_messages}
        end
    end

private
    def user_params
        params.require(:user).permit(:username)
    end
end
