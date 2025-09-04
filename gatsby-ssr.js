import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider.js';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>{element}</NotificationProvider>
);

// Prevent react-slick from causing SSR issues
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="react-slick-ssr-fix"
      dangerouslySetInnerHTML={{
        __html: `
          if (typeof window === 'undefined') {
            global.window = {};
            global.document = { createElement: () => ({}) };
          }
        `,
      }}
    />,
  ]);
};