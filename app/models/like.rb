# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
  # validates :user_id, :video_id, null: false 
  validates :user_id, uniqueness:{scope: :video_id,
          message: 'only one like per user on a video'}

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User 

  belongs_to :video,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video 
end
