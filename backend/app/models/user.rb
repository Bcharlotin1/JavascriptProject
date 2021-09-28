class User < ApplicationRecord
    has_many :pets
    validates :username, uniqueness: true,  presence: true
    
end
