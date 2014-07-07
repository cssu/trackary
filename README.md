trackary
========

Inventory tracking & point-of-sale for the CSSU

### Overview

This is a Ruby on Rails app.

### Development

*Note: This has only been tested on OS X 10.9.2, 10.9.3*

You need the following prerequisutes:

- Ruby 2.1.2 (I recommend [rbenv](https://github.com/sstephenson/rbenv) for managing ruby versions)

- Bundler:

    gem install bundler

The rest of the dependencies can be installed by running:

    cd trackary/
    bundle install

Start a local test server by running:

    rails server

Finally, run Guard in the background to continuously run tests:

    guard

### Deploying to staging

We're using [Dokku](https://github.com/progrium/dokku) to deploy the website to a
[DigitalOcean](https://www.digitalocean.com/) server.

To add your public key to the server, send it to the `sshcommand` command on the server.
Assuming your public key is in `~/.ssh/id_rsa.pub`:

    cat ~/.ssh/id_rsa.pub | ssh root@trackary.cssu.ca "sshcommand acl-add dokku <name>"

(Where `<name>` is any label you want for the key, probably your name)

Once your public ssh key has been added to Dokku, add the remote:

    git remote add staging dokku@trackary.cssu.ca:staging

Then, whenever you want to deploy, simply:

    git push staging master

The site is live at <http://staging.trackary.cssu.ca>

On the server, PostgreSQL is used as the database. See [dokku-pg-plugin](https://github.com/Kloadut/dokku-pg-plugin).

### Deploying to production

Follow the same instructions as above, but use the following remote:

    git remote add production dokku@trackary.cssu.ca:trackary.cssu.ca

The site is live at <https://trackary.cssu.ca>
