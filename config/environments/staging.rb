# Use shared configuration between production and staging
require Rails.root.join('config/environments/shared_production')

Rails.application.configure do

  # Default url base when generating urls in messages
  config.action_mailer.default_url_options = { host: 'staging.trackary.cssu.ca' }

end
