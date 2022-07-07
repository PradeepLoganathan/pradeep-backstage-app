import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pradeepPluginPlugin = createPlugin({
  id: 'pradeep-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const PradeepPluginPage = pradeepPluginPlugin.provide(
  createRoutableExtension({
    name: 'PradeepPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
