!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector(".form"),u=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]');document.querySelector("button");function c(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(e){if(e.preventDefault(),u.value<=0||a.value<=0||l.value<=0)return void r.Notify.failure("❌ Values must be > 0");for(var n=+u.value,t=1;t<=+l.value;t+=1)c(t,n).then((function(e){var n=e.position,t=e.delay;return r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;return r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=+a.value;i.reset()}))}();
//# sourceMappingURL=03-promises.279dc02e.js.map