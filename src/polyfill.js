if (!HTMLElement.prototype.one) {
  HTMLElement.prototype.one = function(evtNames, fn) {
    let evts = evtNames.split(" ");
    let cb = fn;
    for (let i = 0; i < evts.length; i++) {
      let evt = evts[i];
      if (this.addEventListener) {
        if (!!document.documentMode) {
          var self = this;
          fn.removed = false;
          var oneCall = function() {
            if (!fn.removed) {
              fn(event);
              fn.removed = true;
            }
            self.off(evt, oneCall);
          }
          cb = oneCall;
        }
        this.addEventListener(evt, fn, { once: true });
      } else if (this.attachEvent) {
        this.attachEvent("on" + evt, fn);
      }
    }
  }
}