##
# Functions available in all application templates
module ApplicationHelper

  ##
  # Returns the given page title appended to the base title,
  # or just the base title if no page title is given
  def full_title(page_title = '')
    base_title = 'UofTHacks'
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end

end
