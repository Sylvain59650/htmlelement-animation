HTMLElement.prototype.animateCss = function(animationName, callback) {
  var animationEnd = function(el) {
    var animations = {
      animation: "animationend",
      OAnimation: "oAnimationEnd",
      MozAnimation: "mozAnimationEnd",
      WebkitAnimation: "webkitAnimationEnd"
    };

    for (var t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  };

  this.addClass("animated " + animationName).one(animationEnd, function() {
    debugger;
    this.removeClass("animated " + animationName);

    if (typeof callback === "function") { callback(); }
  });
}