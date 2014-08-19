Polymer('ty-main-layout', {

  domReady: function() {
    this.topLevelRoutes = this.$.router.getTopLevelRoutes();
  },

  handleRouteChange: function (event, route, sender) {
    this.activeRoute = route;
  }

});
