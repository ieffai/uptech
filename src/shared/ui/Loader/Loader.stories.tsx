import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app'
import { ThemeDecorator } from 'shared/config'
import { Loader } from './Loader'

const meta: ComponentMeta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader
}
export default meta

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
