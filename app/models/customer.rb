class Customer < ActiveRecord::Base
  has_many :purchases
end
