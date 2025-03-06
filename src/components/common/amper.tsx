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
import { THEME } from '~/store/constants';

const axisLineColors: { [key: string]: string } = { dark: '#404040', light: '#aaaaaa' };
const valueColors: { [key: string]: string } = { dark: '#fff', light: '#000' };
const titleColors: { [key: string]: string } = { dark: '#929292', light: '#424242' };


interface AmperTypes {
    titleSize?: any,
    valueSize?: any,
    secondTitleSize?: any,
    thirdTitleSize?: any,
    title: string,
    axisLineWidth: number
    progressWidth: number
    value: number
};
echarts.use(
    [GaugeChart, CanvasRenderer]
);
const Amper = ({ value, title = "", valueSize, secondTitleSize, thirdTitleSize, titleSize, axisLineWidth, progressWidth }: AmperTypes) => {
    // const [value, setValue] = useState(0);
    const [color, setColor] = useState('#ff4500'); // Initial color, e.g., red

    const { [THEME]: theme } = useGeneralStore();
    const axisLineColor = axisLineColors[theme];
    const valueColor = valueColors[theme];
    const titleColor = titleColors[theme];
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


        if (value > 135 && value <= 200) {
            setColor('#ED2B2A'); // Red for values < 20
        } else if (value < 100) {
            setColor('#576CBC'); // Blue for values between 20 and 80
        } else {
            setColor('#03C988'); // Green for values >= 80
        }

    }, [value]);

    const options = {

        series: [
            {
                // animationThreshold: 100,
                // animationEasing: 'quadraticIn',
                animationDurationUpdate: 500,
                animationDuration: 10,
                type: 'gauge',
                center: ['50%', '60%'],
                startAngle: 220,
                endAngle: -40,
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
                        color: [[1, axisLineColor]],
                        // color: [[0.3, '#67e0e3'],
                        // [0.7, '#37a2da'],
                        // [1, '#fd666d']]

                    },
                    // color: '#727272',
                    roundCap: true,
                    show: true
                },
                axisTick: {
                    distance: -45,
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
                    distance: -20,
                    color: '#999',
                    fontSize: 20,
                    show: false
                },
                anchor: {
                    show: false
                },
                title: {
                    show: true
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
                        title: {
                            fontSize: titleSize,
                            offsetCenter: ['0%', '-50%'],
                            color: titleColor,
                        },
                        detail: {
                            // valueAnimation: false,
                            offsetCenter: ['0%', '-8%'],
                            color: valueColor
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

                        },
                        detail: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: '° Degree Celsius',
                        title: {
                            fontSize: thirdTitleSize,
                            color: titleColor,
                            offsetCenter: ['0%', '48%'],

                        },
                        detail: {
                            show: false
                        }
                    },
                ]
            },
            // {
            //     type: 'gauge',
            //     center: ['50%', '60%'],
            //     startAngle: 200,
            //     radius: "90%",
            //     endAngle: -20,
            //     min: 0,
            //     max: 60,
            //     itemStyle: {
            //         color: '#3c9397'
            //     },
            //     progress: {
            //         show: true,
            //         // roundCap: true,
            //         width: 10
            //     },
            //     pointer: {
            //         show: false
            //     },
            //     axisLine: {
            //         show: false
            //     },
            //     axisTick: {
            //         show: false
            //     },
            //     splitLine: {
            //         show: false
            //     },
            //     axisLabel: {
            //         show: false
            //     },
            //     detail: {
            //         show: false
            //     },
            //     data: [
            //         {
            //             value: 20,
            //             // itemStyle: {
            //             //   borderWidth: 6,
            //             //   borderColor: 'red',
            //             //   borderDashOffset: 20,
            //             //   borderJoin: 'miter',
            //             //   borderMiterLimit: 16,
            //             //   shadowColor: 'yellow',
            //             //   shadowBlur: 16,
            //             //   showOffsetX: 32,
            //             //   showOffsetY: 32,
            //             // }
            //         }
            //     ]
            // }
        ]
    }

    return (
        <ReactEChartsCore
            style={{
                width: '100%',
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
    )
};

export default Amper