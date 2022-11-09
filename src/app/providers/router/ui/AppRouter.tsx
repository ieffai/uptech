import { ReactElement, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared'
import { PageLoader } from 'widgets'

const AppRouter = (): ReactElement => {
    return (

        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={(
                        <Suspense fallback={<PageLoader /> }>
                            <div className="page-wrapper">{element}
                            </div>
                        </Suspense>)}
                    path={path}
                />
            ))}
        </Routes>

    )
}

export default AppRouter
