import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children,open }){
  const dialog = useRef();

  useEffect(() => {
    if(open){
      dialog.current.showModal();
    }else{
      dialog.current.close();
    }
  },[open]);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog className="modal" open={open}>
      {open ? {children} : null }
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
