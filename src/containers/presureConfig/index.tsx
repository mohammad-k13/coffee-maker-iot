import React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
// import { useParams } from 'react-router-dom';
// import { Button } from '~/components/KIT';
// import { Amper } from '~/components/common';
import HoldableButton from '~/components/common/holdableButton';
import { motion } from 'framer-motion';
import { BLOCK_ANIMATIONS_VARIANTS, ROUTE_VARIANTS } from '~/store/animationVars';
import { useGeneralStore } from '~/store/general';
import { MACHINE_KEY } from '~/store/consts';
// import { toast } from 'react-hot-toast';
// import NewAmper from '~/components/common/newAmper';
import PresureAmper from '~/components/common/presureAmper';
import { PRESURE } from '~/store/constants';
// import { Button } from '~/components/KIT';


// const headGroupTitle = {
//     1: 'یک',
//     2: 'دو'
// }
const PresureConfig = () => {

    const { [MACHINE_KEY]: machine, changeAmperConfig } = useGeneralStore();
    const _selectedGh = machine.GH1
    // const navigate = useNavigate();
    // console.log(changeAmperConfig)
    // const params = useParams();
    const [presure, setPresure] = React.useState(_selectedGh.config.presure);

    function handleIncreasePresure() {
        if (presure === PRESURE.MAX) return

        const _newVal = presure + 1
        setPresure(_newVal);

        changeAmperConfig(`GH1`, 'presure', _newVal)
        changeAmperConfig(`GH2`, 'presure', _newVal)
    }
    function handleDecreasePresure() {
        if (presure === PRESURE.MIN) return
        
        const _newVal = presure - 1
        setPresure(_newVal);

        changeAmperConfig(`GH1`, 'presure', _newVal)
        changeAmperConfig(`GH2`, 'presure', _newVal)
    }


    // function handleSaveChanges() {
    //     // changeAmperConfig(`GH${params.amperId}`, 'boilerTemperator', temperature)
    //     // changeAmperConfig(`GH${params.amperId}`, 'extractionTime', extraction)
    //     changeAmperConfig(`GH${params.amperId}`, 'presure', presure)
    //     toast.success('Configuration saved successfuly.')
    //     navigate(-1)
    // }
    // useEffect(() => {
    //     if (machine) {
            

    //         setPresure(_selectedGh.config.presure || 0)
    //     }
    // }, [machine])


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
            <div className="flex alignCenter relative" style={{ maxHeight: '100%' }}>
                <div className='absolute' style={{ left: 0, transform: 'translateX(-36%)', zIndex: 1 }}>

                    <PresureAmper
                        startAngle={-140}
                        endAngle={-220}
                        titleSize='1em'
                        valueSize='3em'
                        title="Temperature"
                        secondTitle="Volume"
                        clockwise={true}
                        secondValue={55}

                        thirdTitle='Time'
                        thirdValue={64}

                        progressWidth={22}
                        axisLineWidth={22}
                        value={presure}

                        secondTitleSize='1.8em'
                        thirdTitleSize='1.2em'

                        axisLabelDistance={44}
                        axisTickLength={8} />
                </div>
                <div className='flex column alignCenter relative' style={{ zIndex: 2 }}>
                    <motion.span variants={BLOCK_ANIMATIONS_VARIANTS} className=' fs-lg '>
                        فشار عصاره گیری
                    </motion.span>

                    <motion.span variants={BLOCK_ANIMATIONS_VARIANTS} className='fs-xl mb1'>
                        {presure}.0
                    </motion.span>
                    <NumberInput
                        onDecrease={handleDecreasePresure}
                        onIncrease={handleIncreasePresure}
                        value={presure}
                        text='Bar'

                    />
                </div>

                <div className='absolute' style={{ right: 0, transform: 'translateX(36%)', zIndex: 1 }}>
                    <PresureAmper
                        titleSize='1em'
                        valueSize='3em'
                        title="Temperature"
                        secondTitle="Volume"
                        secondValue={55}

                        thirdTitle='Time'
                        thirdValue={64}

                        progressWidth={22}
                        axisLineWidth={22}
                        value={presure}

                        secondTitleSize='1.8em'
                        thirdTitleSize='1.2em'

                        axisLabelDistance={44}
                        axisTickLength={8} />
                </div>
            </div>
            {/* <Button className='mt6 large contained primary absolute px6' style={{bottom: '4em'}}>
                Save Changes
            </Button> */}
        </motion.div>
    )
};

export const NumberInput = ({ onIncrease, onDecrease }: {
    value: any;
    onIncrease: () => void;
    onDecrease: () => void;
    text: any
}) => {
    return (
        <div className='flex alignCenter'>
            {/* <div className='flex column ml4'>
                <span className='font-bold' style={{ lineHeight: 1, fontSize: '4.5em', paddingBottom: '0.1em' }}>
                    {value}
                </span>
                <span className='fs-md'>
                    {text}
                </span>
            </div> */}
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
            <HoldableButton className='py3 px0 mr2 outlined'
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
export default PresureConfig
