import React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
// import { } from 'react-router-dom';
import { Button } from '~/components/KIT';
// import { Amper } from '~/components/common';
import HoldableButton from '~/components/common/holdableButton';
import { motion } from 'framer-motion';
import { BLOCK_ANIMATIONS_VARIANTS, ROUTE_VARIANTS } from '~/store/animationVars';
import { useGeneralStore } from '~/store/general';
import { MACHINE_KEY } from '~/store/consts';
import { toast } from 'react-hot-toast';
import NewAmper from '~/components/common/newAmper';
// import { PRESURE } from '~/store/constants';


const headGroupTitle: {
    [key: number]: string
} = {
    1: 'یک',
    2: 'دو'
}
const GhAmperConfig = () => {

    const { [MACHINE_KEY]: machine, changeAmperConfig, changeCurrentPage, CURRENT_PAGE } = useGeneralStore();
    const _amperId = CURRENT_PAGE.params.amperId || '1'
    // const navigate = useNavigate();
    // console.log(changeAmperConfig)
    // const params = useParams();
    const _selectedGh = _amperId === 1 ? machine.GH1 : machine.GH2
    const [temperature, setTemperature] = React.useState(_selectedGh.config.boilerTemperator);
    const [volume, setVolume] = React.useState(_selectedGh.config.volume);
    const [presure, _setPresure] = React.useState(_selectedGh.config.presure);
    const [time, setTime] = React.useState(_selectedGh.config.extractionTime);

    console.log(_selectedGh)
    function handleIncreaseTemp() {
        if (temperature === 200) return
        setTemperature(prev => prev + 1);
    }
    function handleDecreaseTemp() {
        if (temperature === 0) return
        setTemperature(prev => prev - 1);
    }
    // function handleIncreasePresure() {
    //     if (presure === PRESURE.MAX) return
    //     setPresure(prev => prev + 1);
    // }
    // function handleDecreasePresure() {
    //     if (presure === PRESURE.MIN) return
    //     setPresure(prev => prev - 1);
    // }

    function handleIncreaseVolume() {
        // if (temperature === 30) return
        setVolume(prev => prev + 1);
    }
    function handleDecreaseVolume() {
        if (volume === 0) return
        setVolume(prev => prev - 1);
    }
    function handleIncreaseTime() {
        // if (time === 200) return
        setTime(prev => prev + 1);
    }
    function handleDecreaseTime() {
        if (time === 0) return
        setTime(prev => prev - 1);
    }
    function handleSaveChanges() {
        changeAmperConfig(`GH${_amperId}`, 'boilerTemperator', temperature)
        changeAmperConfig(`GH${_amperId}`, 'volume', volume)
        changeAmperConfig(`GH${_amperId}`, 'extractionTime', time)

        // changeAmperConfig(`GH${_amperId}`, 'presure', presure)
        
        toast.success('Configuration saved successfuly.')
        // navigate(-1)
        changeCurrentPage({ url: '/dashboard/home', params: {} })

    }
    // useEffect(() => {
    //     if (machine) {
            

    //         setTemperature(_selectedGh.config.boilerTemperator)
    //         setVolume(_selectedGh.config.volume)
    //         setTime(_selectedGh.config.extractionTime)
    //     }
    // }, [machine])


    // listen to changes current page and if any changes happened, show message to user to save changes or not
    // useEffect(() => {
    //     return () => {
    //         // console.log(CURRENT_PAGE)
            
    //         const _TMP = useGeneralStore.getState().MACHINE_KEY[`GH${_amperId}`].config
    //         console.log('unmount', _TMP, temperature)
    //         // if(_TMP.params.amperId) return

    //         console.log(temperature, _selectedGh.config.boilerTemperator, volume, _selectedGh.config.extractionTime)
    //         if (temperature !== _selectedGh.config.boilerTemperator || volume !== _selectedGh.config.extractionTime) {
    //             toast.error('You have unsaved changes, do you want to save them?')
    //         }
    //     }
    // }, [CURRENT_PAGE])
    console.log('ghAmperConfig rendered', temperature)
    return (
        <motion.div
            variants={ROUTE_VARIANTS}
            initial="initial"
            animate="final"
            exit="exit"
            className="flex column alignCenter justifyCenter container sm" style={{
                height: '100vh',
                padding: 0,

            }}>
            <div className="grid col24 alignCenter gap-6 w100" style={{ maxHeight: '100%' }}>
                <div className='span-12'>
                    {/* <Amper
                        titleSize='1.8em'
                        valueSize='6em'
                        title="Main Tank"
                        progressWidth={24}
                        axisLineWidth={24}
                        value={temperature}

                        secondTitleSize='1.8em'
                        thirdTitleSize='1.2em'
                    /> */}
                    {/* <Amper
                        progressWidth={24}
                        axisLineWidth={24}
                        titleSize='1.8em'
                        valueSize='6em'
                        title="GH 1"
                        value={temperature}
                        secondTitleSize='1.8em'
                        thirdTitleSize='1.2em'

                    /> */}

                    <NewAmper
                        titleSize='1em'
                        valueSize='3em'
                        title="Temperature"
                        secondTitle="Volume"
                        secondValue={volume}
                        value2={presure}

                        thirdTitle='Time'
                        thirdValue={time}

                        progressWidth={24}
                        axisLineWidth={24}
                        value={temperature}

                        secondTitleSize='1.8em'
                        thirdTitleSize='1.2em'

                        axisLabelDistance={44}
                        axisTickLength={8}

                    />
                </div>
                <div className='span-12 flex column pr24 pb8' style={{ direction: 'rtl', overflowY: 'auto', maxHeight: '100%', paddingTop: '8em' }}>
                    {/* <motion.span
                        variants={BLOCK_ANIMATIONS_VARIANTS}
                        className='fs-lg '>
                        فشار هد گروپ {headGroupTitle[Number(params.amperId)]}
                    </motion.span>
                    <motion.div
                        variants={BLOCK_ANIMATIONS_VARIANTS}
                        className='flex alignCenter'>
                        <NumberInput
                            onDecrease={handleDecreasePresure}
                            onIncrease={handleIncreasePresure}
                            value={presure}
                            text='Bar'
                        />
                    </motion.div> */}


                    <motion.span
                        variants={BLOCK_ANIMATIONS_VARIANTS}
                        className='mt4 fs-lg '>
                        حجم عصاره گیری
                    </motion.span>
                    <motion.div
                        variants={BLOCK_ANIMATIONS_VARIANTS}
                        className='flex alignCenter'>
                        <NumberInput
                            onDecrease={handleDecreaseVolume}
                            onIncrease={handleIncreaseVolume}
                            value={volume}
                            text='Milliliters'
                        />
                    </motion.div>

                    <motion.span
                        variants={BLOCK_ANIMATIONS_VARIANTS}
                        className='mt4 fs-lg '>
                        دمای هد گروپ {headGroupTitle[Number(_amperId)]}
                    </motion.span>
                    <motion.div
                        variants={BLOCK_ANIMATIONS_VARIANTS}
                        className='flex alignCenter'>
                        <NumberInput
                            onDecrease={handleDecreaseTemp}
                            onIncrease={handleIncreaseTemp}
                            value={temperature}
                            text='Degree Celsius'
                        />
                    </motion.div>

                    {/* <div className='b bb1 w100 my3' /> */}
                    <motion.span variants={BLOCK_ANIMATIONS_VARIANTS} className='mt4 fs-lg '>
                        زمان عصاره گیری
                    </motion.span>
                    <motion.div variants={BLOCK_ANIMATIONS_VARIANTS} className='flex alignCenter'>
                        <NumberInput
                            onDecrease={handleDecreaseTime}
                            onIncrease={handleIncreaseTime}
                            value={time}
                            text='Time / Second'
                        />
                    </motion.div>
                    <motion.div variants={BLOCK_ANIMATIONS_VARIANTS}>
                        <Button className='outlined large mt4' style={{ width: '13em' }}>
                            Pre-Infusion
                        </Button>
                    </motion.div>
                    <motion.div variants={BLOCK_ANIMATIONS_VARIANTS}>
                        <Button className='outlined large mt2' style={{ width: '13em' }}>
                            Backflush
                        </Button>
                    </motion.div>

                    {/* <Switch id='preInfusion' label='Activate Pre-Infusion' className='mt5' />
                    <Switch id='backflush' label='Activate Backflush' className='mt3' /> */}
                    <motion.div variants={BLOCK_ANIMATIONS_VARIANTS} className='mt6 flex gap-2 alignCenter'>
                        <Button onClick={handleSaveChanges} className='contained primary' style={{ width: '8em' }}>
                            Save
                        </Button>
                        {/* <Link to={`/dashboard/home`}> */}
                            <Button
                                onClick={() => {
                                    changeCurrentPage({ url: '/dashboard/home', params: {} })
                                }}
                            className='contained' style={{ width: '8em' }}>
                                Cancel
                            </Button>
                        {/* </Link> */}
                    </motion.div>
                </div>

            </div>
        </motion.div>
    )
};

