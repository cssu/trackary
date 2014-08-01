source 'https://rubygems.org'

# Ruby version
ruby '2.1.2'

# Ruby on Rails!
gem 'rails', '4.1.4'

group :development, :test do
  # Use rspec for testing (instead of the default Test:Unit)
  gem 'rspec-rails'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # Add the `spring rspec` command
  gem 'spring-commands-rspec'

  # Use guard to run tests automatically. Only needed for command line; don't need to automatically `require`
  gem 'guard-rspec', '~> 4.2.9', require: false
end

group :test do
  # Use capybara + selenium for simulating user interaction
  gem 'selenium-webdriver'
  gem 'capybara'
end

group :production do
  # Direct logs to stdout and enable development/production parity
  gem 'rails_12factor'
end

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', '~> 0.4.0'
end

# Use postgresql as the database for Active Record
gem 'pg'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'

# Use bourbon Sass mixins
gem 'bourbon'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Use emcee for web components
gem 'emcee'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Allows manually setting request timeout
gem 'rack-timeout'

# Use puma as the app server
gem 'puma'

# Use New Relic for monitoring
# gem 'newrelic_rpm'

# Use MetaTags for search engine optimization
gem 'meta-tags'

# Use devise for authentication
gem 'devise'

# Use CanCan for authorization
gem 'cancan'

# Use doorkeeper for oauth authentication
gem 'doorkeeper'
