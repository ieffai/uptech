import { Story } from '@storybook/react'
import { Theme } from 'app'
import 'app/styles/index.scss'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
)
