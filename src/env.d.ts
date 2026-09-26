/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.md?raw' {
  const src: string;
  export default src;
}
