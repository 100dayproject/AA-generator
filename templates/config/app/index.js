"use strict";

module.exports = {
    app: {
        name: 'AA',
        copyright: '100dayProject.org',
        favicon: "favicon.ico",
        logo: "AA.png",
        title: "Life-Parser - Open source hasOwn by 100dayProject.org",
        description: "LifeParser | Technical | Technology | Electronic | Open source hasOwn by 100dayproject.org",
        keywords: "LifeParser, Technical technology, Open source, 100dayproject, 100dayproject.org",
        language: "vi_VN"
    },
    env: {
        development: "development",
        production: "production",
        test: "test"
    },
    admin_prefix: "admin",
    site: {
        port: process.env.PORT || 1337,
        templateEngine: 'nunjucks',
        theme: {
            name: "bootstrap", //* path and theme name common for multiple layer
            path: "themes"
        }
    },
    appLayer: {
        frontend: {
            pathView: 'views',

            /**
             * Render_manager use array[0] for loader path error 404, 500 and more.
             * You can fix fix it but note the caption up.
             * Ex: backend.loader[0]
             */
            loader: [
                "themes/frontend/",
                "app/modules/"
            ]
        },
        backend: {
            pathView: 'views',
            loader: [
                "themes/backend/",
                "app/modules/"
            ]
        }
    },
    validate: {
        username: /^[a-z0-9_-]+$/ig,
        alias: /[+_.,!@#$%^&*();\/|<>"'\\ ]/g,
        displayName: /[+.,!@#$%^&*();\/|<>"'\\]/g,
        phone: /^\d{9,11}$/ig
    }
};
