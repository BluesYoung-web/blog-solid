/*
 * @Author: zhangyang
 * @Date: 2023-01-16 15:20:51
 * @LastEditTime: 2023-04-05 18:01:33
 * @Description:
 */
// @ts-nocheck
import solid from 'solid-start/vite';
import legacy from '@vitejs/plugin-legacy';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';

import { provider } from 'std-env';
import netlify from 'solid-start-netlify';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
    },
  },
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
      adapter: provider === 'netlify' ? netlify() : 'solid-start-node',
    }),
    unocss(),
    legacy({}),
  ],
});
