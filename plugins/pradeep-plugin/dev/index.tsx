import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pradeepPluginPlugin, PradeepPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pradeepPluginPlugin)
  .addPage({
    element: <PradeepPluginPage />,
    title: 'Root Page',
    path: '/pradeep-plugin'
  })
  .render();
