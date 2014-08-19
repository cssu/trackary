(function () {

  var _routes = [];

  Polymer('ty-router', {
    routes: _routes,

    get activeRoute() {
      var appRoute = this.querySelector('::shadow app-route[active]');
      if (!appRoute) return;
      var path = appRoute.getAttribute('path');
      return _.find(this.routes, function (route) {
        return route.path === path;
      });
    },

    ready: function() {
      _.forEach(this.querySelectorAll('ty-route'), function (route) {
        _routes.push(route);
      });
      this.initialized = true;
    },

    getTopLevelRoutes: function () {
      return _.filter(this.routes, function (route) {
        return route.topLevel === 'true';
      });
    },

    handleStateChange: function () {
      this.async(function () {
        this.asyncFire('route-change', this.activeRoute);
      }, null, 0);
    }

  });

}());
