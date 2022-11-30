import {FC, HTMLProps} from 'react';
import classNames from 'classnames'
interface Props extends HTMLProps<HTMLDivElement>{

}
const Layout: FC<Props> = ({ children })=>{
  return (
    <div
      id='layout'
      className={classNames('relative flex min-h-screen w-full flex-col items-center',
      'bg-white dark:bg-zinc-900')}
    >

    </div>
  )
}

export default Layout;