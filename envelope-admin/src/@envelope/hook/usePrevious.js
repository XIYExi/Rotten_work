import { useEffect, useRef } from 'react';

/**
 * 返回上一个值,usePrevious最开始保存值为空（null），之后每一轮re-render将会保存上一个值
 * @param value
 * @returns {undefined}
 */
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
