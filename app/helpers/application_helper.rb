##
# Functions available in all application templates
module ApplicationHelper

  def user_label
    user_signed_in? ? 'Account' : 'Sign In / Register'
  end

  def user_path
    user_signed_in? ? current_user : new_user_session_path
  end

end
