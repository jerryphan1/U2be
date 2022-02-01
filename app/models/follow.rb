# == Schema Information
#
# Table name: follows
#
#  id                :bigint           not null, primary key
#  user_id           :integer          not null
#  user_following_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Follow < ApplicationRecord
  validates :user_id, :user_following_id


  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :user_following,
    primary_key: :id,
    foreign_key: :user_following_id,
    class_name: :User
end
