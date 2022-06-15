<template>
  <div 
    class="wrapper"
    :style="{
      height: current ? `60vh` : `86vh`
    }"
  >
    <div class="content">
      <router-link 
        class="photo-session" 
        v-for="(item, num) in currentContent.buttons" 
        :key="num"
        :style="{
          backgroundImage: `url('${item.photo}')`,
        }"
        :to="{
          name: `portfolio`,
          params: {
            page,
            data: item.title
          }
        }"
        v-show="current!=item.title"
      >
        {{item.title}}
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentContent: Object,
      page: String,
      content: {
        portrait: {
          buttons: [
            {
              title: "Николь & На світанку",
              photo: "/src/assets/portfolio/portrait/Николь & На світанку/1.JPG"
            },
            {
              title: "Катя & Задзеркалля",
              photo: "/src/assets/portfolio/portrait/Катя & Задзеркалля/1.JPG"
            },
            {
              title: "Аліса & Саржин яр",
              photo: "/src/assets/portfolio/portrait/Аліса & Саржин яр/1.JPG"
            }
          ]
        },
        reportage: {
          buttons: [
            {
              title: "Кар’єр Дружба",
              photo: "/src/assets/portfolio/reportage/Кар’єр Дружба/1.JPG"
            },
            {
              title: "Барбер-фест",
              photo: "/src/assets/portfolio/reportage/Барбер-фест/1.JPG"
            }
          ]
        },
        lovestory: {
          buttons: [
            {
              title: "Денис і Влада",
              photo: "/src/assets/portfolio/lovestory/Денис і Влада/1.JPG"
            }
          ]
        }
      }
    }
  },
  props: {
    current: String
  },
  mounted() {
    this.page = this.$route.params.page;
    this.currentContent = this.content[this.$route.params.page];
  },
  watch: {
    $route(to) {
      this.page = to.params.page;
      this.currentContent = this.content[to.params.page];
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media(max-width:700px) {
    grid-template-columns: 1fr;
  }
  
  .photo-session {
    width: 100%;
    height: 25vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: 50%;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4);
    transition: all .5s ease;

    @media(max-width:700px) {
      height: 30vh;
    }

    &:hover {
      box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
      cursor: pointer;
      background-size: 110%;
      background-position-x: 50%;
    }
  }
}
</style>