/*
 * @Author: zhangyang
 * @Date: 2023-01-24 15:16:35
 * @LastEditTime: 2023-04-08 17:36:56
 * @Description: 
 */
import { createSignal } from "solid-js";
import { Title } from "solid-start";
import Counter from "~/components/Counter";
import OneSay from "~/components/OneSay";
import Music from "~/components/Music";

export default function Home() {
  const [getName, setName] = createSignal('');

  const goApi = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === 'enter') {
      location.href = `/api/user/${getName()}`;
    }
  };

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
      <OneSay />
      <Music />

      <h2 class="text-2xl p-2">api route demo</h2>
      <input class="border border-blue-200 focus:outline-blue w-520px py-1 px-1.6" placeholder="please input your name and then press enter" value={getName()} onInput={(e) => setName(e.currentTarget.value)} onKeyUp={goApi} />
    </main>
  );
}
