<template>

</template>

<script>

export default {
  data() {
    return {
      page: String,
      content: {
        portrait: {
          buttons: [
            {
              title: "Николь & На світанку",
              photo: "@/assets/portfolio/portrait/Николь & На світанку/1.JPG"
            },
            {
              title: "Катя & Задзеркалля",
              photo: "@/assets/portfolio/portrait/Катя & Задзеркалля/1.JPG"
            },
            {
              title: "Аліса & Саржин яр",
              photo: "@/assets/portfolio/portrait/Аліса & Саржин яр/1.JPG"
            },
          ]
        } 
      }
    }
  },
  watch: {
    $route(to) {
      this.page = to.params.page;
    }
  }
}
</script>

<style>

</style>