import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '~/components/KIT';
// import { Amper } from '~/components/common';
import { motion } from 'framer-motion';
import { NumberInput } from './ghAmperConfig';
import { BLOCK_ANIMATIONS_VARIANTS, ROUTE_VARIANTS } from '~/store/animationVars';
import { useGeneralStore } from '~/store/general';
import { MACHINE_KEY } from '~/store/consts';
import { toast } from 'react-hot-toast';
import NewAmper from '~/components/common/newAmper';


const MainAmperConfig = () => {
    const { [MACHINE_KEY]: machine, changeAmperConfig } = useGeneralStore();
    console.log(machine)
    const navigate = useNavigate();
    // const params = useParams();
    const [temperature, setTemperature] = React.useState(98);
    // const ref = useRef(null);
    // const { onTouchStart } = useTouchEvents(ref);

    function handleIncreaseTemp() {
        if (temperature === 200) return
        // increase temperature by 0.1
        setTemperature(prev => prev + 1);
    }
    function handleDecreaseTemp() {
        if (temperature === 0) return
        setTemperature(prev => prev - 1);
    }
    // onTouchStart(() => {
    // });

    function handleSaveChanges() {
        changeAmperConfig('mainTank', 'boilerTemperator', temperature)
        toast.success('Configuration saved successfuly.')
        navigate(-1)
    }
    useEffect(() => {
        if (machine) {
            const _mainTank = machine.mainTank
            setTemperature(_mainTank.config.boilerTemperator)
        }
    }, [machine])
    return (
        <motion.div
            variants={ROUTE_VARIANTS}
            initial="initial"
            animate="final"
            exit="exit"
            className="flex column alignCenter justifyCenter container sm py6" style={{
                height: '100vh'
            }}>
            <div className="grid col24 gap-6 w100 alignCenter">
                <div className='span-13'>
                    <NewAmper
                        titleSize='1em'
                        valueSize='3em'
                        title="Temperature"
                        secondTitle="Volume"
                        secondValue={55}

                        thirdTitle='Time'
                        thirdValue={64}

                        progressWidth={22}
                        axisLineWidth={22}
                        value={temperature}

                        secondTitleSize='1.8em'
                        thirdTitleSize='1.2em'

                        axisLabelDistance={44}
                        axisTickLength={8}
                        value2={0}
                    />
                </div>
                <div className='span-11 flex column pl6'>
                    <motion.span variants={BLOCK_ANIMATIONS_VARIANTS} className='mb2 fs-lg'>
                        Boiler temperature
                    </motion.span>
                    <motion.div variants={BLOCK_ANIMATIONS_VARIANTS} className='flex alignCenter'>
                        <NumberInput
                            onDecrease={handleDecreaseTemp}
                            onIncrease={handleIncreaseTemp}
                            value={temperature}
                            text='Degree Celsius'
                        />

                    </motion.div>
                    <motion.div variants={BLOCK_ANIMATIONS_VARIANTS} className='mt6 flex gap-2 alignCenter'>
                        <Button onClick={handleSaveChanges} className='contained primary' style={{ width: '8em' }}>
                            Save
                        </Button>
                        <Link to={`/dashboard/home`}>
                            <Button className='contained' style={{ width: '8em' }}>
                                Cancel
                            </Button>
                        </Link>
                    </motion.div>
                </div>
                {/* <div className='span-13'>
                    <Amper
                        titleSize='1.8em'
                        valueSize='6em'
                        title="Main Tank"
                        progressWidth={24}
                        axisLineWidth={24}
                        value={temperature}

                        secondTitleSize='1.8em'
                        thirdTitleSize='1.2em'
                    />
                </div> */}

            </div>
        </motion.div>
    )
};

export default MainAmperConfig