import { MouseEventHandler } from 'react';
import Link from 'next/link'

const TabBar = () => {
  const swithMode: MouseEventHandler<HTMLDivElement> = (e) => {
    const { dataset: { mode = 'light' } } = e.target as HTMLDivElement;
    document.documentElement.classList.remove(mode === 'dark' ? 'light' : 'dark')
    document.documentElement.classList.add(mode)
  }

  return <header className="bg-gray-50 h-16 sticky top-0 flex text-center justify-around items-center px-24">
    <div className="ml-auto w-24">
    <Link  href="/">首页</Link>
    </div>
    <Link className="w-24" href="/articles">博客</Link>
    <div className="group w-24 relative text-orange-300">
      <button>主题切换</button>
      <div className="bg-white absolute w-24 text-center pt-4 cursor-pointer hidden group-hover:block" onClick={swithMode}>
        <div data-mode="light">默认主题</div>
        <div data-mode="dark">黑暗模式</div>
      </div>
    </div>

  </header>
}

export default TabBar;