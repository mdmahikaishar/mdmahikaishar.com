export function fadeIn({ direction = "left", delay = 0, duration = .5, mode = "animate" }: {
  direction?: "left" | "right" | "top" | "bottom",
  delay?: number,
  duration?: number,
  mode?: "animate" | "view"
} = {}) {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
      opacity: 0
    },
    [mode === "animate" ? "animate" : "whileInView"]: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay, duration }
    }
  }
}