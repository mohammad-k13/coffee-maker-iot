import { AnimationControls } from 'framer-motion';
import { Button, Modal } from '~/components/KIT';
// import { MENU_OPTION_ITEM_VARIANTS } from '~/store/animationVars';
import {
    CiLeaf, CiWarningOutline, MaterialSymbolsDownloadRounded, MaterialSymbolsLanguage,
    MaterialSymbolsNestClockFarsightAnalogOutlineRounded, MaterialSymbolsPhoneInTalkWatchfaceIndicatorOutline, MdiPotSteamOutline
} from '../icons';
import { useGeneralStore } from '~/store/general';
import ConfirmationModalContent from '../ConfirmationModalContent';
import useToggle from '~/hooks/useToggle';
import arabPng from '~/assets/images/flags/arab.png';
import iranPng from '~/assets/images/flags/iran.png';
import usaPng from '~/assets/images/flags/usa.png';
import turkPng from '~/assets/images/flags/turk.png';
import { LANGUAGE_KEY } from '~/store/constants';
import { useTranslation } from 'react-i18next';
// import { useLottie } from 'lottie-react';
import cupWarmerAnimation from "~/assets/anims/cup-heater.json";


interface MenuOptionsTypes {
    menuAnimControls: AnimationControls, errorsAnimControls: AnimationControls
};

const MenuOptions = ({ menuAnimControls, errorsAnimControls }: MenuOptionsTypes) => {
    const cupWarmerAnimationOptions = {
        animationData: cupWarmerAnimation,
        loop: true,

    };



    const store = useGeneralStore();
    const [dischargeConfirmationModal, toggleDischargeConfirmationModal] = useToggle(false);
    const [languageModal, toggleLanguageModal] = useToggle(false);
    const [cupWarmerModal, toggleCupWarmerModal] = useToggle(false);

    return (
        <>
            <Button className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
                <CiLeaf width="4em" height='4em' />
                <span className='mt3 fs-md'>
                    ECO Mode
                </span>
            </Button>
            <Button className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}
                onClick={() => {
                    console.log('errors clicked', menuAnimControls, errorsAnimControls)
                    
                    menuAnimControls.start('errorVisible')
                    errorsAnimControls.start('show')
                }}>
                <CiWarningOutline width="4em" height='4em' />
                <span className='mt3 fs-md'>
                    Errors
                </span>
            </Button>
            <Button className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
                <MaterialSymbolsNestClockFarsightAnalogOutlineRounded width="4em" height='4em' />
                <span className='mt3 fs-md'>
                    Time
                </span>
            </Button>
            <Button onClick={toggleDischargeConfirmationModal} className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
                <MaterialSymbolsDownloadRounded width="4em" height='4em' />
                <span className='mt3 fs-md'>
                    Discharge
                </span>
            </Button>
            <Button
                onClick={() => {

                    store.toggleTheme();
                }}
                className={`w100 flex column alignCenter outlined theme-toggle menu-option-btn`} id="theme-toggle"
                title="Toggles light & dark"
                aria-label={'dark'}
                aria-live="polite" style={{ padding: '2em 1em' }}>
                <svg className="sun-and-moon" aria-hidden="true" width="26" height="26" viewBox="0 0 26 26">
                    <mask className="moon" id="moon-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        <circle cx="26" cy="10" r="6" fill="black" />
                    </mask>
                    <circle className="sun" cx="13" cy="13" r="6" mask="url(#moon-mask)" fill="currentColor" />
                    <g className="sun-beams" stroke="currentColor">
                        <line x1="13" y1="1" x2="13" y2="3" />
                        <line x1="20" y1="6.2" x2="21.4" y2="4.8" />
                        <line x1="23" y1="13" x2="25" y2="13" />
                        <line x1="20" y1="20" x2="21.4" y2="21.4" />
                        <line x1="13" y1="22.6" x2="13" y2="24.6" />
                        <line x1="4.82" y1="21.78" x2="6.34" y2="19.8" />
                        <line x1="1.2" y1="13" x2="3.2" y2="13" />
                        <line x1="4.8" y1="4.8" x2="6.5" y2="6.5" />
                    </g>
                </svg>

                {/* <MaterialSymbolsWbSunnyOutline width="4em" height='4em' /> */}
                <span className='mt3 fs-md'>
                    Theme
                </span>
            </Button>
            <Button onClick={toggleCupWarmerModal} className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
                <MdiPotSteamOutline width="4em" height='4em' />
                <span className='mt3 fs-md'>
                    Cup Warmer
                </span>
            </Button>
            <Button onClick={toggleLanguageModal} className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
                <MaterialSymbolsLanguage width="4em" height='4em' />
                <span className='mt3 fs-md'>
                    Language
                </span>
            </Button>
            <Button className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
                <MaterialSymbolsPhoneInTalkWatchfaceIndicatorOutline width="4em" height='4em' />
                <span className='mt3 fs-md'>
                    Contact Us
                </span>
            </Button>

            <Modal onClose={toggleDischargeConfirmationModal} open={dischargeConfirmationModal}>
                <ConfirmationModalContent
                    title='Confirm to discharge'
                    onCancel={toggleDischargeConfirmationModal}
                />
            </Modal>
            <Modal modalPaperStyle={{ maxWidth: '25em' }} onClose={toggleLanguageModal} open={languageModal}>
                <SelectLanguageModal />
            </Modal>
            <Modal modalPaperStyle={{
                overflow: 'visible'
            }} onClose={toggleCupWarmerModal} open={cupWarmerModal}>
                <ConfirmationModalContent
                    animationOptions={cupWarmerAnimationOptions}
                    animationStyle={{
                        height: 300,
                        marginTop: '-10em'
                    }}
                    title='Please confirm to warm the cup'
                    onCancel={toggleCupWarmerModal}
                />
            </Modal>
        </>
    )
};


