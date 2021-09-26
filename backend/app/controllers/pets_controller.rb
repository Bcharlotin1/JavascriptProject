class PetsController < ApplicationController
  def index 
    pets = Pets.all 
    render json: pets
  end
end
