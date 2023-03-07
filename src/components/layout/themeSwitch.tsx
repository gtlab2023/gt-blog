import { MouseEventHandler, FC } from "react";
const ThemeSwitch: FC = () => {
  const swithMode: MouseEventHandler<HTMLDivElement> = (e) => {
    const {
      dataset: { mode = "light" },
    } = e.target as HTMLDivElement;
    document.documentElement.classList.remove(
      mode === "dark" ? "light" : "dark"
    );
    document.documentElement.classList.add(mode);
  };
  return (
    <div className="group w-24 relative text-orange-300">
      <button>主题切换</button>
      <div
        className="bg-white absolute w-24 text-center pt-4 cursor-pointer hidden group-hover:block"
        onClick={swithMode}
      >
        <div data-mode="light">默认主题</div>
        <div data-mode="dark">黑暗模式</div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
