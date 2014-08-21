Polymer('ty-main-layout', {

  attached: function() {
    this.topLevelRoutes = this.$.router.getTopLevelRoutes();
  },

  handleRouteChange: function (event, route, sender) {
    this.activeRoute = route;
    this.activePath = route.path;
  },

  /**
   * Toggle the drawer panel
   * @method togglePanel
   */
  togglePanel: function() {
    this.$.drawerPanel.togglePanel();
  },

  /**
   * Open the drawer panel
   * @method openDrawer
   */
  openDrawer: function() {
    this.$.drawerPanel.openDrawer();
  },

  /**
   * Close the drawer panel
   * @method closeDrawer
   */
  closeDrawer: function() {
    this.$.drawerPanel.closeDrawer();
  }

});
