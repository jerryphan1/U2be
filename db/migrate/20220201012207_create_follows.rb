class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false 
      t.integer :user_following_id, null: false 
      t.timestamps
    end
    add_index :follows, :user_id
    add_index :follows, :user_following_id
  end
end
