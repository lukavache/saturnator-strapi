export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https://saturnator.pages.dev', 'https://saturnator-strapi.onrender.com', 'http://localhost:3000', 'http://localhost:3001'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://saturnator-strapi.onrender.com', 'http://localhost:1337'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://saturnator-strapi.onrender.com', 'http://localhost:1337'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: ['https://saturnator.pages.dev', 'http://localhost:3000', 'http://localhost:3001', 'http://localhost:3003'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      credentials: true,
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];