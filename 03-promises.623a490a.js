!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");function a(e,n){var t=Math.random()>.3,r={position:e,delay:n};return new Promise((function(e,o){setTimeout((function(){t?e(r):o(r)}),n)}))}document.querySelector(".form").addEventListener("submit",(function(e){if(e.preventDefault(),e.currentTarget.delay.value<0||e.currentTarget.amount.value<=0)return o.Notify.warning("Delay step and amount values must be positive numbers and the amount value must be more than zero");for(var n=Number(e.currentTarget.delay.value),t=Number(e.currentTarget.step.value),r=Number(e.currentTarget.amount.value),u=1;u<=r;u+=1)a(u,n).then((function(e){var n=e.position,t=e.delay;o.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;o.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=t}))}();
//# sourceMappingURL=03-promises.623a490a.js.map
