/*
 * @Author: zhangyang
 * @Date: 2023-01-16 15:20:25
 * @LastEditTime: 2023-01-24 16:14:00
 * @Description: 
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// 统一浏览器样式
import '@unocss/reset/tailwind.css';
import 'uno.css';

import { mount, StartClient } from "solid-start/entry-client";

mount(() => <StartClient />, document);
