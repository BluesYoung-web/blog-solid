/*
 * @Author: zhangyang
 * @Date: 2023-01-16 15:51:30
 * @LastEditTime: 2023-02-01 16:25:20
 * @Description: 
 */
import { For, Accessor, createResource } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

type Student = { name: string; house: string; }

export function routeData() {
  const students = createServerData$(async (...args) => {
    try {
      const response = await fetch("https://hogwarts.deno.dev/students");
      return await response.json() as Student[];
    } catch (error) {
      console.error(error);
    }
    return [];
  });

  return { students };
}

export default function Page() {
  const { students } = useRouteData<typeof routeData>();

  return (
    <ul>
      <For each={students()}>
        {(student) => <li>{student.name}</li>}
      </For>
    </ul>
  );
}