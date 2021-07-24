// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".app {\r\n    /* sizes */\r\n    --xs: 0.06rem;\r\n    --sm-1: 0.12rem;\r\n    --sm-2: 0.25rem;\r\n    --sm-3: 0.5rem;\r\n    --sm-4: 0.75rem;\r\n    --md-1: 1rem;\r\n    --md-2: 1.25rem;\r\n    --md-3: 1.5rem;\r\n    --md-4: 1.75rem;\r\n    --lr-1: 2rem;\r\n    --lr-2: 2.25rem;\r\n    --lr-3: 2.5rem;\r\n    --lr-4: 2.75rem;\r\n    --xl: 3rem;\r\n\r\n    /* colors */\r\n    --primary: hsl(255, 78%, 50%);\r\n    --primary-light: hsl(255, 62%, 56%);\r\n    --primary-dark: hsl(255, 78%, 35%);\r\n\r\n    --secondary: hsl(150, 78%, 50%);\r\n    --secondary-light: hsl(150, 78%, 65%);\r\n    --secondary-dark: hsl(150, 78%, 35%);\r\n\r\n    --accent: hsl(251, 35%, 94%);\r\n    --accent-light: hsl(256, 100%, 100%);\r\n    --accent-dark: hsl(256, 12%, 75%);\r\n\r\n    --dark: hsl(254, 64%, 9%);\r\n    --dark-light: hsl(258, 8%, 25%);\r\n    --dark-thin-light: hsl(261, 6%, 43%);\r\n\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    min-height: 100vh;\r\n}\r\n\r\n.app__content {\r\n    width: 768px;\r\n}\r\n/* \r\n@media (max-width: 820px) {\r\n    .app__content \r\n        width: 100%;\r\n    }\r\n} */\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}