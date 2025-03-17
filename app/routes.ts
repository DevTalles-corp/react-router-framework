import {
  type RouteConfig,
  index,
  layout,
  route,
  prefix,
} from '@react-router/dev/routes';

export default [
  // Home
  index('routes/home.tsx'),

  // Auth:  /auth/login, /auth/register
  ...prefix('/auth', [
    layout('layouts/auth-layout.tsx', [
      route('login', 'routes/auth/login-page.tsx'),
      route('register', 'routes/auth/register-page.tsx'),
    ]),
  ]),

  // Chat: /chat, /chat/ABC
  ...prefix('/chat', [
    layout('layouts/chat-layout.tsx', [
      index('routes/chat/no-chat-selected-page.tsx'),
      route('ABC', 'routes/chat/client-chat-page.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
