"use strict";

const defaultListenPort = 8080;

const portFromEnv = () => {
  const x = parseInt(process.env.PORT, 10);
  /* istanbul ignore next */
  return (x !== null && !isNaN(x)) ? x : defaultListenPort;
};

module.exports = {
  "plugins": {
    "inert": {
      "enable": true
    },
    "electrodeStaticPaths": {
      "enable": true,
      "options": {
        "pathPrefix": "dist"
      }
    },
    "./server/plugins/pwa": {},
    "webapp": {
      "module": "electrode-react-webapp/lib/express",
      "options": {
        "pageTitle": "Peach",
        "paths": {
          "*": {
            "content": {
              "module": "./server/views/index-view"
            }
          }
        }
      }
    }
  },
  "connections": {
    "default": {
      "address":   "0.0.0.0",
      "port": portFromEnv(),
      "routes": {
        "cors": true
      },
      "state": {
        "ignoreErrors":true
      }
    }
  }
};