const langs = [
    { label: 'English', src: usaPng, value: 'en' },
    { label: 'Persian', src: iranPng, value: 'fa' },
    { label: 'Arabic', src: arabPng, value: 'arab' },
    { label: 'Turkish', src: turkPng, value: 'tur' },
]
const SelectLanguageModal = () => {
    const { t } = useTranslation();
    // const selectedLng = 'en'
    const { changeLanguage, [LANGUAGE_KEY]: selectedLng } = useGeneralStore();
    return (
        <div className='flex column alignCenter p8'>
            <span className='mb4 fs-lg'>
                {t("select_your_language")}
                {/* Select your language */}
            </span>
            <div className='grid col2 gap-3 w100 forceLtr fontEn'>
                {
                    langs.map(_lng => <Button key={`LANG_OP_${_lng.label}`}
                        className={`${selectedLng === _lng.value ? 'filled primary' : 'outlined'} flex column alignCenter py6`}
                        onClick={() => {
                            changeLanguage(_lng.value)
                        }}
                    >
                        <img
                            style={{
                                height: '3em',
                                width: '3em',
                            }}
                            src={_lng.src} className='w100 h100' />

                        <span className='fs-md mt4'>
                            {_lng.label}
                        </span>
                    </Button>)
                }
            </div>
        </div>
    )
}
export default MenuOptions






// import { motion, AnimationControls } from 'framer-motion';
// import { Button, Modal } from '~/components/KIT';
// import { MENU_OPTION_ITEM_VARIANTS } from '~/store/animationVars';
// import { CiLeaf, CiWarningOutline, MaterialSymbolsDownloadRounded, MaterialSymbolsLanguage,
//      MaterialSymbolsNestClockFarsightAnalogOutlineRounded, MaterialSymbolsPhoneInTalkWatchfaceIndicatorOutline, MdiPotSteamOutline } from '../icons';
// import { useGeneralStore } from '~/store/general';
// import ConfirmationModalContent from '../ConfirmationModalContent';
// import useToggle from '~/hooks/useToggle';
// import arabPng from '~/assets/images/flags/arab.png';
// import iranPng from '~/assets/images/flags/iran.png';
// import usaPng from '~/assets/images/flags/usa.png';
// import turkPng from '~/assets/images/flags/turk.png';
// import { LANGUAGE_KEY } from '~/store/constants';
// import { useTranslation } from 'react-i18next';
// // import { useLottie } from 'lottie-react';
// import cupWarmerAnimation from "~/assets/anims/cup-heater.json";


