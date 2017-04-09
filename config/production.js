//
// This file is here to allow enabling the plugins inert and electrodeStaticPaths, overriding the
// settings in production.json, in order to serve the static JS and CSS bundle files from
// the dist directory so you can test your app server locally in production mode.
//
// When running in a real production environment where your static files are most likely served
// by a dedicated CDN server, you might want to turn these plugins off.
//

const serveStaticFiles = () => {
  return process.env.STATIC_FILES_OFF !== "true";
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
