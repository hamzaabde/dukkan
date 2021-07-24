import React, {useState} from "../../_snowpack/pkg/react.js";
export const Modal = ({children}) => {
  const [modal, setModal] = useState("active");
  return /* @__PURE__ */ React.createElement("div", {
    className: `modal-overlay modal-${modal}`,
    onClickCapture: (e) => {
      if (e.target.classList.contains("modal-overlay"))
        setModal("inactive");
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-content"
  }, children));
};
