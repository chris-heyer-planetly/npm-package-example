import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography type={args.type}>{args.children}</Typography>;

export const Title = Template.bind({});
Title.args = {
  type:'title',
  children: 'This is a 🐈-chy title!',
};

export const Body = Template.bind({});
Body.args = {
  type:'body',
  children: 'Here 🚶 the lorem ipsum laudet text',
};
