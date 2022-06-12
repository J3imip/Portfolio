<template>
  <div class="wrapper">
    <img v-show="store.mobile" src="@/assets/background.jpg" alt="">
    <div class="__container">
      <div class="content">
        <div class="row">
          <div class="title">ПРАЙС НА ЗЙОМКУ</div>
          <div class="description">Послуги</div>
          <div class="checkout">
            <router-link :to="{name: 'services'}">перейти</router-link>
            <fa icon="arrow-right" class="arrow-right"/>
          </div>
        </div>
        <div class="row">
          <div class="title">ПРИКЛАДИ ЗЙОМОК</div>
          <div class="description">Портфоліо</div>
          <div class="checkout">
            <router-link :to="{name: 'portfolio', params: {page: 'portrait', data: 'main'}}">перейти</router-link>
            <fa icon="arrow-right" class="arrow-right" />
          </div>
        </div>
        <div class="row">
          <div class="title">ТЕПЛІ СЛОВА</div>
          <div class="description">Відгуки</div>
          <div class="checkout">
            <router-link :to="{name: 'reviews'}">перейти</router-link>
            <fa icon="arrow-right" class="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../store"

export default {
  data() { 
    return{
      store
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: rgb(245, 245, 245);
  margin-top: 75vh;
  padding: 6vw 0;

  @media(max-width:700px) {
    margin-top: 0;
  }

  img {
    width: 100vw;
    height: auto;
  }

  .content {
    display: flex;
    flex-direction: row;
    width: 100%;

    @media(max-width:700px) {
      flex-direction: column;
    }

    .row {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      width: 100%;
      @media(max-width:700px) {
        margin-top: 12vw;
      }

      div:not(:first-child) {
        margin-top: 1vw;
        @media(max-width:700px) {
          margin-top: 3vw;
        }
      }

      .title {
        font-size: 1vw;
        color: #373737;
        @media(max-width:700px) {
          font-size: 3.8vw;
        }
      }

      .description {
        font-family: 'Forum';
        font-size: 2.5vw;

        @media(max-width:700px) {
          font-size: 10vw;
        }
      }

      .checkout {
        border-bottom: 1px solid #373737;
        a {
          color: #373737;
          text-transform: capitalize;
        }

        svg {
          color: #373737;
          margin-left: 4px;
          font-size: 0.8vw;
          @media(max-width:700px) {
            font-size: 2vw;
          }
        }
      }

    }
  }
}

</style>