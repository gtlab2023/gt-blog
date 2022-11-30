import {useEffect, useLayoutEffect } from 'react';

/** 
 * useLayoutEffect是不会在服务端执行的，这样处理可以保证首屏渲染内容和预期一致
 * 同时之后使用effect处理能不出现闪烁
 * */
const useCustomLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
  
export default useCustomLayoutEffect;