// interface MenuOptionsTypes {
//     menuAnimControls: AnimationControls, errorsAnimControls: AnimationControls
// };

// const MenuOptions = ({ menuAnimControls, errorsAnimControls }: MenuOptionsTypes) => {
//     const cupWarmerAnimationOptions = {
//         animationData: cupWarmerAnimation,
//         loop: true,

//     };



//     const store = useGeneralStore();
//     const [dischargeConfirmationModal, toggleDischargeConfirmationModal] = useToggle(false);
//     const [languageModal, toggleLanguageModal] = useToggle(false);
//     const [cupWarmerModal, toggleCupWarmerModal] = useToggle(false);

//     return (
//         <>
//             <motion.div
//                 variants={MENU_OPTION_ITEM_VARIANTS}
//                 transition={{
//                     type: "spring",
//                     bounce: 0.1,
//                 }}>
//                 <Button className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
//                     <CiLeaf width="4em" height='4em' />
//                     <span className='mt3 fs-md'>
//                         ECO Mode
//                     </span>
//                 </Button>
//             </motion.div>
//             <motion.div
//                 variants={MENU_OPTION_ITEM_VARIANTS}
//                 transition={{
//                     type: "spring",
//                     bounce: 0.1,
//                 }}>
//                 <Button className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }} onClick={() => {
//                     menuAnimControls.start('errorVisible')
//                     errorsAnimControls.start('show')
//                 }}>
//                     <CiWarningOutline width="4em" height='4em' />
//                     <span className='mt3 fs-md'>
//                         Errors
//                     </span>
//                 </Button>
//             </motion.div>
//             <motion.div
//                 variants={MENU_OPTION_ITEM_VARIANTS}
//                 transition={{
//                     type: "spring",
//                     bounce: 0.1,
//                 }}>
//                 <Button className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
//                     <MaterialSymbolsNestClockFarsightAnalogOutlineRounded width="4em" height='4em' />
//                     <span className='mt3 fs-md'>
//                         Time
//                     </span>
//                 </Button>
//             </motion.div>
//             <motion.div
//                 variants={MENU_OPTION_ITEM_VARIANTS}
//                 transition={{
//                     type: "spring",
//                     bounce: 0.1,
//                 }}>
//                 <Button onClick={toggleDischargeConfirmationModal} className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
//                     <MaterialSymbolsDownloadRounded width="4em" height='4em' />
//                     <span className='mt3 fs-md'>
//                         Discharge
//                     </span>
//                 </Button>
//             </motion.div>
//             <motion.div
//                 variants={MENU_OPTION_ITEM_VARIANTS}
//                 transition={{
//                     type: "spring",
//                     bounce: 0.1,
//                 }}>
//                 <Button
//                     onClick={() => {

//                         store.toggleTheme();
//                     }}
//                     className={`w100 flex column alignCenter outlined theme-toggle menu-option-btn`} id="theme-toggle"
//                     title="Toggles light & dark"
//                     aria-label={'dark'}
//                     aria-live="polite" style={{ padding: '2em 1em' }}>
//                     <svg className="sun-and-moon" aria-hidden="true" width="26" height="26" viewBox="0 0 26 26">
//                         <mask className="moon" id="moon-mask">
//                             <rect x="0" y="0" width="100%" height="100%" fill="white" />
//                             <circle cx="26" cy="10" r="6" fill="black" />
//                         </mask>
//                         <circle className="sun" cx="13" cy="13" r="6" mask="url(#moon-mask)" fill="currentColor" />
//                         <g className="sun-beams" stroke="currentColor">
//                             <line x1="13" y1="1" x2="13" y2="3" />
//                             <line x1="20" y1="6.2" x2="21.4" y2="4.8" />
//                             <line x1="23" y1="13" x2="25" y2="13" />
//                             <line x1="20" y1="20" x2="21.4" y2="21.4" />
//                             <line x1="13" y1="22.6" x2="13" y2="24.6" />
//                             <line x1="4.82" y1="21.78" x2="6.34" y2="19.8" />
//                             <line x1="1.2" y1="13" x2="3.2" y2="13" />
//                             <line x1="4.8" y1="4.8" x2="6.5" y2="6.5" />
//                         </g>
//                     </svg>

