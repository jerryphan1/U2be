class VideoUpdate < ActiveRecord::Migration[5.2]
  def change
    remove_index :videos, :user_id
    remove_index :videos, :title 
    add_index :videos, :user_id
    add_index :videos, :title
  end
end
