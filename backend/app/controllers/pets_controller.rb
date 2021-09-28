class PetsController < ApplicationController
  def index 
    pets = Pet.all 
    render json: pets
  end
  
  def show 
    pet = Pet.find_by_id(params[:id])
    render json: pet
  end
  
  def create 
    pet = Pet.new(pet_params)
    pet.happiness = 100
    byebug
   if pet.save
        render json: pet
    else
        render json: {error: pet.errors.full_messages}
    end
  end

  def update
    pet = Pet.find_by_id(params[:id])
    if pet.update(pet_params)
        render json: pet
    else
        render json: {error: pet.errors.full_messages}
    end
  end


  def destroy
    pet = Pet.find_by_id(params[:id])
    pet.destroy
    render json: {message: "Successfully deleted #{pet.name}"}
  end


  
  private
    def pet_params
      params.require(:pet).permit(:name, :gender, :type, :happiness, :image, :user_id)
    end
end
