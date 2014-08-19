Polymer('ty-main-layout', {

  domReady: function() {
    this.topLevelRoutes = this.$.router.getTopLevelRoutes();
    this.activePath = this.$.router.activeRoute.hashPath;
  },

  observe: {
    '$.router.activeRoute.hashPath': 'handleRouteChange'
  },

  handleRouteChange: function (event, hashPath, sender) {
    debugger;
    this.activePath = hashPath;
  }

});
