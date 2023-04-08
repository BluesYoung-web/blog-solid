/*
 * @Author: zhangyang
 * @Date: 2022-10-05 15:37:57
 * @LastEditTime: 2023-04-08 17:37:33
 * @Description: 音乐播放器
 */
import { MUSIC } from '@/config';
import './Music.css';
import 'aplayer/dist/APlayer.min.css';
import { isServer } from 'solid-js/web';
export default function Music() {
  const init = async () => {
    // @ts-ignore
    const APlayer = await (await import('aplayer')).default;

    const res = await fetch(
      `${MUSIC.api}?server=${MUSIC.server}&type=${MUSIC.type}&id=${MUSIC.id}&r=${Math.random()}`,
    );
    const conf = await res.json();
    const mountTarget = document.querySelector('#young-player');
    mountTarget &&
      new APlayer({
        container: mountTarget,
        fixed: true,
        mini: true,
        audio: conf,
        lrcType: 3,
      });
  };

  !isServer && init();

  return (
    <div id="young-player" class="text-gray-800" />
  );
}
