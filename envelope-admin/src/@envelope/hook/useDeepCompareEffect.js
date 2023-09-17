import {useEffect, useRef} from "react";
import deepEqual from 'lodash/isEqual';

/**
 * 在useEffect中如果依赖是一个对象或者数组的话，每次重渲染（不管依赖有没有变）都会触发useEffect，
 * useEffect底层是Object.is进行浅比较，如空对象 {} 两次判断结果是false，是会触发useEffect的
 * useDeepCompareEffect使用lodash的isEqual，运用ref在一个生命周期中地址不变的特性进行深比较
 *
 * 只有依赖对象是 json 或者 array的时候才使用useDeepCompareEffect。否则使用useEffect
 *
 * https://github.com/kentcdodds/use-deep-compare-effect
 */
function checkDeps(deps) {
    if (!deps || !deps.length) {
        throw new Error(
            'useDeepCompareEffect should not be used with no dependencies. Use React.useEffect instead.'
        );
    }
    if (deps.every(isPrimitive)) {
        throw new Error(
            'useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
        );
    }
}

function isPrimitive(val) {
    return val == null || /^[sbn]/.test(typeof val);
}

function useDeepCompareMemoize(value) {
    const ref = useRef();

    if (!deepEqual(value, ref.current)) {
        ref.current = value;
    }

    return ref.current;
}


function useDeepCompareEffect(callback, dependencies) {
    if (process.env.NODE_ENV !== 'production') {
        checkDeps(dependencies);
    }
    // eslint-disable-next-line
    useEffect(callback, useDeepCompareMemoize(dependencies));
}

export function useDeepCompareEffectNoCheck(callback, dependencies) {
    // eslint-disable-next-line
    useEffect(callback, useDeepCompareMemoize(dependencies));
}

export default useDeepCompareEffect;
