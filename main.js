(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.classList.toggle("is-open", open);
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
