class Pet < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :gender, presence: true

  def username=(name_params)
     if !name_params.blank?
        self.user = User.find_or_create_by(username: name_params)
     end
  end
 

end
