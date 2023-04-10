import type { RefObject } from "react";
import { useRef, useEffect } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
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
): void;

/** 情况三：元素事件或全局事件 */
function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void
>(
  eventName: KW | KH,
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event
  ) => void,
  element?: RefObject<T>
) {
  /** 创建ref用于存储事件处理函数 */
  const savedHandler = useRef(handler);

  // 在 DOM 渲染之前先保存事件处理函数到 ref
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  // 在DOM渲染之后添加绑定事件
  useEffect(() => {
    const targetElement: T | Window | null = element?.current || window;
    if (!targetElement?.addEventListener) {
      return;
    }
    const eventListener: typeof handler = (event) =>
      savedHandler.current(event);
    // 添加事件监听
    targetElement.addEventListener(eventName, eventListener);
    // 组件卸载时移除事件监听
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
export default useEventListener;
