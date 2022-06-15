<template>
  <div class="main">
    <nav-bar/>
    <router-view/>
    <footer-c/>
    <scroll-button/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { store } from "./store.js";
import FooterC from "./components/FooterC.vue";
import ScrollButton from "./components/ScrollButton.vue";

export default {
  name: "app",
  components: {
    NavBar,
    FooterC,
    ScrollButton
},
  data() {
    return {
      mobile: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 700) {
        store.mobile = true;
        return;
      }
      store.mobile = false;
      return;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Forum&family=Roboto:wght@100;300;400;700&display=swap');
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  overflow-x: hidden;
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body {
  font-family: Roboto;
  letter-spacing: 1px;
  background-color: #000;
  background-image: url('@/assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: center;

  @media(max-width:700px) {
    background-image: none;
  }
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

.main {
  // display: flex;
  // justify-content: center;
  overflow-x: hidden;
}

.__container {
  box-sizing: border-box;
  padding: 0px 16px;
  margin: 0 auto;
  max-width: 1300px;

  @media(max-width:700px) {
    padding: 0px 24px;
  }
}
</style>
