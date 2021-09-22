const withPWA = require('next-pwa')

module.exports = withPWA({
    env: {
        NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
        NEXT_PUBLIC_PURPLE_URL: process.env.NEXT_PUBLIC_PURPLE_URL,
        PURPLE_KEY: process.env.PURPLE_KEY,
        NEXT_PUBLIC_RECAPTCHA_SITEKEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY,
        EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
        EMAILJS_USER_ID: process.env.EMAILJS_USER_ID
    },
    images: {
        domains: ['nextjs-bd.codewithbaycore.dev'],
    },
    pwa: {
        dest: 'public'
    }
});
