HTMLElement.prototype.animateCss = function(animationName, callback) {
  this.addClass("animated " + animationName).one("animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd", function() {
    this.removeClass(animationName);
    if (typeof callback === "function") { callback(); }
  });
}