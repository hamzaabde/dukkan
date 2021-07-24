// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: var(--xl) 0;\r\n    border-top: var(--sm-1) solid var(--accent-dark);\r\n}\r\n\r\n.footer__content {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-family: Roboto, 'Segoe UI', sans-serif;\r\n}\r\n\r\n.footer .logo {\r\n    font-size: var(--md-3);\r\n    color: var(--dark);\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}