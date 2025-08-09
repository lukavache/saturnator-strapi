export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      email: {
        confirmation: {
          template: {
            subject: 'Welcome to Saturnator! Please confirm your email',
            text: 'Welcome to Saturnator! Please confirm your email by clicking on the following link: <%= URL %>',
            html: `
              <h1>Welcome to Saturnator!</h1>
              <p>Please confirm your email by clicking on the following link:</p>
              <a href="<%= URL %>">Confirm Email</a>
            `
          }
        },
        resetPassword: {
          template: {
            subject: 'Reset your password',
            text: 'Reset your password by clicking on the following link: <%= URL %>',
            html: `
              <h1>Reset your password</h1>
              <p>Reset your password by clicking on the following link:</p>
              <a href="<%= URL %>">Reset Password</a>
            `
          }
        }
      }
    },
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('SENDGRID_FROM_EMAIL'),
        defaultReplyTo: env('SENDGRID_FROM_EMAIL'),
      },
    },
  },
  upload: {
    config: {
      provider: 'local',
      sizeLimit: 1000000,
    },
  },
});
