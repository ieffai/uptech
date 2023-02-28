import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app'
import { ThemeDecorator } from 'shared/config'
import { Sidebar } from './Sidebar'

const meta: ComponentMeta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar
}
export default meta

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {
}
export const Dark = Template.bind({})
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
