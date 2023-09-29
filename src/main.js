import { createApp } from "vue";
import App from "./App.vue";
import BtnEdit from "./components/BtnEdit.vue";
const app = createApp(App);

app.component("BtnEdit", BtnEdit);

app.mount("#app");
