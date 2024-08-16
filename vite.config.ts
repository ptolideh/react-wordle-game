import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { UserConfig } from 'vitest/config';


// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  plugins: [react()],
} as UserConfig);
