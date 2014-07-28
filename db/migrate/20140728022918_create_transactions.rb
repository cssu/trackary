class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.references :customer, index: true

      t.timestamps
    end
  end
end
