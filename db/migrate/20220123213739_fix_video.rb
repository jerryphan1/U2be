class FixVideo < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :description
    add_column :videos, :description, :text
  end
end
