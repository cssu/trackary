class CreateProductCategories < ActiveRecord::Migration
  def change
    create_table :product_categories do |t|
      t.string :name, null: false
      t.text :description

      t.timestamps
    end
  end
end