export const NumberInput = ({ value, onIncrease, onDecrease, text }: {
    value: any;
    onIncrease: () => void;
    onDecrease: () => void;
    text: any
}) => {
    return (
        <div className='flex alignCenter'>
            <HoldableButton className=' py3 px0 outlined'
                onClick={() => {
                    onDecrease()
                    // if (e.detail === 2) {
                    //     console.log("double click")
                    // } else if (e.detail === 3) {
                    //     console.log("triple click")
                    // }
                }}
                longPressThreshold={200}
                onLongPress={() => {
                    onDecrease()
                }}
            >
                <MdArrowDropDown size="4em" />
            </HoldableButton>
            <HoldableButton className='py3 px0 ml2 outlined'
                onClick={() => {
                    onIncrease()
                    // if (e.detail === 2) {
                    //     console.log("double click")
                    // } else if (e.detail === 3) {
                    //     console.log("triple click")
                    // }
                }}
                // longPressOnce
                longPressThreshold={200}
                onLongPress={() => {
                    onIncrease()
                }}
            >
                <MdArrowDropUp size="4em" />
            </HoldableButton>
            <div className='flex column ml4'>
                <span className='font-bold' style={{ lineHeight: 1, fontSize: '4.5em', paddingBottom: '0.1em' }}>
                    {value}
                </span>
                <span className='fs-md'>
                    {text}
                </span>
            </div>
        </div>
    )
}

{/* <div className='flex alignCenter p2 b b1 radius-1'>
            <HoldableButton className=' py3 px4'
                onClick={e => {
                    onDecrease()
                    // if (e.detail === 2) {
                    //     console.log("double click")
                    // } else if (e.detail === 3) {
                    //     console.log("triple click")
                    // }
                }}
                longPressThreshold={200}
                onLongPress={(e, pressDuration) => {
                    onDecrease()
                }}
            >
                <MdRemove size="2em" />
            </HoldableButton>
            <span className='font-bold mx1 textAlign center' style={{ lineHeight: 1, fontSize: '3.5em', minWidth: '3ch', paddingBottom: '0.1em' }}>
                {value}
            </span>
            <HoldableButton className=' py3 px4'
                onClick={e => {
                    onIncrease()
                    // if (e.detail === 2) {
                    //     console.log("double click")
                    // } else if (e.detail === 3) {
                    //     console.log("triple click")
                    // }
                }}
                // longPressOnce
                longPressThreshold={200}
                onLongPress={(e, pressDuration) => {
                    onIncrease()
                }}
            >
                <MdAdd size="2em" />
            </HoldableButton>
        </div> */}
export default GhAmperConfig
