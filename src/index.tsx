import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import { ErrorBoundary, ThemeProvider } from 'app'

// import 'shared/config/i18n/i18n'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n'

render(
    <I18nextProvider i18n={i18n}>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>

        </BrowserRouter>

    </I18nextProvider>
    ,
    document.getElementById('root')
)
