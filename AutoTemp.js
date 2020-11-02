// ==UserScript==
// @name         NUSTemp
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  have fun
// @author       Max
// @match        https://myaces.nus.edu.sg/htd/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  var radioElements = document.getElementsByName("symptomsFlag");

  for (var i = 0; i < radioElements.length; i++) {
    if (radioElements[i].getAttribute("value") == "N") {
      radioElements[i].checked = true;
    }
  }
})();

(function () {
  "use strict";
  var radioElements = document.getElementsByName("familySymptomsFlag");

  for (var i = 0; i < radioElements.length; i++) {
    if (radioElements[i].getAttribute("value") == "N") {
      radioElements[i].checked = true;
    }
  }
})();

(function () {
  "use strict";
  document.getElementById("temperature").value =
    35.9 + Math.floor(Math.random() * 7) / 10;
})();

(function () {
  "use strict";
  var saveElement = document.getElementsByName("Save");

  for (var i = 0; i < saveElement.length; i++) {
    if (saveElement[i].getAttribute("value") == "Submit") {
      saveElement[i].click();
    }
  }
})();
