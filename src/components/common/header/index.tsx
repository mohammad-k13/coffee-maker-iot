import { useRef } from 'react'
import { Button } from '../../KIT';
import { motion, useAnimationControls, useCycle } from "framer-motion";
import { useDimensions } from '~/hooks/useDimensions';

// import { CiLeaf, CiWarningOutline } from '../icons';
import { MENU_VARIANTS } from '~/store/animationVars';
import MenuContent from './menuContent';
// import { useLocation, useNavigate } from 'react-router-dom';
import Clock from '../clock';
import moment from 'jalali-moment'
import { useGeneralStore } from '~/store/general';
// import moment from 'moment-jalaali'


const Header = () => {
    const _currentPageUrl = useGeneralStore(state => state.CURRENT_PAGE.url)
    const _changeCurrentPage = useGeneralStore(state => state.changeCurrentPage)
    // const location = useLocation()
    // const navigate = useNavigate()
    const menuAnimControls = useAnimationControls();
    const errorsAnimControls = useAnimationControls()

    // const [animationComplete, toggleAnimationComplete] = useToggle(false);
    const [menuVisible, toggleMenu] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    console.log('header rendered')

    return (
        <>
            <header className='gahve-saz-header grid col12 alignCenter p0 pr6'>
                <div className='flex alignCenter span-4'>
                    <CurrentTime />
                    {/* <Clock /> */}
                    {/* <div className='flex alignCenter mr3'>
                        <CiLeaf className='ml1 successColor' />
                        <CiWarningOutline className='textSecondary' />
                    </div> */}
                </div>
                <div className='flex alignCenter justifyCenter span-4'>
                    <span>
                        حالت:اکو
                    </span>
                </div>
                {/* <Button className='icon filled' onClick={() => toggleMenu()}>
                    <MdMenu />
                </Button> */}
                <div className='span-4 flex justifyEnd'>
                    {
                        _currentPageUrl === '/dashboard/home' ? '' : (
                            <Button onClick={() => {
                                if (menuVisible) {
                                    toggleMenu()
                                    return
                                }
                                _changeCurrentPage({ url: '/dashboard/home', params: {} })

                            }}>
                                قبل / Back
                            </Button>
                        )
                    }
                    <MenuToggle menuVisible={menuVisible} toggle={() => {
                        toggleMenu()
                        errorsAnimControls.set('hidden')
                        if (!menuVisible)
                            menuAnimControls.start("show")
                    }} />
                </div>


            </header>

            <motion.nav
                initial={false}
                animate={menuVisible ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                onAnimationComplete={(_any) => {
                    console.log(_any)
                    // toggleAnimationComplete()
                    // if (_any === 'open')
                    //     controls.start("show");

                    if (_any === 'closed')
                        menuAnimControls.set('hidden')
                    // controls.mount()
                }}
            >
                <motion.div className="menu-bg" variants={MENU_VARIANTS}>
                    <MenuContent menuAnimControls={menuAnimControls} errorsAnimControls={errorsAnimControls} />
                </motion.div>
            </motion.nav>
        </>
    )
};




// import { motion } from "framer-motion";

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        className={'menu-btn-path'}
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle, menuVisible }: {
    toggle: () => void;
    menuVisible: boolean
}) => (
    <Button className='icon large menu-btn' onClick={toggle}>
        <svg width="24" height="24" viewBox="0 0 22 22" style={{ marginTop: 4 }}>
            <Path
                animate={menuVisible ? 'open' : 'closed'}
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                animate={menuVisible ? 'open' : 'closed'}
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                animate={menuVisible ? 'open' : 'closed'}
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </Button>
);

const CurrentTime = () => {
    const today = new Date()
    return (
        <span>{moment(today, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')} - <Clock /></span>
    )
}



export default Header