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
require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
