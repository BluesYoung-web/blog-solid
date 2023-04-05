/*
 * @Author: zhangyang
 * @Date: 2022-10-05 15:13:05
 * @LastEditTime: 2023-04-05 18:23:57
 * @Description: 一言
 */
import { createSignal } from 'solid-js';
import { ONE_SAY } from '@/config';

interface OneSay {
  commit_from: string;
  created_at: string;
  creator: string;
  creator_uid: number;
  from: string | null;
  from_who: string | null;
  hitokoto: string;
  id: number;
  length: number;
  reviewer: number;
  type: string;
  uuid: string;
}

async function copyToClipboard(text: string) {
  try {
    // @ts-ignore
    await navigator.permissions.query({ name: 'clipboard-write' });
    await navigator.clipboard.writeText(text);
    console.log(`Copied "${text}" to clipboard`);
  } catch (err) {
    console.error('Failed to copy text:', err);

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    // Select textarea and copy its contents to clipboard
    textarea.focus();
    textarea.setSelectionRange(0, textarea.value.length);

    try {
      document.execCommand('copy');
      console.log(`Copied "${text}" to clipboard`);
    } catch (err2: any) {
      console.error('Fallback failed:', err2);
      throw new Error('Unable to copy text: ' + err2.message);
    }

    document.body.removeChild(textarea);
  }
}

export default function OneSay() {
  const [sayObj, setSayObj] = createSignal<OneSay>();

  const refresh = async () => {
    const say = await (await fetch(ONE_SAY.refresh)).json() as OneSay;
    setSayObj(say);
  };
  const goDetail = () => {
    const a = document.createElement('a');
    a.setAttribute('target', '_blank');
    a.setAttribute('href', `${ONE_SAY.detail}${sayObj()?.uuid}`);
    a.click();
  };
  const eventDiapatcher = (e: MouseEvent) => {
    switch (e.button) {
      case 0:
        refresh();
        break;
      case 1:
        sayObj()?.hitokoto && copyToClipboard(sayObj()!.hitokoto);
        break;
      case 2:
        goDetail();
        break;
      default:
        refresh();
        break;
    }
  };

  refresh();
  return (
    <div
      class="text-xl lg:text-2xl text-center hover:cursor-pointer"
      title="左键刷新，中键复制，右键跳转详情"
      onClick={eventDiapatcher}
      onAuxClick={eventDiapatcher}
      onContextMenu={(e: { preventDefault: () => any }) => e.preventDefault()}
    >
      <p>{sayObj()?.hitokoto ?? ''}</p>
      <p>
        <span style={{ display: sayObj() ? 'inline' : 'none' }}>出自：</span>
        {`
          ${sayObj()?.from ?? ''}
          ${sayObj()?.from_who ? ` —— ${sayObj()?.from_who}` : ''}
        `}
      </p>
    </div>
  );
};
