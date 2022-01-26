# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  views       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#
class Video < ApplicationRecord
  validates :title, :views, presence: true 

  # aws/s3 syntax 
  has_one_attached :uploaded_video
  has_one_attached :thumbnail

  has_many :comments,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Comment

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
