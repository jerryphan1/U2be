# == Schema Information
#
# Table name: dislikes
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  video_id       :integer          not null
#  start_dislikes :integer          default(0), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Dislike < ApplicationRecord
  validates :user_id, uniqueness:{scope: :video_id,
  message: 'only one dislike per user on a video'}

validates :start_dislikes, presence: true 

belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User 

belongs_to :video,
  primary_key: :id,
  foreign_key: :video_id,
  class_name: :Video 

end
