import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app'
import { ThemeDecorator } from 'shared/config'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta: ComponentMeta<typeof ThemeSwitcher> = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher
}
export default meta

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Normal = Template.bind({})
Normal.args = {}
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
