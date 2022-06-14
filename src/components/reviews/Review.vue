<template>
  <!-- PC -->
  <div class="content" v-show="!store.mobile">
    <div class="row">
      <img :src="content.image" alt="">
    </div>
    <div class="row">
      <div class="name">{{content.name}}</div>
      <div class="social">
        <a :href="content.social" onclick="" target="_blank" rel="noopener noreferrer">{{content.social}}</a>
      </div>
      <div class="review">{{content.review}}</div>
      <div class="checkout">
        <router-link :to="{name: 'portfolio', params: {page: content.page, data: content.data}}">Дивитися</router-link>
        <fa icon="arrow-right"/>
      </div>
    </div>
  </div>

  <!-- MOBILE -->
  <div class="content" v-show="store.mobile">
    <div class="row">
      <div class="col">
        <img :src="content.image" alt="">
      </div>
      <div class="col">
        <div class="name">{{content.name}}</div>
        <div class="social">
          <a :href="content.social" onclick="" target="_blank" rel="noopener noreferrer">{{content.social}}</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="review">{{content.review}}</div>
      <div class="checkout">
        <router-link :to="{name: 'portfolio', params: {page: content.page, data: content.data}}">Дивитися</router-link>
        <fa icon="arrow-right"/>
      </div>
    </div>
  </div>

</template>

<script>
import { store } from "../../store"

export default {
  data() {
    return {
      store
    }
  },
  props: {
    content: Object
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 5vw;
  display: flex;
  letter-spacing: normal;
  color: #373737;

  @media(max-width:700px) {
    flex-direction: column;
    margin-top: 12vw;
  }

  a {
    color: #373737;
  }

  .name {
    font-family: 'Forum';
    font-size: 200%;
    margin-bottom: 1vw;
    @media(max-width:700px) {
      font-size: 150%;
    }
  }

  .social {
    margin-bottom: 1vw;
    a {
      color:#373737;
      font-size: 90%;
      font-weight: 300;
      @media(max-width:700px){
        font-size: 3vw;
      }
    }
  }

  .review {
    font-size: 1vw;
    line-height: 1.4;
    margin-bottom: 1vw;
    @media(max-width:700px){
      font-size: 100%;
      margin-top: 2vw;
    }
  }


  .checkout {
    font-size: 100%;
    svg {
      font-size: 80%;
      color:#373737;
      margin-left: 4px;
      @media(max-width:700px){
        font-size: 100%;
      }
    }
    @media(max-width:700px){
      font-size: 100%;
      margin-top: 5vw;
    }
  }

  .col:nth-child(2){
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 10%;
  }

  .row:first-child {
    width: max-content;
    margin-right: 2vw;

    @media(max-width:700px){
      display: flex;
    }    
    img {
      height: 100%;
      max-height: 150px;  
      width: auto;
      border-radius: 50%;
      object-fit: cover;
      @media(max-width:700px){
        width: 50px;
        height: 50px;
      }
    }
  }
  .row:nth-child(2) {
    width: 100%;
  }
}

</style>