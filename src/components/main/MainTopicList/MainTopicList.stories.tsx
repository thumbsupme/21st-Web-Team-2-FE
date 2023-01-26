import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TOPICS } from '@mocks/data/topic';

import MainTopicList from '.';

export default {
  title: 'main/MainTopicList',
  component: MainTopicList,
  argTypes: {},
} as ComponentMeta<typeof MainTopicList>;

const Template: ComponentStory<typeof MainTopicList> = (args) => <MainTopicList {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  topics: TOPICS,
};
