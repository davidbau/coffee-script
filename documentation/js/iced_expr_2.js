// Generated by IcedCoffeeScript 1.2.0e
var x, __iced_deferrals,
  _this = this;

__iced_k = function() {};

(function(__iced_k) {
  (function(__iced_k) {
    __iced_deferrals = new iced.Deferrals(__iced_k);
    add(1, 2, __iced_deferrals.defer({
      assign_fn: (function() {
        return function() {
          return __iced_deferrals.ret = arguments[0];
        };
      })()
    }));
    __iced_deferrals._fulfill();
  })(function(___iced_p__5) {
    return (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k);
      add(3, 4, __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return __iced_deferrals.ret = arguments[0];
          };
        })()
      }));
      __iced_deferrals._fulfill();
    })(function(___iced_p__4) {
      __iced_deferrals = new iced.Deferrals(__iced_k);
      add(___iced_p__5, ___iced_p__4, __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return __iced_deferrals.ret = arguments[0];
          };
        })()
      }));
      __iced_deferrals._fulfill();
    });
  });
})(function(___iced_p__3) {
  return x = ___iced_p__3;
});;
