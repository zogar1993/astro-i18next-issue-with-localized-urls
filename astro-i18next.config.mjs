/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en-US",
  locales: ["en-US", "es"],

  i18nextServer: {
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },

  routes: {
    es: {
      "hello-world": "hola-mundo",
      "nested": {
        "hello-world": "hola-mundo"
      },
      hello: {
        index: "hola"
      },
      "[id]": {
        "hello-world": "hola-mundo"
      }
    }
  }
}