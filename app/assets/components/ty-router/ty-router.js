(function () {

  var _routes = [];
  var _redirects = [];

  Polymer('ty-router', {

    /**
     * Shared set of routes accessible from all instances of <ty-router>
     *
     * @property routes
     * @type {array}
     */
    routes: _routes,

    /**
     * Shared set of redirects; routes that redirect to another route
     *
     * @property redirects
     * @type {array}
     */
    redirects: _redirects,

    activityTitle: '',

    ready: function() {
      _.forEach(this.querySelectorAll('ty-route'), function (route) {
        if (route.redirect)
          _redirects.push(route);
        else
          _routes.push(route);
      });
      this.initialized = true;
    },

    /**
     * Get the set of top-level routes (i.e. <ty-route topLevel="true">)
     *
     * @returns {Element[]}
     */
    getTopLevelRoutes: function () {
      return _.filter(this.routes, function (route) {
        return route.topLevel === 'true';
      });
    },

    /**
     * Gets the <ty-route> with the given path
     *
     * @param {string} path
     * @returns {Element|null} The <ty-route> with the given path, or null if none exists
     */
    getRouteWithPath: function (path) {
      return _.find(this.routes, function (route) {
        return route.path === path;
      });
    },

    /**
     * Handle when the underlying <app-router> cannot find a valid route
     *
     * @param event
     * @param detail
     */
    handleRedirect: function (event, detail) {
      this.appRouter = this.appRouter || this.querySelector('::shadow app-router');
      var path = detail.path;
      var route = _.find(this.redirects, function (route) {
        return this.appRouter.testRoute(route.path, path, 'ignore', false);
      }, this);
      if (route)
        window.location.hash = route.redirect;
    },

    /**
     * Handle when the underlying <app-router> changes its route.
     *
     * @param event
     * @param route
     */
    handleActivateRoute: function (event, route) {
      this.currentActivity = this.querySelector('::shadow active-route > *');
      if (this.currentActivity) this.activityTitle = this.currentActivity.activityTitle;
      this.activeRoute = this.getRouteWithPath(route.path);
      this.fire('route-change', this.activeRoute);
    }

  });

}());
