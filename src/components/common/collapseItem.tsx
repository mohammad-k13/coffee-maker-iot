import { useState } from 'react';
import { motion, easeInOut } from 'framer-motion';

type Props = {
  header?: any;
  content?: any;
  parentClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  open?: boolean;
  onHeader?: () => void;
};

const CoolapseItem = ({
  header,
  content,
  parentClassName = '',
  headerClassName = '',
  contentClassName = '',
  open = false,
  onHeader
}: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (onHeader) {
      onHeader();
    }
  };

  return (
    <div className={`w100 overflowYHide ${parentClassName}`}>
      <motion.div className='cursorPoint'
        onClick={toggleOpen}
        initial={{ borderRadius: '0.5rem' }}
        animate={{ borderRadius: isOpen ? '0.5rem 0.5rem 0 0' : '0.5rem' }}
      >
        <div className={headerClassName}>{header}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2, ease: easeInOut }}
      >
        <div className={contentClassName}>{content}</div>
      </motion.div>
    </div>
  );
};

export default CoolapseItem;
