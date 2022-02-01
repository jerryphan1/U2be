# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#  views       :integer          default(0), not null
#
class Video < ApplicationRecord
  validates :title, :views, presence: true 
  validate :ensure_thumbnail, :ensure_uploaded
  # aws/s3 syntax 
  has_one_attached :uploaded_video
  has_one_attached :thumbnail

  def ensure_thumbnail
    unless self.thumbnail.attached?
      errors[:thumbnail] << "Must include a valid thumbnail!"
    end
  end

  def ensure_uploaded
    unless self.uploaded_video.attached?
      errors[:uploaded_video] << "Must include a valid video!"
    end
  end

  has_many :comments,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Comment

  has_many :likes,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Like

  has_many :dislikes,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Dislike

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
