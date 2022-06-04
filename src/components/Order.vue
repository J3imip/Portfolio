<template>
  <div class="wrapper">
    <div class="__container">
      <div class="content">
        <div class="title">замовити фотосессію</div>
        <div class="about">
          Я люблю живі, стильні та щирі фотографії, <br v-show="!store.mobile"/> 
          що максимально передають атмосферу та емоції моменту. 
          Мене надихають сміливі, впевнені в собі люди, 
          які звертаються до мене.
        </div>
        <router-link :to="{}" class="order">Замовити</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store"
export default {
  data() {
    return {
      store
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: rgb(245, 245, 245);
  padding: 5vw 0;
  @media(max-width:700px) {
    padding: 10% 0;
  }
}

.content {
  padding: 0 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #373737;
  @media(max-width:700px) {
    padding: 0;
  }
  .title {
    text-transform: uppercase;
    font-size: 1vw;
    margin-bottom: 2vw;
    letter-spacing: normal;
    @media(max-width:700px) {
      font-size: 120%;
      margin-bottom: 5%;
    }
  }
  .about  {
    font-family: 'Forum';
    font-size: 2.3vw;
    text-align: center;

    @media(max-width:700px) {
      font-size: 250%;
      color:#000;
    }
  }
  .order {
    padding: 1.5vw 2vw;
    border: none;
    border-radius: 50px;
    background-color: #373737;
    text-transform: uppercase;
    color:#fff;
    letter-spacing: 2px;
    font-size: 0.9vw;
    margin-top: 2vw;
    transition: all .2s ease;

    @media(max-width:700px) {
      padding: 4% 10%;
      font-size: 100%;
      margin-top: 5%;
    }

    &:hover {
      background-color: #fff;
      color:#373737;
      box-shadow: 0px 0px 20px 8px rgba(0, 0, 0, 0.1);
    }
  }
}

</style>