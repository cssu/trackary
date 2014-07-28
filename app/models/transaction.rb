class Transaction < ActiveRecord::Base
  belongs_to :customer
  has_many :purchases
end
