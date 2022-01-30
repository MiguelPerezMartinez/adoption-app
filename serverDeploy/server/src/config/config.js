// imports
const dotenv = require('dotenv')

// load .env into process.env
dotenv.config()

//  process.env is destructuring
const {
  NODE_ENV = 'development',
  PORT,
  ENCRYPTION_SALT_DEVELOPMENT,
  ENCRYPTION_SALT_PRODUCTION,
  FIREBASE_TYPE,
  FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID,
  FIREBASE_AUTH_URI,
  FIREBASE_TOKEN_URI,
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  FIREBASE_CLIENT_X509_CERT_URL,
} = process.env

const CONFIG = {
  production: {
    app: {
      PORT: PORT || 4000,
    },
    encrypt: {
      salt: ENCRYPTION_SALT_PRODUCTION,
    },
    firebase: {
      certConfig: {
        type: FIREBASE_TYPE,
        project_id: FIREBASE_PROJECT_ID,
        private_key_id: FIREBASE_PRIVATE_KEY_ID,
        private_key: FIREBASE_PRIVATE_KEY,
        client_email: FIREBASE_CLIENT_EMAIL,
        client_id: FIREBASE_CLIENT_ID,
        auth_uri: FIREBASE_AUTH_URI,
        token_uri: FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: FIREBASE_CLIENT_X509_CERT_URL,
      },
    },
  },
  development: {
    app: {
      PORT: PORT || 4000,
    },
    encrypt: {
      salt: ENCRYPTION_SALT_DEVELOPMENT,
    },
    firebase: {
      certConfig: {
        type: FIREBASE_TYPE,
        project_id: FIREBASE_PROJECT_ID,
        private_key_id: FIREBASE_PRIVATE_KEY_ID,
        private_key: FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: FIREBASE_CLIENT_EMAIL,
        client_id: FIREBASE_CLIENT_ID,
        auth_uri: FIREBASE_AUTH_URI,
        token_uri: FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: FIREBASE_CLIENT_X509_CERT_URL,
      },
    },
  },
  test: {
    app: {
      PORT: PORT || 4000,
    },
    encrypt: {
      salt: ENCRYPTION_SALT_DEVELOPMENT,
    },
    firebase: {
      certConfig: {
        type: FIREBASE_TYPE,
        project_id: FIREBASE_PROJECT_ID,
        private_key_id: FIREBASE_PRIVATE_KEY_ID,
        private_key: FIREBASE_PRIVATE_KEY,
        client_email: FIREBASE_CLIENT_EMAIL,
        client_id: FIREBASE_CLIENT_ID,
        auth_uri: FIREBASE_AUTH_URI,
        token_uri: FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: FIREBASE_CLIENT_X509_CERT_URL,
      },
    },
  },
}

module.exports = {
  config: CONFIG[NODE_ENV],
}
