import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app'
import { ThemeDecorator } from 'shared/config'
import MainPage from './MainPage'

const meta: ComponentMeta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: {
            control: 'color'
        }
    }
}
export default meta
const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
