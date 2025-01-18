import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin: "*",
    cors: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      'Content-Security-Policy': "frame-ancestors 'self' *",
      'X-Content-Security-Policy': "frame-ancestors 'self' *",
      'X-WebKit-CSP': "frame-ancestors 'self' *",
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
