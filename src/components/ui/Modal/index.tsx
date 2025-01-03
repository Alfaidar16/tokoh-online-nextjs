import { Dispatch, useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

type PropsType = {
  children: React.ReactNode;
  //   setModal: Dispatch<any>;
  onClose: any;
};
const Modal = (props: PropsType) => {
  const { children, onClose } = props;
  const ref: any = useRef();
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className={styles.modal}>
      <div className={styles.modal__main} ref={ref}>
        {children}
      </div>
    </div>
  );
};
export default Modal;
