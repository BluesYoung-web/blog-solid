/*
 * @Author: zhangyang
 * @Date: 2023-01-16 15:20:51
 * @LastEditTime: 2023-01-16 15:22:49
 * @Description:
 */
import solid from "solid-start/vite";
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [solid(), legacy({})],
});
