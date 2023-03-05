/*
 * @Author: zhangyang
 * @Date: 2023-01-16 15:20:51
 * @LastEditTime: 2023-03-05 18:01:17
 * @Description:
 */
import solid from 'solid-start/vite';
import legacy from '@vitejs/plugin-legacy';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';

import { provider } from 'std-env';
// @ts-ignore
import netlify from 'solid-start-netlify';

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
      adapter: provider === 'netlify' ? netlify() : 'solid-start-node',
    }),
    unocss(),
    legacy({}),
  ],
});
