class Pet < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :gender, presence: true
 

end
