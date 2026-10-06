import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In dev, the captcha and mail scripts are proxied to the live PHP site.
// In production the build is deployed on that same host, so they're same-origin.
const php = {
  target: 'https://www.nationalroofing.in',
  changeOrigin: true,
  cookieDomainRewrite: 'localhost',
}

export default defineConfig({
  plugins: [react()],
  build: {
    target: ['es2020', 'chrome87', 'edge88', 'firefox78', 'safari14'],
  },
  server: {
    proxy: {
      '/captcha.php': php,
      '/homemail.php': php,
      '/contactmail.php': php,
    },
  },
})
