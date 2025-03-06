// import { Link } from "react-router-dom";
// import Amper from "~/components/common/amper";
import { motion } from 'framer-motion'
import { BLOCK_ANIMATIONS_VARIANTS, ROUTE_VARIANTS } from "~/store/animationVars";
import { useState } from "react";
import { Button, Modal } from "~/components/KIT";
import { useGeneralStore } from "~/store/general";
// import { MACHINE_KEY } from "~/store/consts";
import NewAmper from "~/components/common/newAmper";
import NewMainAmper from "~/components/common/newMainAmper";
// import { MdPower } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";

type Props = {};


function Home({ }: Props) {
  const _changeCurrentPage = useGeneralStore(_state => _state.changeCurrentPage)
  const [warningModal, setWarningModal] = useState(false)
  const [status, setStatus] = useState<number[]>([])
  // const { [MACHINE_KEY]: machine } = useGeneralStore();
  // console.log(machine)
  // const { t } = useTranslation("dashboard");

  const isBothActive = status.length === 2
  const isOneActive = status.length === 1

  // console.log(_changeCurrentPage)
  return (
    <>
      <Modal open={warningModal}
        onClose={() => setWarningModal(false)}
        modalPaperStyle={{
          backgroundColor: '#fff',
          width: '25em',
          textAlign: 'center'
        }}
      >
        <div className="flex column p1">
          <div className="fs-md p1" style={{ borderRadius: '4px 4px 0 0', backgroundColor: '#505050' }}>
            توجه : بر روی هد گروپ یک پرتا فیلتر قرار ندارد
          </div>
          <div onClick={() => setWarningModal(false)} className="py3 font-w-600 w100 pointer" style={{ color: '#000' }}>
            تایید
          </div>
        </div>
      </Modal>
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
            <Button className="outlined-2 small radius-3 px3 py2">
              Main Boiler
              <FaPowerOff size="1em" className="mr2" />
            </Button>
            <Button className="mx2 outlined-2 small px3 py2 radius-3">
              Head Group 1
              <FaPowerOff size="1em" className="mr2" />
            </Button>
            <Button className="outlined-2 small px3 py2 radius-3">
              Head Group 2
              <FaPowerOff size="1em" className="mr2" />
            </Button>
            <Button className="outlined-2 small radius-3 px3 py2 mr1" onClick={() => {
              setWarningModal(true)
            }}>
              Warning modal
            </Button>
          </div>
          <div>
            <Button onClick={() => {
              if (status.includes(1)) {
                setStatus(prev => prev.filter(_n => _n !== 1))
                return
              }
              setStatus(prev => ([...prev, 1]))
            }} className={`small px3 py2 radius-3 ${status.includes(1) ? 'filled primary' : 'outlined-2'} ml1`}>
              Active GH1
            </Button>
            <Button onClick={() => {
              if (status.includes(2)) {
                setStatus(prev => prev.filter(_n => _n !== 2))
                return
              }
              setStatus(prev => ([...prev, 2]))
            }} className={`small px3 py2 radius-3 ${status.includes(2) ? 'filled primary' : 'outlined-2'}`}>
              Active GH2
            </Button>
          </div>
          {/* <Link to={`/dashboard/presureConfig`}> */}
          <Button className="outlined-2 small px3 py2 radius-3" onClick={() => {
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
                // alert('ast')
                _changeCurrentPage({
                  url: '/dashboard/amperConfig',
                  params: {
                    amperId: 1
                  }
                })
                // alert(1)
              }}
              variants={BLOCK_ANIMATIONS_VARIANTS}
                className={`relative ${isBothActive ? 'span-12' : (isOneActive && status.includes(1)) ? 'span-24' : 'span-7'}`}>
                
                  {/* <Amper
                  title="GH 1"
                  value={106.0}
                  progressWidth={isBothActive ? 24 : (isOneActive && status.includes(1)) ? 32 : 18}
                  axisLineWidth={isBothActive ? 24 : (isOneActive && status.includes(1)) ? 32 : 18}
                  titleSize={isBothActive ? '1.5em' : (isOneActive && status.includes(1)) ? '2em' : '1em'}
                  valueSize={isBothActive ? '4em' : (isOneActive && status.includes(1)) ? '5.5em' : '3.5em'}
                  secondTitleSize={isBothActive ? '1.5em' : (isOneActive && status.includes(1)) ? '2em' : '1em'}
                  thirdTitleSize={isBothActive ? '1em' : (isOneActive && status.includes(1)) ? '1.5em' : '0.8em'}
                /> */}
                  <NewAmper
                    // // title="GH 1"
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
                {/* <span className="absolute w100 textAlign center fs-lg" style={{ opacity: '0.2', bottom: '1.5em', left: 0 }}>Group Head 1</span> */}
              </motion.div>
              : ''
          }

          {
            status.length === 0 ? (
              <motion.div layout variants={BLOCK_ANIMATIONS_VARIANTS} className={`relative ${isOneActive ? 'span-0' : 'span-10'} `}>
                {/* <Link to='/dashboard/amperConfig/main/1'> */}
                {/* <Amper
                  titleSize='1.8em'
                  valueSize='6em'
                  title="Main Tank"
                  progressWidth={24}
                  axisLineWidth={24}
                  value={48.5}

                  secondTitleSize='1.8em'
                  thirdTitleSize='1.2em'
                /> */}
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
                {/* </Link> */}
                {/* <span className="absolute w100 textAlign center fs-lg" style={{ opacity: '0.2', bottom: '1.5em', left: 0 }}>Main Boiler</span> */}
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
                // alert(2)
              }}
              variants={BLOCK_ANIMATIONS_VARIANTS} className={`relative ${isBothActive ? 'span-12' : (isOneActive && status.includes(2)) ? 'span-24' : 'span-7'}`}>
                

                  {/* <Link to='/dashboard/amperConfig/gh/2'> */}
                  {/* <Amper
                  // progressWidth={18}
                  // axisLineWidth={18}
                  // titleSize='1em'
                  // valueSize='3.5em'
                  title="GH 2"
                  value={188.48}

                  // secondTitleSize='1em'
                  // thirdTitleSize='0.8em'

                  progressWidth={isBothActive ? 24 : (isOneActive && status.includes(2)) ? 32 : 18}
                  axisLineWidth={isBothActive ? 24 : (isOneActive && status.includes(2)) ? 32 : 18}
                  titleSize={isBothActive ? '1.5em' : (isOneActive && status.includes(2)) ? '2em' : '1em'}
                  valueSize={isBothActive ? '4em' : (isOneActive && status.includes(2)) ? '5.5em' : '3.5em'}
                  secondTitleSize={isBothActive ? '1.5em' : (isOneActive && status.includes(2)) ? '2em' : '1em'}
                  thirdTitleSize={isBothActive ? '1em' : (isOneActive && status.includes(2)) ? '1.5em' : '0.8em'}

                /> */}

                  <NewAmper
                    // title="GH 1"
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
                  {/* </Link> */}

                {/* <span className="absolute w100 textAlign center fs-lg" style={{ opacity: '0.2', bottom: '1.5em', left: 0 }}>GP 2</span> */}
              </motion.div>
              : ''
          }

        </div>
      </motion.div>
    </>
  );
}

export default Home;
