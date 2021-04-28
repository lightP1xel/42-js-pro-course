/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils/components.js
var createComponent = function createComponent(stringHtml) {
  console.log('createComponent', stringHtml);
  return new DOMParser().parseFromString(stringHtml, 'text/html').querySelector('body').firstChild;
};
var notUsedFunction = function notUsedFunction() {
  console.log('notUsedFunction');
};
;// CONCATENATED MODULE: ./src/components/Header/logo.png
/* harmony default export */ const logo = (__webpack_require__.p + "8e3dd0d1ec344c0d687b9a0d24c43f06.png");
;// CONCATENATED MODULE: ./src/components/Header/Header.js




var Header = function Header() {
  return createComponent("\n  <header class=\"header\">\n    <img src=\"".concat(logo, "\" width=\"200\" alt=\"\" />\n    <a href=\"/home\">Home</a>\n    <a href=\"/contacts\">Contacts</a>\n  </header>\n"));
};

/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Header/index.js

/* harmony default export */ const components_Header = (Header_Header);
;// CONCATENATED MODULE: ./src/components/Content/cat.jpeg
/* harmony default export */ const cat = (__webpack_require__.p + "2cf85f48c9278d3d9439376c80e4d065.jpeg");
;// CONCATENATED MODULE: ./src/components/Content/Content.js




var Content = function Content() {
  return createComponent("\n  <main class=\"content\">\n    <h1>My app</h1>\n    <p>Some text with custom font</p>\n    <img src=\"".concat(cat, "\" />\n  </main>\n"));
};

/* harmony default export */ const Content_Content = (Content);
;// CONCATENATED MODULE: ./src/components/Content/index.js

/* harmony default export */ const components_Content = (Content_Content);
;// CONCATENATED MODULE: ./src/components/Contacts/cat-computer.jpeg
/* harmony default export */ const cat_computer = (__webpack_require__.p + "9a222994fd50c9e188de89408ccc1547.jpeg");
;// CONCATENATED MODULE: ./src/components/Contacts/Contacts.js




var Contacts = function Contacts() {
  return createComponent("\n  <main class=\"contacts\">\n    <h1>Contacts</h1>\n    <p>Some info about site</p>\n    <img src=\"".concat(cat_computer, "\" />\n  </main>\n"));
};

/* harmony default export */ const Contacts_Contacts = (Contacts);
;// CONCATENATED MODULE: ./src/components/Contacts/index.js

/* harmony default export */ const components_Contacts = (Contacts_Contacts);
;// CONCATENATED MODULE: ./src/main.js





var render = function render() {
  var root = document.querySelector("#app");
  root.innerHTML = "";
  root.appendChild(components_Header());

  if (window.location.pathname === "/home" || window.location.pathname === "/") {
    // import('./components/Content')
    //   .then(({ default: contentModule }) => {
    //     console.log(contentModule)
    //     root.appendChild(contentModule())
    //   })
    root.appendChild(components_Content());
  }

  if (window.location.pathname === "/contacts") {
    root.appendChild(components_Contacts());
  }
};

if (false) {}

render();
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map