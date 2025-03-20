import type { Config } from '@react-router/dev/config';

// Leer la base de datos de los clientes/productos

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  async prerender() {
    return ['/auth/login', '/auth/register', '/auth/testing'];
  },
} satisfies Config;
