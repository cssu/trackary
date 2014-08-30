##
# Functions available in all application templates
module ApplicationHelper

  def user_link
    if user_signed_in?
      link_to 'Account', edit_user_registration_path
    elsif
      link_to 'Sign In / Register', new_user_session_path
    end
  end

end
