Polymer('ty-signin-register', {
  ready: function () {

  },

  handleNewRegistration: function (registeredUser) {

  },

  onSignInClick: function () {
    debugger;
    var email = this.$.email.value;
    var password = this.$.password.value;

    this.$.devise.register({
      email: email,
      password: password,
      password_confirmation: password
    }).then(function (registeredUser) {
      console.info('registeredUser:', registeredUser);
    }, function (error) {
      console.error(error);
    });
  }
});
