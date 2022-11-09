import { ReactElement } from 'react'
import { classNames } from 'shared'
import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps): ReactElement => {
    return (
        <div className={classNames(cls.lds__ellipsis, {}, [className])}>

            <div></div>
            <div></div>
            <div></div>
            <div></div>

        </div>
    )
}
