import App from "./App.vue";
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngleDown
} from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);
//import router from "./router";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
//app.use(router);
app.mount("#app");
