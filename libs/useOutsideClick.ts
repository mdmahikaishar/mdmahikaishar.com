import { useEffect } from "react";

/**
 * useOutsideClick
 * ----------------
 * when click occured outside of a group of element
 * @param ref all ref of elements that's clickable
 * @param state current state of parent
 * @param callback outside clicked function
 */
export default function useOutsideClick(
    ref: Array<any>,
    state: any,
    callback: Function
):void {
    const handler = (e: any) => {
        if (!state) return;

        const target = e.target;

        const refClicked = ref.some(
            (item) => item && item.current && item.current.contains(target)
        );

        if (!refClicked) return callback();
    };

    // FOR EVERY UPDATE
    useEffect(() => {
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, [state, ref]);
}
