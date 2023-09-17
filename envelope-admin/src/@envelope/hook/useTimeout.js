import { useEffect, useRef } from 'react';

/**
 * 增强计时器
 * @param callback fn 定时器逻辑
 * @param delay 时延
 */
function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  /**
   * 这里的deps必须也只能是delay，不可以加上callback!
   * 首先第一次触发定时器的时候，会导致组件进行一次re-render！
   * re-render之后会继续触发useTimeout，而根据Object.is浅比较规则，如果deps中依赖了callback回调函数，那么两次比较的结果肯定是false，
   * 这样二次触发定时器，依次往复，从间隔x秒触发一次 -> 变成 每间隔x秒就触发一次！
   *
   * 但是，如果不赖callback，那么useTimeout中的第二个useEffect（定时器主要逻辑）就不会触发！，那么就不会再次导致re-render！！！
   */
  useEffect(() => {
    let timer;

    if (delay && callback && typeof callback === 'function') {
      timer = setTimeout(callbackRef.current, delay || 0);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [/*callback,*/delay]);
}

export default useTimeout;
