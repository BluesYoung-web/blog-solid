/*
 * @Author: zhangyang
 * @Date: 2023-01-16 15:20:51
 * @LastEditTime: 2023-01-24 15:22:38
 * @Description:
 */
import solid from 'solid-start/vite';
import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      ...(await (
        await import('@mdx-js/rollup')
      ).default({
        jsx: true,
        jsxImportSource: 'solid-jsx',
        providerImportSource: 'solid-mdx',
      })),
      enforce: 'pre',
    },
    solid({
      extensions: ['.ts', '.tsx', '.md', '.mdx'],
    }),
    legacy({}),
  ],
});
