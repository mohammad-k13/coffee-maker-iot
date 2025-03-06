import { useState, useEffect } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import {
    GaugeChart,
} from 'echarts/charts';
import {
    CanvasRenderer,
    // SVGRenderer,
} from 'echarts/renderers';
import { useGeneralStore } from '~/store/general';
import { THEME, axisLineLineStyleColors, axisLineLineStyleColors2, progressColors, titleColors, valueColors } from '~/store/constants';

// const axisLineColors: { [key: string]: string } = { dark: '#404040', light: '#aaaaaa' };
// const titleColors: { [key: string]: string } = { dark: '#929292', light: '#424242' };


interface AmperTypes {
    titleSize?: any,
    valueSize?: any,
    secondTitleSize?: any,
    thirdTitleSize?: any,
    title: string,
    axisLineWidth: number
    progressWidth: number
    value: number
    value2: number

    secondTitle?: string
    secondValue?: number

    thirdTitle?: string
    thirdValue?: number
    axisTickLength: number
    axisLabelDistance: number
};
echarts.use(
    [GaugeChart, CanvasRenderer]
);


const showableTicks = [1, 3, 5, 7, 9]
const NewAmper = ({ value,value2, title = "", valueSize, secondTitleSize, thirdTitleSize, titleSize, axisLineWidth, axisTickLength = 10,
    axisLabelDistance = 40,
    progressWidth, secondTitle, secondValue, thirdTitle, thirdValue }: AmperTypes) => {
    // const [value, setValue] = useState(0);
    const [color, _setColor] = useState('#44a0a1'); // Initial color, e.g., red

    const { [THEME]: theme } = useGeneralStore();
    // const axisLineColor = axisLineColors[theme];
    const valueColor = valueColors[theme];
    const titleColor = titleColors[theme];

    const axisLineLineStyleColor = axisLineLineStyleColors[theme]
    const axisLineLineStyleColor2 = axisLineLineStyleColors2[theme]
    const progressColor = progressColors[theme]
    const axisLabelColor = '#696969'
    useEffect(() => {
        // Simulate changing the value and color over time
        // let _val = 0
        // const interval = setInterval(() => {
        //   const randomValue = _val++ // Update value randomly for demonstration
        //   setValue(randomValue);

        //   // Change color based on value range
        //   if (randomValue > 135 && randomValue <= 200) {
        //     setColor('#ED2B2A'); // Red for values < 20
        //   } else if (randomValue < 100) {
        //     setColor('#576CBC'); // Blue for values between 20 and 80
        //   } else {
        //     setColor('#03C988'); // Green for values >= 80
        //   }
        //   console.log(_val)
        //   if(_val === 200){
        //     _val = 0
        //   }
        // }, 100);

        // return () => {
        //   clearInterval(interval);
        // };


        // if (value > 135 && value <= 200) {
        //     setColor('#ED2B2A'); // Red for values < 20
        // } else if (value < 100) {
        //     setColor('#576CBC'); // Blue for values between 20 and 80
        // } else {
        //     setColor('#03C988'); // Green for values >= 80
        // }

    }, [value]);


    const options0 = {

        series: [
            {
                animationDurationUpdate: 500,
                animationDuration: 10,
                type: 'gauge',
                center: ['50%', '50%'],
                startAngle: 300,
                endAngle: 60,
                min: 0,
                max: 200,
                // splitNumber: 12,

                // itemStyle: {
                //     color: 'auto'
                // },
                progress: {

                    show: true,
                    roundCap: true,
                    // color: '#59c0c4',
                    width: progressWidth,
                    itemStyle: {
                        color: color,
                        // borderWidth: 9,
                        // borderColor: '#000',
                        // borderCap: 'round'
                        // shadowColor: '#59c0c4',
                        // shadowBlur: 10,
                    }
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: axisLineWidth,
                        color: [[1, axisLineLineStyleColor]],

                        // color: [[0.2, '#4cbdc2'], [0.8, 'red'], [1, 'yellow']],
                        // color: [[0.3, '#67e0e3'],
                        // [0.7, '#37a2da'],
                        // [1, '#fd666d']]

                    },
                    // itemStyle: {
                    //     borderWidth: 8,
                    //     borderColor: 'red',
                    // },
                    // color: '#727272',
                    roundCap: true,
                    show: true
                },

                axisTick: {
                    distance: -15,
                    splitNumber: 5,
                    show: false,
                    lineStyle: {
                        width: 2,
                        color: '#999'
                    }
                },
                splitLine: {
                    distance: -52,
                    show: false,
                    length: 14,
                    lineStyle: {
                        width: 3,
                        color: '#999'
                    }
                },
                axisLabel: {
                    distance: 52,
                    color: '#999',

                    fontSize: 14,
                    rotate: 64,
                    show: false,
                    formatter: (val:any) => {
                        if (val === 120)
                            return 'GROUPHEAD1'
                    },
                    // rich: {
                    //     a: {
                    //         color: 'red',
                    //         lineHeight: 10
                    //     },
                    // }
                },
                anchor: {
                    show: false
                },
                title: {
                    show: false
                },
                detail: {
                    // valueAnimation: false,
                    width: '60%',
                    // lineHeight: 10,
                    borderRadius: 8,
                    // offsetCenter: [0, '-15%'],
                    fontSize: valueSize,
                    fontWeight: 'bolder',
                    formatter: '{value}',
                    // color: '#fff'
                },
                radius: "100%",
                data: [
                    {
                        value: value,
                        name: title,

                        detail: {
                            // valueAnimation: false,
                            offsetCenter: ['0%', '-8%'],
                            color: valueColor,
                            show: false
                        },
                        // itemStyle: {
                        //   borderWidth: 4,
                        //   borderColor: 'red',
                        //   borderDashOffset: 20,
                        //   borderJoin: 'miter',
                        //   borderMiterLimit: 16

                        // }
                    },

                ]
            },
            {
                animationDurationUpdate: 500,
                animationDuration: 10,
                type: 'gauge',
                center: ['50%', '50%'],
                startAngle: -40,
                endAngle: 40,
                clockwise: false,
                min: 0,
                max: 10,
                progress: {

                    show: true,
                    roundCap: true,
                    // color: '#59c0c4',
                    width: progressWidth,
                    itemStyle: {
                        color: progressColor,
                        // borderWidth: 9,
                        // borderColor: '#000',
                        // borderCap: 'round'
                        // shadowColor: '#59c0c4',
                        // shadowBlur: 10,
                    }
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: axisLineWidth,
                        color: [[1, axisLineLineStyleColor2]],

                        // color: [[0.2, '#4cbdc2'], [0.8, 'red'], [1, 'yellow']],
                        // color: [[0.3, '#67e0e3'],
                        // [0.7, '#37a2da'],
                        // [1, '#fd666d']]

                    },
                    // itemStyle: {
                    //     borderWidth: 8,
                    //     borderColor: 'red',
                    // },
                    // color: '#727272',
                    roundCap: true,
                    show: true
                },
                axisTick: {
                    distance: -15,
                    splitNumber: 5,
                    show: false,
                    lineStyle: {
                        width: 2,
                        color: '#999'
                    }
                },
                splitLine: {
                    distance: -52,
                    show: false,
                    length: 14,
                    lineStyle: {
                        width: 3,
                        color: '#999'
                    }
                },
                axisLabel: {
                    distance: 55,
                    color: '#999',

                    fontSize: 14,
                    rotate: 90,
                    show: false,
                    formatter: () => {
                        return 'GROUPHEAD1'
                    },
                    // rich: {
                    //     a: {
                    //         color: 'red',
                    //         lineHeight: 10
                    //     },
                    // }
                },
                anchor: {
                    show: false
                },
                title: {
                    show: false
                },
                detail: {
                    // valueAnimation: false,
                    width: '60%',
                    // lineHeight: 10,
                    borderRadius: 8,
                    // offsetCenter: [0, '-15%'],
                    fontSize: valueSize,
                    fontWeight: 'bolder',
                    formatter: '{value}',

                    // color: '#fff'
                },
                radius: "100%",
                data: [
                    {
                        value: value2,
                        name: title,

                        detail: {
                            // valueAnimation: false,
                            offsetCenter: ['0%', '-8%'],
                            color: valueColor,
                            show: false
                        },
                        // itemStyle: {
                        //   borderWidth: 4,
                        //   borderColor: 'red',
                        //   borderDashOffset: 20,
                        //   borderJoin: 'miter',
                        //   borderMiterLimit: 16

                        // }
                    },

                ]

            }
        ]
    }

    const options = {

        series: [
            // mainChart0,
            {
                // animationThreshold: 100,
                // animationEasing: 'quadraticIn',
                animationDurationUpdate: 500,
                animationDuration: 10,
                type: 'gauge',
                center: ['50%', '50%'],
                startAngle: 300,
                endAngle: 60,
                min: 0,
                max: 200,
                // splitNumber: 12,

                // itemStyle: {
                //     color: 'auto'
                // },
                progress: {

                    show: true,
                    roundCap: true,
                    // color: '#59c0c4',

                    width: progressWidth + 10,
                    itemStyle: {
                        color: axisLineLineStyleColor2,
                        borderWidth: 1,
                        borderColor: progressColor,
                        // borderMiterLimit: 44
                        // borderCap: 'round'
                        // borderCap: 'round'
                        // shadowColor: '#59c0c4',
                        // shadowBlur: 10,
                    }
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: axisLineWidth + 10,
                        color: [[1, progressColor]],

                        // color: [[0.2, '#4cbdc2'], [0.8, 'red'], [1, 'yellow']],
                        // color: [[0.3, '#67e0e3'],
                        // [0.7, '#37a2da'],
                        // [1, '#fd666d']]

                    },
                    // itemStyle: {
                    //     borderWidth: 8,
                    //     borderColor: 'red',
                    // },
                    // color: '#727272',
                    roundCap: true,
                    show: true
                },
                axisTick: {
                    distance: -15,
                    splitNumber: 5,
                    show: false,
                    lineStyle: {
                        width: 2,
                        color: '#999'
                    }
                },
                splitLine: {
                    distance: -52,
                    show: false,
                    length: 14,
                    lineStyle: {
                        width: 3,
                        color: '#999'
                    }
                },
                axisLabel: {
                    distance: 55,
                    color: '#999',

                    fontSize: 14,
                    rotate: 90,
                    show: false,
                    formatter: () => {
                        return 'GROUPHEAD1'
                    },

                },
                anchor: {
                    show: false
                },
                title: {
                    show: false
                },
                detail: {
                    // valueAnimation: false,
                    width: '60%',
                    // lineHeight: 10,
                    borderRadius: 8,
                    // offsetCenter: [0, '-4em'],
                    fontSize: valueSize,
                    fontWeight: 'bolder',
                    formatter: '{value}.0°c',
                    // color: '#fff'
                },
                radius: "100%",
                data: [
                    {
                        // value: value,
                        value: value,
                        name: title,
                        title: {
                            fontSize: titleSize,
                            offsetCenter: ['0%', progressWidth >= 24 ?'-62%' :'-58%'],
                            color: titleColor,
                            show: true,
                        },
                        detail: {
                            // valueAnimation: false,
                            offsetCenter: ['0%', '-40%'],
                            color: valueColor,
                            show: true
                        },
                        // itemStyle: {
                        //   borderWidth: 4,
                        //   borderColor: 'red',
                        //   borderDashOffset: 20,
                        //   borderJoin: 'miter',
                        //   borderMiterLimit: 16

                        // }
                    },
                    {
                        value: secondValue,
                        name: secondTitle,
                        title: {
                            fontSize: titleSize,
                            color: titleColor,
                            offsetCenter: ['0%', progressWidth >= 24 ? '-14%' : '-10%'],
                            show: true
                        },
                        detail: {
                            fontSize: valueSize,
                            color: valueColor,
                            offsetCenter: ['0%', '8%'],

                            show: true,
                            formatter: '{value}.0 ml'
                        }
                    },
                    {
                        value: 200,
                        name: thirdTitle,
                        title: {
                            fontSize: titleSize,
                            color: titleColor,
                            offsetCenter: ['0%', '36%'],
                            show: false

                        },
                        detail: {
                            fontSize: valueSize,
                            color: valueColor,
                            offsetCenter: ['0%', '56%'],
                            show: false
                        }
                    },
                    {
                        value: thirdValue,
                        name: thirdTitle,
                        title: {
                            fontSize: titleSize,
                            color: titleColor,
                            offsetCenter: ['0%', progressWidth >= 24 ? '32%' : '36%'],
                            show: true,

                        },
                        detail: {
                            fontSize: valueSize,
                            color: valueColor,
                            offsetCenter: ['0%', '54%'],
                            show: true,
                            // format as time
                            formatter: (val:any) => {
                                const minutes = Math.floor(val / 60);
                                const seconds = val % 60;
                                return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
                            }
                        }
                    },
                ]
            },

            {
                // animationThreshold: 100,
                // animationEasing: 'quadraticIn',
                animationDurationUpdate: 500,
                animationDuration: 10,
                type: 'gauge',
                center: ['50%', '50%'],
                startAngle: -40,
                endAngle: 40,
                clockwise: false,
                min: 0,
                max: 10,
                // splitNumber: 12,

                // itemStyle: {
                //     color: 'auto'
                // },
                progress: {

                    show: true,
                    roundCap: true,
                    // color: '#59c0c4',

                    width: progressWidth + 10,
                    itemStyle: {
                        color: axisLineLineStyleColor2,
                        borderWidth: 1,
                        borderColor: progressColor,
                        // borderMiterLimit: 44
                        // borderCap: 'round'
                        // borderCap: 'round'
                        // shadowColor: '#59c0c4',
                        // shadowBlur: 10,
                    }
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: axisLineWidth + 10,
                        color: [[1, progressColor]],

                        // color: [[0.2, '#4cbdc2'], [0.8, 'red'], [1, 'yellow']],
                        // color: [[0.3, '#67e0e3'],
                        // [0.7, '#37a2da'],
                        // [1, '#fd666d']]

                    },
                    // itemStyle: {
                    //     borderWidth: 8,
                    //     borderColor: 'red',
                    // },
                    // color: '#727272',
                    roundCap: true,
                    show: true
                },
                axisTick: {
                    distance: 0,
                    splitNumber: 1,
                    show: true,
                    length: axisTickLength,
                    lineStyle: {
                        width: 1,
                        color: progressColor,
                        // join: 'miter',
                        // miterLimit: 20
                    }
                },
                splitLine: {
                    distance: -16,
                    show: false,
                    length: 22,
                    lineStyle: {
                        width: 1,
                        color: '#fff'
                    }
                },
                axisLabel: {
                    distance: axisLabelDistance,
                    color: axisLabelColor,
                    fontSize: titleSize,
                    show: true,
                    formatter: (val:any) => {
                        if (showableTicks.includes(val)) return Number(val).toFixed(1)
                        return ''
                    }

                },
                anchor: {
                    show: false
                },
                title: {
                    show: false
                },
                detail: {
                    // valueAnimation: false,
                    width: '60%',
                    // lineHeight: 10,
                    borderRadius: 8,
                    // offsetCenter: [0, '-15%'],
                    fontSize: valueSize,
                    fontWeight: 'bolder',
                    formatter: '{value}',
                    // color: '#fff'
                },
                radius: "100%",
                data: [
                    {
                        value: 5,
                        name: title,
                        title: {
                            fontSize: titleSize,
                            offsetCenter: ['0%', '-50%'],
                            color: titleColor,
                            show: false
                        },
                        detail: {
                            // valueAnimation: false,
                            offsetCenter: ['0%', '-8%'],
                            color: valueColor,
                            show: false
                        },
                        // itemStyle: {
                        //   borderWidth: 4,
                        //   borderColor: 'red',
                        //   borderDashOffset: 20,
                        //   borderJoin: 'miter',
                        //   borderMiterLimit: 16

                        // }
                    },
                    {
                        value: 0,
                        name: 'Temperature',
                        title: {
                            fontSize: secondTitleSize,
                            color: titleColor,
                            offsetCenter: ['0%', '26%'],
                            show: false
                        },
                        detail: {
                            show: false
                        }
                    },
                    {
                        value: 10,
                        name: '° Degree Celsius',
                        title: {
                            fontSize: thirdTitleSize,
                            color: titleColor,
                            offsetCenter: ['0%', '48%'],

                            show: false
                        },
                        detail: {
                            show: false
                        }
                    },
                ],
                zlevel: 2
            },


        ]
    }

    return (
        <div className='relative'>
            <div style={{

                left: 5,
                top: 5,
                right: 5,
                bottom: 5,
                zIndex: 1,
                position: 'absolute'
            }}>
                <ReactEChartsCore
                    style={{
                        width: '100%',
                        padding: 4,
                        height: '100%',
                        // padding: 2,
                    }}
                    echarts={echarts}
                    option={options0}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={"theme_name"}
                />

            </div>
            <ReactEChartsCore
                style={{
                    width: '100%',
                    zIndex: 2,
                    padding: 4,
                    // padding: 2,
                    height: '80vh'
                }}
                echarts={echarts}
                option={options}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}

            // onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={ }
            />
        </div>
    )
};

export default NewAmper