
// This file is used to declare modules for TypeScript to understand Vue files
// and other assets that are not JavaScript or TypeScript files.

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }