import { type APIEvent, json } from 'solid-start';

const handler = async (args: APIEvent) => {
  const {
    params,
    request: { method, headers },
  } = args;
  return json({
    msg: `Hello Mr/Miss ${params.name}`,
    method,
    headers: Object.fromEntries(headers.entries()),
  });
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
