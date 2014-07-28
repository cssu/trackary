class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.integer :quantity
      t.references :product, index: true
      t.references :transaction, index: true

      t.timestamps
    end
  end
end
