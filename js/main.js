(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };

  // Current year in footer
  var yr = $("#yr"); if (yr) yr.textContent = new Date().getFullYear();

  // Mobile menu: toggle, close on link tap, Escape, outside click, or when resized to desktop
  var header = $("header"), btn = $(".menu"), nav = $("#nav");
  function setMenu(open) {
    if (!btn || !nav) return;
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    btn.querySelector("span").textContent = open ? "Close" : "Menu";
    btn.querySelector("use").setAttribute("href", open ? "#i-close" : "#i-menu");
  }
  if (btn && nav) {
    btn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); btn.focus(); } });
    document.addEventListener("click", function (e) { if (!e.target.closest("header")) setMenu(false); });
    window.matchMedia("(min-width:961px)").addEventListener("change", function () { setMenu(false); });
  }

  // Header shadow and back-to-top button
  var top = $(".totop");
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 8);
    if (top) top.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  if (top) top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  // Reveal on scroll
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .12 });
    els.forEach(function (e) { io.observe(e); });
  } else { els.forEach(function (e) { e.classList.add("in"); }); }

  // Contact form: validate, then hand over to email or WhatsApp with the message pre-filled
  var form = $("#contact-form"), status = $("#form-status");
  if (form) {
    var say = function (msg, cls) { status.textContent = msg; status.className = "note " + (cls || ""); };
    function valid() {
      var ok = true, first = null;
      form.querySelectorAll("[required]").forEach(function (f) {
        var bad = !f.value.trim();
        f.setAttribute("aria-invalid", bad);
        if (bad) { ok = false; first = first || f; }
      });
      var em = form.elements.email;
      if (em.value && !em.checkValidity()) { em.setAttribute("aria-invalid", true); ok = false; first = first || em; } else em.removeAttribute("aria-invalid");
      if (!ok) { say("Please fill in the highlighted fields.", "err"); first.focus(); }
      return ok;
    }
    form.addEventListener("input", function (e) { if (e.target.getAttribute("aria-invalid")) e.target.removeAttribute("aria-invalid"); });
    function text() {
      var d = new FormData(form);
      return "Name: " + d.get("name") + "\nPhone: " + d.get("phone") + (d.get("email") ? "\nEmail: " + d.get("email") : "") + "\nTopic: " + d.get("topic") + "\n\n" + d.get("message");
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault(); if (!valid()) return;
      var t = text().replace(/\n/g, "\r\n");
      location.href = "mailto:support@asbdata.com?subject=" + encodeURIComponent("Enquiry: " + form.elements.topic.value) + "&body=" + encodeURIComponent(t);
      say("Opening your email app. If nothing opens, email support@asbdata.com directly.", "ok");
    });
    $("#send-wa").addEventListener("click", function () {
      if (!valid()) return;
      window.open("https://wa.me/2348135113960?text=" + encodeURIComponent(text()), "_blank", "noopener");
      say("Opening WhatsApp with your message ready to send.", "ok");
    });
  }
})();
