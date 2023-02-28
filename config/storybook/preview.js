import { addDecorator } from '@storybook/react'
import { Theme } from 'app'
import { StyleDecorator, ThemeDecorator } from 'shared'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
