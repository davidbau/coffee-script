// Generated by IcedCoffeeScript 1.2.0e
var __iced_deferrals,
  _this = this;

__iced_k = function() {};

(function(__iced_k) {
  __iced_deferrals = new iced.Deferrals(__iced_k);
  slowAlert(500, "hello", __iced_deferrals.defer({}));
  slowAlert(1000, "friend", __iced_deferrals.defer({}));
  __iced_deferrals._fulfill();
})(function() {
  (function(__iced_k) {
    __iced_deferrals = new iced.Deferrals(__iced_k);
    slowAlert(500, "back after a delay", __iced_deferrals.defer({}));
    __iced_deferrals._fulfill();
  })(function() {
    return alert("Goodbye!");
  });
});
