import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@mediapipe/pose': path.resolve(process.cwd(), 'src/shims/mediapipe-pose-shim.js'),
        },
    },
});