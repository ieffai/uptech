import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app'
import { ThemeDecorator } from 'shared/config'
import AboutPage from './AboutPage'

const meta: ComponentMeta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: {
            control: 'color'
        }
    }
}
export default meta
const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
