Polymer('ty-store', {
  ready: function () {
    if (window.location.href.indexOf('/store') === -1) {
      window.history.pushState(null, '', '/#/store');
      window.history.go(0);
    }
  }
});
