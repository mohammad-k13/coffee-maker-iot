import { AnimationControls, motion } from 'framer-motion';
import { Button, Table } from '~/components/KIT';
import { ERROR_ITEM_VARIANTS } from '~/store/animationVars';

interface ErrorsTypes {
    menuAnimControls: AnimationControls; errorsAnimControls: AnimationControls
};

const FAKE_ERRORS = [
    {
        cA: 'Oct 3, 2023',
        code: '448',
        desc: 'It looks like the webpage at https://www.bing.com/search?pglt=41&q=moment+js&cvid=71f879ba65744e35bbe373256e78c2fa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMTkzNWowajGoAgCwAgA&FORM=ANNTA1&PC=EDG'
    },
]
const Errors = ({menuAnimControls, errorsAnimControls}:ErrorsTypes) => {
    return (
        <>
            <motion.div transition={{
                        type: "spring",
                        bounce: 0.1,
                    }} variants={ERROR_ITEM_VARIANTS}>
                        <Table
                            columns={[
                                {
                                    // header: t("table.image"),
                                    header: () => {
                                        return (
                                            <div className="flex w100">
                                                <span>Date</span>
                                            </div>
                                        );
                                    },
                                    accessorKey: "cA",
                                    // id={dataIsLoading},
                                    minSize: 180,
                                    // cell(props) {
                                    //     return (
                                    //         <Avatar style={{ padding: 0 }} className="medium">
                                    //             <MemberImage
                                    //                 // @ts-ignore
                                    //                 id={props.row.original.id}
                                    //                 alt="img"
                                    //                 // className="w100 h100"
                                    //                 // @ts-ignore
                                    //                 src={
                                    //                     // @ts-ignore
                                    //                     API_BASE_URL + "/members/image/" + props.row.original.id
                                    //                 }
                                    //                 onError={(e: any) => {
                                    //                     if (e.target) e.target.src = USER_DEFAULT_PIC;
                                    //                 }}
                                    //             />
                                    //         </Avatar>
                                    //     );
                                    // },
                                },
                                {
                                    header: () => {
                                        return (
                                            <div className="flex w100">
                                                <span>Code</span>
                                            </div>
                                        );
                                    },
                                    minSize: 180,
                                    accessorKey: 'code',

                                },
                                {
                                    header: () => {
                                        return (
                                            <div className="flex w100">
                                                <span>Description</span>
                                            </div>
                                        );
                                    },
                                    // maxSize: 400,
                                    accessorKey: 'desc',
                                    cell(props: any) {
                                        return (
                                            <div>
                                                <span className='max1LineText' style={{ maxWidth: '50ch' }}>
                                                    {props.getValue()}
                                                </span>
                                            </div>
                                        )
                                    },
                                }
                            ]}
                            data={FAKE_ERRORS}
                        />
                    </motion.div>

                    <div className='flex alignCenter justifyBetween mt3'>
                        <div className='flex alignCenter'>
                            <motion.div transition={{
                                type: "spring",
                                bounce: 0.1,
                            }} variants={ERROR_ITEM_VARIANTS}>
                                <Button className='contained' style={{ width: '10em' }}>Clear All</Button>
                            </motion.div>
                            <motion.div transition={{
                                type: "spring",
                                bounce: 0.1,
                            }} variants={ERROR_ITEM_VARIANTS} className='mr2'>
                                <Button className='contained'>Checklist</Button>
                            </motion.div>
                        </div>
                        <motion.div transition={{
                            type: "spring",
                            bounce: 0.1,
                        }} variants={ERROR_ITEM_VARIANTS}>
                            <Button className='contained' onClick={() => {
                                // console.log('errorsAnimControls', errorsAnimControls)
                                menuAnimControls.start('show')
                                errorsAnimControls.start('menuVisible')
                            }}>Go Back</Button>
                        </motion.div>
                    </div>
        </>
    )
};

export default Errors