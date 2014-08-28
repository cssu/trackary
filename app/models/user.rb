class User < ActiveRecord::Base
  has_and_belongs_to_many :roles, join_table: 'users_roles'

  devise :database_authenticatable, :confirmable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  ##
  # Return true iff the user has the role specified by the given symbol
  def has_role?(role_sym)
    roles.any? { |r| r.name.underscore.to_sym == role_sym }
  end

end
