(function () {

  var _routes = [];

  Polymer('ty-router', {
    routes: _routes,

    get activeRoute() {
      var appRoute = this.querySelector('::shadow app-route[active]');
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

    domReady: function () {
//      this.querySelector('::shadow app-router').addEventListener('state-change', function () {
//        debugger;
//      });
    },

    getTopLevelRoutes: function () {
      return _.filter(this.routes, function (route) {
        return route.topLevel === 'true';
      });
    },

    handleStateChange: function () {
      debugger;
    }

  });

}());