//                     {/* <MaterialSymbolsWbSunnyOutline width="4em" height='4em' /> */}
//                     <span className='mt3 fs-md'>
//                         Theme
//                     </span>
//                 </Button>
//             </motion.div>
//             <motion.div
//                 variants={MENU_OPTION_ITEM_VARIANTS}
//                 transition={{
//                     type: "spring",
//                     bounce: 0.1,
//                 }}>
//                 <Button onClick={toggleCupWarmerModal} className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
//                     <MdiPotSteamOutline width="4em" height='4em' />
//                     <span className='mt3 fs-md'>
//                         Cup Warmer
//                     </span>
//                 </Button>
//             </motion.div>
//             <motion.div
//                 variants={MENU_OPTION_ITEM_VARIANTS}
//                 transition={{
//                     type: "spring",
//                     bounce: 0.1,
//                 }}>
//                 <Button onClick={toggleLanguageModal} className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
//                     <MaterialSymbolsLanguage width="4em" height='4em' />
//                     <span className='mt3 fs-md'>
//                         Language
//                     </span>
//                 </Button>
//             </motion.div>
//             <motion.div
//                 variants={MENU_OPTION_ITEM_VARIANTS}
//                 transition={{
//                     type: "spring",
//                     bounce: 0.1,
//                 }}>
//                 <Button className={`w100 flex column alignCenter outlined menu-option-btn`} style={{ padding: '2em 1em' }}>
//                     <MaterialSymbolsPhoneInTalkWatchfaceIndicatorOutline width="4em" height='4em' />
//                     <span className='mt3 fs-md'>
//                         Contact Us
//                     </span>
//                 </Button>
//             </motion.div>

//             <Modal onClose={toggleDischargeConfirmationModal} open={dischargeConfirmationModal}>
//                 <ConfirmationModalContent
//                     title='Confirm to discharge'
//                 />
//             </Modal>
//             <Modal modalPaperStyle={{ maxWidth: '25em' }} onClose={toggleLanguageModal} open={languageModal}>
//                 <SelectLanguageModal />
//             </Modal>
//             <Modal modalPaperStyle={{
//                 overflow: 'visible'
//             }} onClose={toggleCupWarmerModal} open={cupWarmerModal}>
//                 <ConfirmationModalContent
//                     animationOptions={cupWarmerAnimationOptions}
//                     animationStyle={{
//                         height: 300,
//                         marginTop: '-10em'
//                     }}
//                     title='Please confirm to warm the cup'
//                     onCancel={toggleCupWarmerModal}
//                 />
//             </Modal>
//         </>
//     )
// };


// const langs = [
//     { label: 'English', src: usaPng, value: 'en' },
//     { label: 'Persian', src: iranPng, value: 'fa' },
//     { label: 'Arabic', src: arabPng, value: 'arab' },
//     { label: 'Turkish', src: turkPng, value: 'tur' },
// ]
// const SelectLanguageModal = () => {
//     const { t } = useTranslation();
//     // const selectedLng = 'en'
//     const { changeLanguage, [LANGUAGE_KEY]: selectedLng } = useGeneralStore();
//     return (
//         <div className='flex column alignCenter p8'>
//             <span className='mb4 fs-lg'>
//                 {t("select_your_language")}
//                 {/* Select your language */}
//             </span>
//             <div className='grid col2 gap-3 w100 forceLtr fontEn'>
//                 {
//                     langs.map(_lng => <Button key={`LANG_OP_${_lng.label}`}
//                         className={`${selectedLng === _lng.value ? 'filled primary' : 'outlined'} flex column alignCenter py6`}
//                         onClick={() => {
//                             changeLanguage(_lng.value)
//                         }}
//                     >
//                         <img
//                             style={{
//                                 height: '3em',
//                                 width: '3em',
//                             }}
//                             src={_lng.src} className='w100 h100' />

//                         <span className='fs-md mt4'>
//                             {_lng.label}
//                         </span>
//                     </Button>)
//                 }
//             </div>
//         </div>
//     )
// }
// export default MenuOptions