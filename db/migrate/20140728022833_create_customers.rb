class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name, null: false
      t.string :email
      t.string :student_number
      t.integer :reward_points, null: false
      t.references :user, index: true

      t.timestamps
    end
  end
end
