import type {RefObject} from 'react';
import { useEffect ,useRef } from 'react';
import useCustomLayoutEffect from './useCustomLayoutEffect'

/** 情况一：全局事件 */
function useEventListener<K extends keyof WindowEventMap>(
	eventName: K,
	handler: (event: WindowEventMap[K]) => void
): void;

/** 情况二：元素事件 */
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>
):void;

/** 情况三：元素事件或全局事件 */
function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void
>(
  eventName: KW | KH,
  handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event)=> void,
  element?: RefObject<T>
) {
  /** 创建ref用于存储事件处理函数 */
  const saveHandler = useRef(handler);
}
export default useEventListener;
