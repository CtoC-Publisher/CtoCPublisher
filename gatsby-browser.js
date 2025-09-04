import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider.js';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>{element}</NotificationProvider>
);
