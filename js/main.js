(function () {
  var P = {
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
    radio: '<path d="M4.9 19.1a10 10 0 0 1 0-14.2M19.1 4.9a10 10 0 0 1 0 14.2M8.1 16a5.5 5.5 0 0 1 0-8M15.9 8a5.5 5.5 0 0 1 0 8"/><circle cx="12" cy="12" r="1.5"/>',
    tower: '<path d="M12 12v10M8 22h8M7 8a7 7 0 0 1 10 0M4.5 5.5a11 11 0 0 1 15 0"/><circle cx="12" cy="11" r="1.5"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5L21 12.6a2 2 0 0 1 0 2.8l-5.6 5.6a2 2 0 0 1-2.8 0l-9.6-9.6a2 2 0 0 1 0-2.8L7 3.2a4 4 0 0 0 5 5z"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    car: '<path d="M5 17H3v-5l2-5h14l2 5v5h-2"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/><path d="M3 12h18"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
    bulb: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-10 16-10 0 10-4 17-9 17zM4 21c3-6 6-9 11-11"/>',
    handshake: '<path d="m11 17 2 2a1.4 1.4 0 0 0 2-2M14 14l2.5 2.5a1.4 1.4 0 0 0 2-2L15 11M2 11l5-5 4 1 3-1 6 6-3 4M2 11l4 4a1.4 1.4 0 0 0 2 0"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    data: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    up: '<path d="m18 15-6-6-6 6"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    wa: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.5A8.4 8.4 0 1 1 21 11.5z"/>',
    truck: '<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    store: '<path d="M3 9 5 3h14l2 6M3 9v12h18V9M3 9c0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0"/>',
    bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>'
  };
  function icon(n) { return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + (P[n] || "") + "</svg>"; }
  function paint(root) {
    (root || document).querySelectorAll("i[data-i]").forEach(function (el) {
      var t = document.createElement("span"); t.innerHTML = icon(el.getAttribute("data-i"));
      el.replaceWith(t.firstChild);
    });
  }

  var pages = [["index.html", "Home"], ["about.html", "About"], ["services.html", "Services"], ["brands.html", "Our brands"], ["contact.html", "Contact"]];
  var cur = location.pathname.split("/").pop() || "index.html";
  var links = pages.map(function (p) {
    return '<a href="' + p[0] + '"' + (p[0] === cur ? ' class="active" aria-current="page"' : "") + ">" + p[1] + "</a>";
  }).join("");
  var navLinks = pages.slice(0, 4).map(function (p) {
    return '<a href="' + p[0] + '"' + (p[0] === cur ? ' class="active" aria-current="page"' : "") + ">" + p[1] + "</a>";
  }).join("") + '<a class="cta-link' + (cur === "contact.html" ? " active" : "") + '" href="contact.html">Get in touch</a>';

  var h = document.getElementById("site-header");
  if (h) {
    h.innerHTML = '<div class="topbar"><div class="wrap"><div><a href="tel:+2348135113960">' + icon("phone") + '08135113960</a><a href="mailto:support@asbdata.com">' + icon("mail") + 'support@asbdata.com</a></div><div class="r">' + icon("pin") + 'Tarauni, Kano State, Nigeria</div></div></div>' +
      '<header><div class="wrap"><a class="brand" href="index.html"><img src="assets/logo.png" alt="ASB logo"><span><b>ASB International</b><small>& Gen. Services Ltd</small></span></a><button class="menu" aria-expanded="false" aria-controls="nav">Menu</button><nav id="nav" aria-label="Main">' + navLinks + "</nav></div></header>";
    var b = h.querySelector(".menu"), n = h.querySelector("nav");
    b.addEventListener("click", function () { var o = n.classList.toggle("open"); b.setAttribute("aria-expanded", o); });
  }

  var f = document.getElementById("site-footer");
  if (f) {
    f.innerHTML = '<footer><div class="wrap"><div class="cols"><div><img src="assets/logo.png" alt="ASB logo"><p>ASB International &amp; Gen. Services Limited. Telecommunications systems, supply and maintenance, digital platforms and automotive general services from Kano, Nigeria.</p></div>' +
      '<div><h4>Company</h4>' + links + '</div>' +
      '<div><h4>Services</h4><a href="services.html#telecom">Telecommunications</a><a href="services.html#supply">Supply and maintenance</a><a href="services.html#auto">Automotive services</a><a href="services.html#digital">Digital platforms</a></div>' +
      '<div><h4>Contact</h4><a class="ci" href="mailto:support@asbdata.com">' + icon("mail") + 'support@asbdata.com</a><a class="ci" href="tel:+2348135113960">' + icon("phone") + '08135113960</a><a class="ci" href="https://asbdata.com" rel="noopener">' + icon("globe") + 'asbdata.com</a><a class="ci" href="https://asbpay.com" rel="noopener">' + icon("globe") + 'asbpay.com</a></div></div>' +
      '<div class="legal"><span>&copy; <span id="yr"></span> ASB International &amp; Gen. Services Limited. RC No. 6984920.</span><span>Building the connections that power progress.</span></div></div></footer>' +
      '<button class="totop" aria-label="Back to top">' + icon("up") + "</button>";
    document.getElementById("yr").textContent = new Date().getFullYear();
    var t = f.querySelector(".totop");
    t.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    window.addEventListener("scroll", function () { t.classList.toggle("show", window.scrollY > 600); }, { passive: true });
  }

  paint();

  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .12 });
    els.forEach(function (e) { io.observe(e); });
  } else { els.forEach(function (e) { e.classList.add("in"); }); }

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var body = "Name: " + d.get("name") + "\nPhone: " + d.get("phone") + "\nTopic: " + d.get("topic") + "\n\n" + d.get("message");
      location.href = "mailto:support@asbdata.com?subject=" + encodeURIComponent("Enquiry: " + d.get("topic")) + "&body=" + encodeURIComponent(body);
      document.getElementById("form-status").textContent = "Opening your email app. If nothing opens, email support@asbdata.com directly.";
    });
  }
})();
