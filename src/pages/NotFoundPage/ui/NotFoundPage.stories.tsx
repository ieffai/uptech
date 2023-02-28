import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app'
import { ThemeDecorator } from 'shared/config'
import { NotFoundPage } from './NotFoundPage'

const meta: ComponentMeta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: {
            control: 'color'
        }
    }
}
export default meta
const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
