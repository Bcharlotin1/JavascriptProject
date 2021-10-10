class PetsController < ApplicationController

  def create
    pet = Pet.new(pet_params)
    pet.happiness = 100
   if pet.save
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
      params.require(:pet).permit(:name, :gender, :dog_type, :happiness, :image, :username)
    end
end
