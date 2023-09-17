import { useEffect, useRef } from 'react';

/**
 * 忽略首次更新，即组件第一次挂载的时候不会触发，但是当effect中值变动的时候就触发useUpdateEffect
 * @param effect 函数
 * @param deps 依赖数组，必须是 [a, b, c] 的形式
 */
const useUpdateEffect = (effect, deps) => {
  const isInitialMount = useRef(true);
  // eslint-disable-next-line
	useEffect(
    isInitialMount.current
      ? () => {
          isInitialMount.current = false;
        }
      : effect,
    deps
  );
};

export default useUpdateEffect;
