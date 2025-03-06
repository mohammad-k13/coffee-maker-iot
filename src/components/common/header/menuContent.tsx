import { motion, AnimatePresence, AnimationControls } from 'framer-motion';
import { ERROR_CONTAINER_VARIANTS, MENU_OPTIONS_CONTAINER_VARIANTS } from '~/store/animationVars';
import Errors from './errors';
import MenuOptions from './menuOptions';

interface MenuContentTypes {
    menuAnimControls: AnimationControls, errorsAnimControls: AnimationControls
};


const MenuContent = ({ menuAnimControls, errorsAnimControls }: MenuContentTypes) => {
    return (
        <div className='py8 container sm h100 flex alignCenter relative'>

            <AnimatePresence
                // mode='sync' // "sync" | "popLayout" | "wait"
            >
                <motion.div
                    key='errors-panel'
                    variants={ERROR_CONTAINER_VARIANTS}
                    animate={errorsAnimControls}
                    initial={"hidden"}
                    className='flex column absolute'
                    style={{ right: 0, left: 0 }}
                    onAnimationComplete={(_any) => {
                        console.log('ERROR_CONTAINER_VARIANTS', _any)
                    }}
                >

                    <Errors errorsAnimControls={errorsAnimControls} menuAnimControls={menuAnimControls} />
                </motion.div>
                <motion.div
                    key='menu-options'
                    variants={MENU_OPTIONS_CONTAINER_VARIANTS}
                    animate={menuAnimControls}
                    initial="hidden"
                    className='grid col4 gap-2 w100 absolute'
                    style={{ right: 0, left: 0 }}
                    onAnimationComplete={(_any) => {
                        console.log('MENU_OPTIONS_CONTAINER_VARIANTS', _any)
                    }}
                >
                    <MenuOptions errorsAnimControls={errorsAnimControls} menuAnimControls={menuAnimControls} />
                </motion.div>
            </AnimatePresence>

        </div>
    )
};




export default MenuContent