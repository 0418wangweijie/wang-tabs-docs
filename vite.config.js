import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// 获取当前工作模式（例如 'development' 或 'production'）
const mode = process.env.NODE_ENV || 'development';

// 获取环境变量文件所在的目录
const envDir = fileURLToPath(new URL('./', import.meta.url));

console.log('mode:', mode,envDir)

const env = loadEnv(mode,envDir)

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': env,
    },
});