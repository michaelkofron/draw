class CreateDrawings < ActiveRecord::Migration[6.0]
  def change
    create_table :drawings do |t|
      t.string :picture_link
      t.string :key
    end
  end
end
