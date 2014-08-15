Polymer('ty-main-layout', {
  ready: function() {
    this.menuItems = Array.prototype.filter.call(this.querySelectorAll('app-route'), function(appRoute) {
      return appRoute.getAttribute('showInSidebar') === 'true';
    }).map(function (appRoute) {
      return {
        icon: appRoute.getAttribute('icon'),
        label: appRoute.getAttribute('label'),
        link: '/#' + appRoute.getAttribute('path')
      };
    });
  }
});
