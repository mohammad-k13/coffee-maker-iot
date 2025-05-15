import { motion, AnimatePresence, AnimationControls } from 'framer-motion';
import { ERROR_CONTAINER_VARIANTS, MENU_OPTIONS_CONTAINER_VARIANTS } from '~/store/animationVars';
import ErrorLog from './errors';
import MenuOptions from './menuOptions';
import React from 'react';

interface MenuContentTypes {
    menuAnimControls: AnimationControls,
    errorsAnimControls: AnimationControls,
    activePanel: 'menu' | 'errors',
    setActivePanel: (panel: 'menu' | 'errors') => void
}

const MenuContent = ({ menuAnimControls, errorsAnimControls, activePanel, setActivePanel }: MenuContentTypes) => {
    return (
        <div className='py8 container sm h100 flex alignCenter relative'>
            <AnimatePresence>
                {activePanel === 'errors' && (
                    <motion.div
                        key='errors-panel'
                        variants={ERROR_CONTAINER_VARIANTS}
                        animate={errorsAnimControls}
                        initial={'hidden'}
                        className='flex column absolute'
                        style={{ right: 0, left: 0 }}
                        onAnimationComplete={(_any) => {
                            console.log('ERROR_CONTAINER_VARIANTS', _any)
                        }}
                    >
                        <ErrorLog setActivePanel={setActivePanel} />
                    </motion.div>
                )}
                {activePanel === 'menu' && (
                    <motion.div
                        key='menu-options'
                        variants={MENU_OPTIONS_CONTAINER_VARIANTS}
                        animate={menuAnimControls}
                        initial='hidden'
                        className='grid col4 gap-2 w100 absolute'
                        style={{ right: 0, left: 0 }}
                        onAnimationComplete={(_any) => {
                            console.log('MENU_OPTIONS_CONTAINER_VARIANTS', _any)
                        }}
                    >
                        <MenuOptions errorsAnimControls={errorsAnimControls} menuAnimControls={menuAnimControls} setActivePanel={setActivePanel} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
};

export default MenuContent