Polymer('ty-main-layout', {

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
