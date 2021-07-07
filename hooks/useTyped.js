import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

/**
 *
 * @param {array} strings array of comma seperated string to animate
 * @param {number} typeSpeed cursor animation typing speed
 * @param {number} backSpeed cursor animation delete speed
 * @param {function} onBegin callback when animation begins
 * @returns element with animated text content
 */

const useTyped = (
    strings = [],
    typeSpeed = 50,
    backSpeed = 50,
    onBegin = () => {}
) => {
    const el = useRef(null);
    const typed = useRef(null);
    const options = { strings, typeSpeed, backSpeed, onBegin };

    useEffect(() => {
        typed.current = new Typed(el.current, options);
        return () => {
            typed.current.destroy();
        };
    }, []);

    return <span ref={el}></span>;
};

export default useTyped;
