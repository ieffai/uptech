import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app'
import { ThemeDecorator } from 'shared/config'
import { PageError } from './PageError'

const meta: ComponentMeta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError
}
export default meta

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Light = Template.bind({})
Light.args = {
}
export const Dark = Template.bind({})
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
