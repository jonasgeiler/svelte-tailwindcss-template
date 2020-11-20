# svelte-tailwindcss template

### Based on [sveltejs/template](https://github.com/sveltejs/template)

> For usage, instructions, etc. look there!

### Uses:

- `svelte` (NOT `svelte/sapper`)
    - `svelte-preprocess` - For PostCSS inside .svelte files
- `rollup` - For building and bundling
    - `rollup-plugin-copy` - For copying all files from `static` to `dist`
- `postcss` - For processing CSS
    - `tailwindcss`
    - `autoprefixer`
    - `postcss-import`
- `inline-critical` - CLI for inlining critical CSS into index.html (critical CSS = `src/styles/global.css`)

### Used in:

- [Skayo/Sudoku](https://github.com/Skayo/Sudoku)