# Svelte Chrome extension for content scripts

This is a repository for building content scripts with Svelte. It was inspired by [this repository](https://github.com/yosevu/react-content-script).

### Clone the repository

```sh
git clone https://github.com/kenshiro41/svelte-content-scripts
```

### Install dependencies

```sh
pnpm i
```

### Build the extension

```sh
pnpm build
```

### Loading the extension

1. Open your browser's extension page ([chrome://extension](chrome://extension)).
2. Enable developer mode
3. Click on "Load unpacked" and move to your cloned directory and select dist directory.
