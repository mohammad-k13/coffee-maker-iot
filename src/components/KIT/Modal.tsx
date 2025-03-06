import React from "react";
// import styled from "@emotion/styled";
// import { ModalProps } from "@mui/base/Modal";
import { AnimatePresence, motion } from "framer-motion";
import { ModalProps, Modal } from "@mui/base/Modal";
// const SelectWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   .input-field-label {
//     font-size: var(--fs-200);
//     margin-bottom: 0.2em;
//     padding-left: 0.2em;
//   }
// `;

const BackdropUnstyled = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string; ownerState?: any }
>((props, ref) => {
  const { open, className, ownerState, ...other } = props;
  // console.log(props)
  return (
    <div
      className={`xr-modal-backdrop ${open ? "MuiBackdrop-open" : ""
        } ${className}`}
      ref={ref}
      {...other}
    />
  );
});
const animations: {
  [key: string]: {
    initial: any;
    animate: any;
    exit: any;
  };
} = {
  center: {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 40, opacity: 0 },
  },
  right: {
    initial: { x: 40, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 40, opacity: 0 },
  },
};
const MyModal = React.forwardRef(function MyModal(
  props: ModalProps & {
    className?: string;
    modalPaperClassName?: string;
    modalPaperStyle?: React.CSSProperties;
    position?: "bottom-sm";
    animateMode?: "center" | "right";
  }, ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined
) {
  const {
    className = "",
    modalPaperClassName = "",
    modalPaperStyle = {},
    position = "center",
    animateMode = "center",
  } = props;
  return (
    <AnimatePresence>
      {props.open && (
        <Modal
          ref={ref}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
          open={props.open}
          onClose={props.onClose}
          slots={{ backdrop: BackdropUnstyled }}
          className={`xr-modal-wrapper ${className} ${position}`}
          keepMounted
        >
          <motion.div
            initial={animations[animateMode].initial}
            animate={animations[animateMode].animate}
            exit={animations[animateMode].exit}
            transition={{ duration: 0.25 }}
            className={`xr-modal-paper ${modalPaperClassName}`}
            style={modalPaperStyle}
          >
            {props.children}
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
});

export default MyModal;
