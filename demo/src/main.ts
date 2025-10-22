import { mount } from "svelte";
import App from "./App.svelte";
import "./css/normalize.css";
import "./css/skeleton.css";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
