// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700;1,800;1,900&family=Dancing+Script:wght@700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap');\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    position: relative;\r\n}\r\n\r\ninput {\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\nbutton {\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\nimg {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    margin: 0.4rem;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}