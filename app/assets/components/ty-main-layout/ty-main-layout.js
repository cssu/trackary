Polymer('ty-main-layout', {

  domReady: function() {
    this.topLevelRoutes = this.$.router.getTopLevelRoutes();
    this.activePath = this.$.router.activeRoute.hashPath;
  },

  handleRouteChange: function (event, route, sender) {
    debugger;
    this.activeRoute = route;
    this.$.menu.selected = _.findIndex(this.$.menu.querySelectorAll('a'), function (a) {
      return a.getAttribute('href') === route.hashPath;
    });
  }

});
