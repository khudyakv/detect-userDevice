/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

/*
detectUserDevice create by Pragmatica;
Website: https://pragmatica.design/
---------------------------------------
Create by Vladislav Khudyakov
Telegram: @khudyakv
*/

(function () {
  const agent = navigator.userAgent.toLowerCase();
  const html = document.getElementsByTagName("html")[0];
  window.userDevice = {}

  const getBrowserName = () => {
    if (agent.indexOf("msie") > -1) {
      // IE6~10
      return "ie" + agent.match(/msie (\d+)/)[1];
    } else if (agent.indexOf("trident") > -1) {
      // IE11
      return "ie11";
    } else if (agent.indexOf("edge") > -1) {
      // MS Edge
      return "edge";
    } else if (agent.indexOf("firefox") > -1) {
      // Mozilla Firefox
      return "firefox";
    } else if (agent.indexOf("opr") > -1) {
      // Opera
      return "opera";
    } else if (agent.indexOf("yabrowser") > -1) {
      // ЯндексБраузер
      return "yandex";
    } else if ((navigator.vendor.toLowerCase().indexOf("google") > -1) || (agent.indexOf('chrome') > -1)) {
      // Google Chrome
      return 'chrome';
    } else if (agent.indexOf("safari") > -1) {
      return "safari";
    }
    return "";
  }
  window.userDevice.browser = getBrowserName();

  const getPlatform = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return "windows-phone";
    }
    if (/android/i.test(userAgent)) {
        return "android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "ios";
    }
    if (agent.indexOf("win")!=-1) {
      return "windows"
    }
    if (agent.indexOf("mac")!=-1) {
      return "mac"
    }
    if (agent.indexOf("x11")!=-1) {
      return "unix"
    }
    if (agent.indexOf("linux")!=-1) {
      return "linux"
    }
    return "";
  }
  window.userDevice.platform = getPlatform();

  html.classList.add(
    getPlatform(),
    getBrowserName()
  );

  const getHighResolution = () => {
    const pixelRatio = window.devicePixelRatio;
    if (pixelRatio) {
      const className = pixelRatio > 1 ? 'retina' : 'no-retina';
      html.classList.add(className);
      return pixelRatio;
    }
    return "";
  }
  window.userDevice.pixelRatio = getHighResolution();

  const getTouch = () => {
    const contain = 'ontouchstart' in window || navigator.maxTouchPoints;
    const className = contain ? 'touch' : 'no-touch';
    html.classList.add(className);
    return Boolean(contain);
  }
  window.userDevice.touch = getTouch();

})();
/******/ })()
;
//# sourceMappingURL=detectUserDevice.js.map