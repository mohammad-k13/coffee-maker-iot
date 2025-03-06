import React from "react";
import { Button } from "../KIT";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /** only call longpress fn once */
    longPressOnce?: boolean;
    /** the number of ms needed to trigger a longpress */
    longPressThreshold?: number;
    onLongPress?: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>,
        pressDuration: number
    ) => void;
}
export default function HoldableButton(props: Props) {
    // do not attach onClick or onLongPress to button directly,
    // instead we will decide when either is called
    const { children, onClick, onLongPress, longPressThreshold = 500, ...rest } = props;

    // track click count on both browser and mobile using e.detail
    const [clickCount, setClickCount] = React.useState(0);

    // reset click counter to 0 after going 400ms without a click
    useDebounceFn(clickCount, () => setClickCount(0), 400);

    // long press stuff starts here

    // store the event that triggered the long press (click or touch event)
    const evt = React.useRef<any | null>(null);

    // store functions in a ref so they can update state without going stale
    const longPressRef = React.useRef<any>();
    const clickRef = React.useRef<any>();

    const stopwatch = useStopwatch();
    const [touched, setTouched] = React.useState(false);
    const [longPressedOnce, setLongPressedOnce] = React.useState(false);
    const pressDurationRef = React.useRef(0);

    pressDurationRef.current = stopwatch.time;
    // const longPressThreshold = longPressThreshold ?? 500;

    // keep click and long press fns updated in refs
    React.useEffect(() => {
        longPressRef.current = onLongPress;
        clickRef.current = onClick;
    }, [onLongPress, onClick]);

    // onClick handling
    React.useEffect(() => {
        const pressDuration = pressDurationRef.current;
        // when the user starts holding down the button,
        // immediately begin the stopwatch
        if (touched) {
            stopwatch.start();
        } else {
            // otherwise if the user has just released the button and
            // it is under 500ms, then trigger the onClick and
            // increment click counter
            if (pressDuration && pressDuration < 500) {
                const updatedClickCount = clickCount + 1;
                setClickCount(updatedClickCount);
                evt.current.detail = updatedClickCount;
                clickRef.current?.(evt.current);
            }
            // finally reset the stopwatch since button is no longer held down
            stopwatch.reset();
        }
    }, [touched]);

    // long press handling
    React.useEffect(() => {
        if (!longPressRef.current) return;
        const pressDuration = pressDurationRef.current;

        // if the button has been held down longer than longPress threshold,
        // either execute once, or repeatedly everytime the pressDuration
        // changes, depending on the props provided by the user
        if (pressDuration > longPressThreshold) {
            if (props.longPressOnce) {
                // skip if long press has already been
                // executed once since being touched
                if (longPressedOnce || !touched) return;
                longPressRef.current(evt, pressDuration);
                setLongPressedOnce(true);
            } else {
                // otherwise keep calling long press every 10ms, passing the
                // event and how long the button has been held to the caller
                longPressRef.current(evt, pressDuration);
            }
        }
    }, [pressDurationRef.current, longPressThreshold, longPressedOnce, touched]);

    // const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const pressProps = {
        onTouchStart: (e: any) => {
            evt.current = e;
            setTouched(true);
            props.onTouchStart?.(e);
        },
        onTouchEnd: (e: any) => {
            setLongPressedOnce(false);
            setTouched(false);
            props.onTouchEnd?.(e);
        },
        onMouseDown: (e: any) => {
            // globally store the click event
            evt.current = e;
            setTouched(true);
            props.onMouseDown?.(e);
        },
        onMouseUp: (e: any) => {
            setLongPressedOnce(false);
            setTouched(false);
            props.onMouseUp?.(e);
        },
        onMouseLeave: (e: any) => {
            setLongPressedOnce(false);
            setTouched(false);
            props.onMouseLeave?.(e);
        },
    }

    return (
        <Button {...rest} {...pressProps}>
            {children}
        </Button>
    )
}

function useStopwatch() {
    const [time, setTime] = React.useState(0);
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        let interval: any | null = null;

        if (active) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 50);
            }, 50);
        } else {
            clearInterval(interval!);
        }

        return () => clearInterval(interval!);
    }, [active]);

    const start = () => setActive(true);
    const reset = () => {
        setActive(false);
        setTime(0);
    };

    return { time, start, reset };
}

function useDebounceFn<T = unknown>(
    pulse: T,
    fn: () => void,
    delay: number = 500
) {
    const callbackRef = React.useRef(fn);
    React.useLayoutEffect(() => {
        callbackRef.current = fn;
    });

    // reset the timer to call the fn everytime the pulse value changes
    React.useEffect(() => {
        const timerId = setTimeout(fn, delay);
        return () => clearTimeout(timerId);
    }, [pulse, delay]);
}