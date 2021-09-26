class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :type, :happiness, :image, :user_id
  belongs_to :user
end
