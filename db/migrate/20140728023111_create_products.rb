class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.integer :reward_points_cost
      t.references :product_category, index: true

      t.timestamps
    end
  end
end
