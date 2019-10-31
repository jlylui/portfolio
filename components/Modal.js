import React, { useRef, useEffect } from "react";

const Modal = props => {
  const { id, show, title, handler } = props.attrs;
  const modalRef = useRef(null);
  const updateModalState = e => {
    if (modalRef.current !== null && modalRef.current.contains(e.target)) {
      // clicked inside the component
      return;
    }
    // clicked outside the component
    if (show) {
      handler();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", updateModalState);
    return function cleanup() {
      window.removeEventListener("mousedown", updateModalState);
    };
  }, [show, modalRef.current]);

  return (
    <div
      className="modal fade show"
      id={id}
      style={show ? { display: "block" } : { display: "none" }}>
      <div className="modal-dialog" ref={modalRef}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={handler}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
