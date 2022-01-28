class LikeTable < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :start_likes, :integer, null: false, default: 0
  end
end
