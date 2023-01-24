/*
 * @Author: zhangyang
 * @Date: 2023-01-24 15:16:35
 * @LastEditTime: 2023-01-24 16:20:00
 * @Description: 
 */
import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1 class="bg-blue-200 font-bold text-5xl">Hello world! <span class="i-logos-solidjs" /></h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
