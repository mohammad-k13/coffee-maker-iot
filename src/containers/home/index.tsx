// import { Link } from "react-router-dom";
// import Amper from "~/components/common/amper";
import { motion } from 'framer-motion'
import { BLOCK_ANIMATIONS_VARIANTS, ROUTE_VARIANTS } from "~/store/animationVars";
import { useState, useEffect } from "react";
import { Button, Modal } from "~/components/KIT";
import { useGeneralStore } from "~/store/general";
// import { MACHINE_KEY } from "~/store/consts";
import NewAmper from "~/components/common/newAmper";
import NewMainAmper from "~/components/common/newMainAmper";
// import { MdPower } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";
import splashGif from '~/assets/gifs/splash.gif';

type Props = {};


function Home({ }: Props) {
  const _changeCurrentPage = useGeneralStore(_state => _state.changeCurrentPage)
  const initialSplashDone = useGeneralStore(_state => _state.initialSplashDone);
  const setInitialSplashDone = useGeneralStore(_state => _state.setInitialSplashDone);
  const [status, setStatus] = useState<number[]>([])
  const [showSplash, setShowSplash] = useState(!initialSplashDone);
  // const { [MACHINE_KEY]: machine } = useGeneralStore();
  // console.log(machine)
  // const { t } = useTranslation("dashboard");

  const isBothActive = status.length === 2
  const isOneActive = status.length === 1

  useEffect(() => {
    if (!initialSplashDone) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        if (setInitialSplashDone) setInitialSplashDone();
      }, 7000); // 7 seconds
      return () => clearTimeout(timer);
    }
  }, [initialSplashDone, setInitialSplashDone]);

  if (showSplash) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        background: '#181818',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        left: 0,
      }}>
        <img src={splashGif} alt="Splash" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
      </div>
    );
  }

  // console.log(_changeCurrentPage)
  return (
    <>
      <motion.div
        variants={ROUTE_VARIANTS}
        initial="initial"
        animate="final"
        className="relative flex column alignCenter justifyCenter container pt4" style={{
          height: '100vh'
        }}>
        <div className="flex justifyBetween alignCenter absolute" style={{
          bottom: 8,
          left: 16,
          right: 16
        }}>
          <div className="flex alignCenter">
            <Button className="outlined-2 radius-3 px4 py3" style={{ borderColor: '#2196f3', fontSize: '1.1em', color: '#ffffff', borderWidth: '2px' }}>
              Main Boiler
              <FaPowerOff size="1.2em" className="mr2" />
            </Button>
            <Button className="mx2 outlined-2 radius-3 px4 py3" style={{ borderColor: '#2196f3', fontSize: '1.1em', color: '#ffffff', borderWidth: '2px' }}>
              Head Group 1
              <FaPowerOff size="1.2em" className="mr2" />
            </Button>
            <Button className="outlined-2 radius-3 px4 py3" style={{ borderColor: '#2196f3', fontSize: '1.1em', color: '#ffffff', borderWidth: '2px' }}>
              Head Group 2
              <FaPowerOff size="1.2em" className="mr2" />
            </Button>
          </div>
          <div>
            <Button onClick={() => {
              if (status.includes(1)) {
                setStatus(prev => prev.filter(_n => _n !== 1))
                return
              }
              setStatus(prev => ([...prev, 1]))
            }} className={`radius-3 ${status.includes(1) ? 'filled primary' : 'outlined-2'} ml1`} style={{ display: 'none' }}>
              Active GH1
            </Button>
            <Button onClick={() => {
              if (status.includes(2)) {
                setStatus(prev => prev.filter(_n => _n !== 2))
                return
              }
              setStatus(prev => ([...prev, 2]))
            }} className={`radius-3 ${status.includes(2) ? 'filled primary' : 'outlined-2'}`} style={{ display: 'none' }}>
              Active GH2
            </Button>
          </div>
          {/* <Link to={`/dashboard/presureConfig`}> */}
          <Button className="outlined-2 radius-3 px4 py3" style={{ borderColor: '#2196f3', fontSize: '1.1em', color: '#ffffff', borderWidth: '2px' }} onClick={() => {
            _changeCurrentPage({
              url: '/dashboard/presureConfig',
              params: {}
            })
          }}>
            تنظیمات فشار
          </Button>
          {/* </Link> */}

        </div>
        <div className={`grid col24 gap-6 w100 alignCenter ${status.length > 0 ? 'px24' : ''}`} style={{ overflow: 'hidden' }}>
          {
            (status.length === 0 || status.includes(1)) ?
              <motion.div layout 
              onClick={() => {
                _changeCurrentPage({
                  url: '/dashboard/amperConfig',
                  params: {
                    amperId: 1
                  }
                })
              }}
              variants={BLOCK_ANIMATIONS_VARIANTS}
                className={`relative ${isBothActive ? 'span-12' : (isOneActive && status.includes(1)) ? 'span-24' : 'span-7'}`}>
                <NewAmper
                  value2={2}
                  value={106.0}
                  title="Temperature"
                  axisLabelDistance={isBothActive ? 44 : (isOneActive && status.includes(1)) ? 54 : 32}
                  axisTickLength={isBothActive ? 8 : (isOneActive && status.includes(1)) ? 10 : 6}
                  progressWidth={isBothActive ? 24 : (isOneActive && status.includes(1)) ? 32 : 18}
                  axisLineWidth={isBothActive ? 24 : (isOneActive && status.includes(1)) ? 32 : 18}
                  titleSize={isBothActive ? '1.25em' : (isOneActive && status.includes(1)) ? '1.25em' : '0.85em'}
                  valueSize={isBothActive ? '2.5em' : (isOneActive && status.includes(1)) ? '2.5em' : '1.5em'}
                  secondTitleSize={isBothActive ? '1.5em' : (isOneActive && status.includes(1)) ? '2em' : '1em'}
                  thirdTitleSize={isBothActive ? '1em' : (isOneActive && status.includes(1)) ? '1.5em' : '0.8em'}
                  secondTitle="Volume"
                  secondValue={55}
                  thirdTitle='Time'
                  thirdValue={64}
                />
              </motion.div>
              : ''
          }

          {
            status.length === 0 ? (
              <motion.div layout variants={BLOCK_ANIMATIONS_VARIANTS} className={`relative ${isOneActive ? 'span-0' : 'span-10'} `}>
                <NewMainAmper
                  titleSize='1.8em'
                  valueSize='3em'
                  title="Temperature"
                  progressWidth={24}
                  axisLineWidth={24}
                  value={48.5}
                  secondTitle='Degree Celsius'
                  secondTitleSize='1.8em'
                  thirdTitleSize='1.2em'
                />
              </motion.div>
            ) : ''
          }

          {
            (status.length === 0 || status.includes(2)) ?
              <motion.div
              onClick={() => {
                _changeCurrentPage({
                  url: '/dashboard/amperConfig',
                  params: {
                    amperId: 2
                  }
                })
              }}
              variants={BLOCK_ANIMATIONS_VARIANTS} className={`relative ${isBothActive ? 'span-12' : (isOneActive && status.includes(2)) ? 'span-24' : 'span-7'}`}>
                <NewAmper
                  value2={0}
                  value={106.0}
                  title="Temperature"
                  axisLabelDistance={isBothActive ? 44 : (isOneActive && status.includes(2)) ? 54 : 32}
                  axisTickLength={isBothActive ? 8 : (isOneActive && status.includes(2)) ? 10 : 6}
                  progressWidth={isBothActive ? 24 : (isOneActive && status.includes(2)) ? 32 : 18}
                  axisLineWidth={isBothActive ? 24 : (isOneActive && status.includes(2)) ? 32 : 18}
                  titleSize={isBothActive ? '1.25em' : (isOneActive && status.includes(2)) ? '1.25em' : '0.85em'}
                  valueSize={isBothActive ? '2.5em' : (isOneActive && status.includes(2)) ? '2.5em' : '1.5em'}
                  secondTitleSize={isBothActive ? '1.5em' : (isOneActive && status.includes(2)) ? '2em' : '1em'}
                  thirdTitleSize={isBothActive ? '1em' : (isOneActive && status.includes(2)) ? '1.5em' : '0.8em'}
                  secondTitle="Volume"
                  secondValue={55}
                  thirdTitle='Time'
                  thirdValue={64}
                />
              </motion.div>
              : ''
          }
        </div>
      </motion.div>
    </>
  );
}

export default Home;
