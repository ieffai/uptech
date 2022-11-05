import './styles/index.scss'

import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared'
import { AppRouter } from './providers/router'
import { Navbar, Sidebar } from 'widgets'
import { ReactElement, Suspense } from 'react'

const App = (): ReactElement => {
    const { theme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="Loading">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
