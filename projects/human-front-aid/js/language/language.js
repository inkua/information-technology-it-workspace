// language.js

var currentLanguage = localStorage.getItem("language") || "language_en_data";
var translations;
var currentSection = document.body.getAttribute("data-section");


function insertScript(language) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement("script");
    script.src = "../js/language/" + language + ".js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function translateDOM(section) {
  var elements = document.querySelectorAll("[data-translate]");
  elements.forEach(function(element) {
    var key = element.getAttribute("data-translate");
    var translation = translations[section][key];

    if (element.hasChildNodes()) {
      var childNodes = Array.from(element.childNodes);
      childNodes.forEach(function(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          var wrapper = document.createElement("div");
          wrapper.innerHTML = translation;
          var translatedNode = wrapper.firstChild;
          element.replaceChild(translatedNode, node);
        }
      });
    } else {
      element.textContent = translation;
    }
  });
}


function changeLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("language", language);
  insertScript(language)
    .then(function() {
      translations = window.translations;
      translateDOM(currentSection);
    })
    .catch(function(error) {
      console.error("Error loading translations:", error);
    });
}


insertScript(currentLanguage)
  .then(function() {
    translations = window.translations;
    translateDOM(currentSection);
  })
  .catch(function(error) {
    console.error("Error loading translations:", error);
  });
