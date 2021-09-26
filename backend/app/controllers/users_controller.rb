class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end
    
    # def create 
    #     user = User.new(username)
    #     if user.save 
    #         render json: user
    #     else
    #         render json: {error: "Couldnt be saved"}
    #     end
    # end

end
