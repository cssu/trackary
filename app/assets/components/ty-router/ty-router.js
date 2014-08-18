(function () {

  var _routes = [];

  Polymer('ty-router', {
    routes: _routes,

    ready: function() {
      _.forEach(this.querySelectorAll('ty-route'), function (route) {
        _routes.push(route);
      });
    },

    getTopLevelRoutes: function () {
      return _.filter(this.routes, function (route) {
        return true;
      });
    }
  });

}());
