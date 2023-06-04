import App from './App.svelte';
import './app.css';

const body = document.querySelector('body');
const root = document.createElement('div');

const id = Math.random().toString(36).slice(-10);
root.id = id;

body?.prepend(root);

const app = new App({
  target: document.getElementById(id)!,
});

export default app;
