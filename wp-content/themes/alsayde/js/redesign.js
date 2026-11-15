(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      document.documentElement.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    var closeNav = function () {
      header.classList.remove("is-open");
      document.documentElement.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    header.querySelectorAll(".nav a").forEach(function (a) { a.addEventListener("click", closeNav); });
    window.addEventListener("resize", function () { if (window.innerWidth > 1180) closeNav(); });
  }

  document.querySelectorAll(".subtoggle").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var item = button.closest("li");
      var open = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && header) {
      header.classList.remove("is-open");
      document.documentElement.classList.remove("nav-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
      var search = document.querySelector(".search-form");
      if (search) search.classList.remove("is-open");
    }
  });

  var searchToggle = document.querySelector(".search-toggle");
  var searchForm = document.querySelector(".search-form");
  if (searchToggle && searchForm) {
    searchToggle.addEventListener("click", function () {
      var open = searchForm.classList.toggle("is-open");
      searchToggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        var field = searchForm.querySelector("input");
        if (field) field.focus();
      }
    });
  }

  window.addEventListener("scroll", function () {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 80);
  }, { passive: true });

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slides img"));
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (slides.length > 1 && !reduce) {
    var index = 0;
    window.setInterval(function () {
      slides[index].classList.remove("is-active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("is-active");
    }, 7000);
  }

  var track = document.querySelector(".track");
  var prev = document.querySelector("[data-scroll='prev']");
  var next = document.querySelector("[data-scroll='next']");
  function cardStep() {
    var card = track && track.querySelector(".org");
    return card ? card.getBoundingClientRect().width + 16 : 196;
  }
  function updateArrows() {
    if (!track || !prev || !next) return;
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  }
  if (track && prev && next) {
    prev.addEventListener("click", function () { track.scrollBy({ left: -cardStep(), behavior: "smooth" }); });
    next.addEventListener("click", function () { track.scrollBy({ left: cardStep(), behavior: "smooth" }); });
    track.addEventListener("scroll", updateArrows, { passive: true });
    updateArrows();
  }

  document.querySelectorAll("img[data-remote]").forEach(function (img) {
    function useRemote() {
      var remote = img.getAttribute("data-remote");
      if (remote && img.src !== remote) img.src = remote;
    }
    img.addEventListener("error", useRemote);
    if (img.complete && img.naturalWidth === 0) useRemote();
  });
})();
