import { BugButton } from 'app'
import { ReactElement, useState } from 'react'
import { classNames } from 'shared'
import { ThemeSwitcher, LangSwitcher } from 'widgets'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps): ReactElement => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => {
        setCollapsed((prev) => !prev)
    }
    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className
            ])}
        >

            <div className={cls.switchers}>
                <BugButton />
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>

            <button onClick={onToggle}>SIDEBAR</button>

        </div>
    )
}
