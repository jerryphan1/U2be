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
require 'test_helper'

class DislikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
