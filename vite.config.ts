/*
 * @Author: zhangyang
 * @Date: 2023-01-16 15:20:51
 * @LastEditTime: 2023-02-01 15:36:09
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
      adapter: provider === 'netlify' ? netlify({ edge: true }) : 'solid-start-node',
    }),
    unocss(),
    legacy({}),
  ],
});
