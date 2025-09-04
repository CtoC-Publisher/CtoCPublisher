import React from 'react';
import './src/styles/global.css';

import { NotificationProvider } from './src/context/AddItemNotificationProvider.js';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>{element}</NotificationProvider>
);
