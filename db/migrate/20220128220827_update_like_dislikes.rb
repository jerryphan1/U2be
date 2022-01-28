class UpdateLikeDislikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :start_likes
    remove_column :dislikes, :start_dislikes
    remove_column :videos, :views
    add_column :videos, :views, :integer, null: false, default: 0
  end
end
