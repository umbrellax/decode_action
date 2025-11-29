//Sat Nov 29 2025 09:19:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

function _toConsumableArray(_0x3b6ae5) {
  return _arrayWithoutHoles(_0x3b6ae5) || _iterableToArray(_0x3b6ae5) || _unsupportedIterableToArray(_0x3b6ae5) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(_0x5b954a, _0xb9ea2) {
  if (_0x5b954a) {
    if ("string" == typeof _0x5b954a) return _arrayLikeToArray(_0x5b954a, _0xb9ea2);
    var _0x115c8b = Object.prototype.toString.call(_0x5b954a).slice(8, -1);
    "Object" === _0x115c8b && _0x5b954a.constructor && (_0x115c8b = _0x5b954a.constructor.name);
    return "Map" === _0x115c8b || "Set" === _0x115c8b ? Array.from(_0x5b954a) : "Arguments" === _0x115c8b || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x115c8b) ? _arrayLikeToArray(_0x5b954a, _0xb9ea2) : undefined;
  }
}
function _iterableToArray(_0x2d4675) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(_0x2d4675)) return Array.from(_0x2d4675);
}
function _arrayWithoutHoles(_0x2a25f2) {
  if (Array.isArray(_0x2a25f2)) return _arrayLikeToArray(_0x2a25f2);
}
function _arrayLikeToArray(_0x8e473f, _0x44305c) {
  (null == _0x44305c || _0x44305c > _0x8e473f.length) && (_0x44305c = _0x8e473f.length);
  for (var _0x221a41 = 0, _0x700a92 = new Array(_0x44305c); _0x221a41 < _0x44305c; _0x221a41++) _0x700a92[_0x221a41] = _0x8e473f[_0x221a41];
  return _0x700a92;
}
function switchPage() {}
function getMoveDirection(_0x4af753, _0x50eab7, _0x3c6ad4, _0x5a3a6d) {
  if (isPhone) {
    var _0x121396 = _0x3c6ad4 - _0x4af753,
      _0x2ba9b3 = _0x5a3a6d - _0x50eab7;
    if (Math.abs(_0x121396) < 2 && Math.abs(_0x2ba9b3) < 2) return DIRECTIONS.UNDIRECTED;
    var _0x67c043,
      _0x50e70c,
      _0x499453 = (_0x67c043 = _0x121396, _0x50e70c = _0x2ba9b3, 180 * Math.atan2(_0x50e70c, _0x67c043) / Math.PI);
    return -135 <= _0x499453 && _0x499453 <= -45 ? DIRECTIONS.UP : 45 < _0x499453 && _0x499453 < 135 ? DIRECTIONS.DOWN : 135 <= _0x499453 && _0x499453 <= 180 || -180 <= _0x499453 && _0x499453 < -135 ? DIRECTIONS.LEFT : -45 <= _0x499453 && _0x499453 <= 45 ? DIRECTIONS.RIGHT : DIRECTIONS.UNDIRECTED;
  }
}
function loadIntro() {
  document[hiddenProperty] || loadIntro.loaded || (setTimeout(function () {
    $(".wrap").classList.add("in");
    setTimeout(function () {
      $(".content-subtitle").innerHTML = "<span>".concat(_toConsumableArray(subtitle).join("</span><span>"), "</span>");
    }, 270);
  }, 0), loadIntro.loaded = true);
}
console.group("%c 作者信息", "color: #fadfa3;background: #030307;padding:5px");
console.log("%c 一支穿云箭，千军万马来相见！ My Name's 韩小韩 QQ：1655466387", "color: #fadfa3;background: #030307;padding:5px");
console.log("%c 韩小韩博客 Www.Vvhan.Com", "color: #fadfa3;background: #030307;padding:5px");
console.log("%c 韩小韩API接口 Api.Vvhan.Com", "color: #fadfa3;background: #030307;padding:5px");
console.log("%c 欢迎前来围观、吐槽、点赞、学习......", "color: #fadfa3;background: #030307;padding:5px");
console.groupEnd();
console.group("%c 一言", "color: #ffffff;background: #6666FF;padding:5px");
console.log("%c 难忘和难过总都是会有的吧", "color: #ffffff;background: #6666FF;padding:5px");
console.log("%c 那些人和事情总都是会有的吧", "color: #ffffff;background: #6666FF;padding:5px");
console.log("%c 明亮与晦暗总都是会有的吧", "color: #ffffff;background: #6666FF;padding:5px");
console.groupEnd();
window.$ = _0x47a659 => document.querySelector(_0x47a659);
const getOriginalContent = _0x321078 => $(_0x321078).getAttribute("original-content");
window.subtitle = getOriginalContent(".content-subtitle");
window.signature = getOriginalContent("#signature");
window.config = {
  "SIM_RESOLUTION": 128,
  "DYE_RESOLUTION": 1024,
  "CAPTURE_RESOLUTION": 512,
  "DENSITY_DISSIPATION": 1,
  "VELOCITY_DISSIPATION": 0.2,
  "PRESSURE": 0.8,
  "PRESSURE_ITERATIONS": 20,
  "CURL": 30,
  "SPLAT_RADIUS": 0.25,
  "SPLAT_FORCE": 6000,
  "SHADING": true,
  "COLORFUL": true,
  "COLOR_UPDATE_SPEED": 10,
  "PAUSED": false,
  "BACK_COLOR": {
    "r": 30,
    "g": 31,
    "b": 33
  },
  "TRANSPARENT": false,
  "BLOOM": true,
  "BLOOM_ITERATIONS": 8,
  "BLOOM_RESOLUTION": 256,
  "BLOOM_INTENSITY": 0.4,
  "BLOOM_THRESHOLD": 0.8,
  "BLOOM_SOFT_KNEE": 0.7,
  "SUNRAYS": true,
  "SUNRAYS_RESOLUTION": 196,
  "SUNRAYS_WEIGHT": 1
};
window.hiddenProperty = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "mozHidden" in document ? "mozHidden" : null;
window.DIRECTIONS = {
  "UP": "UP",
  "DOWN": "DOWN",
  "LEFT": "LEFT",
  "RIGHT": "RIGHT",
  "UNDIRECTED": "UNDIRECTED"
};
window.isPhone = /Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent);
window.visibilityChangeEvent = hiddenProperty.replace(/hidden/i, "visibilitychange");
window.addEventListener(visibilityChangeEvent, loadIntro);
window.addEventListener("DOMContentLoaded", loadIntro);
_0xodM = "jsjiami.com.v6";