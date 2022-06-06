<template>
  <div class="modal">
    <div class="container">
      <div class="col">
        <div class="title" v-show="!store.mobile">Ваш відгук</div>
        <input type="text" placeholder="Ваше ім'я" class="name">
        <input type="text" placeholder="Посилання на вашу сторінку в соціальній мережі" class="social">
        <textarea type="text" rows="7" placeholder="Ваш відгук" class="review"/>
        <a href="#" class="send" @click="reloadPage">відправити</a>
      </div>
      <div class="col">
        <div class="photo">
          <fa icon="camera" class="camera"/>
        </div>
        <div class="select">Обрати фото</div>
      </div>
      <div class="title" v-show="store.mobile">Ваш відгук</div>
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
export default {
  data() {
    return {
      store
    }
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  @media(max-width:700px){
    font-size: 200%;
  }
}
.modal{
  color: #373737;
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 46vw;
    height: max-content;
    background-color: #fff;
    border-radius: 12px;
    padding: 6vw 8vw;
    
    @media(max-width:700px) {
      flex-direction: column-reverse;
      width: 70vw;
      height: 60vh;
    }

    .col:first-child {
      display: flex;
      flex-direction: column; 
      width: 60%;

      @media(max-width:700px) {
        width:100%
      }

      .title {
        font-size: 3vw;
        padding-bottom: 2vw;
      }
      input, textarea {
        border: none;
        border-bottom: 1px solid rgb(198, 198, 198);
        padding: 1vw 0;
        margin-top: 1vw;
        outline: none;
        &::placeholder,
        &::-webkit-input-placeholder {
          color: #a4a4a4;
          font-family: 'Roboto';
        }
        resize:none;
      }
    }
  }
  .send {
    margin-top: 1vw;
    width: max-content;
    padding: 1.5vw 4vw;
    border-radius: 50px;
    border: none;
    background-color: #2B2B2B;
    color: #fff;
    text-transform: uppercase;
    transition: all .2s ease;
    cursor: pointer;
    outline: none;

    @media(max-width:700px) {
      margin: 0 auto;
      margin-top: 4vw;
      padding: 3vw 6vw;
    }

    &:hover,
    &:focus {
      background-color: #2b2b2b35;
      color:#2B2B2B;
      box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2);
    }
  }
  .col:nth-child(2) {
    display: flex;
    flex-direction: column;
    @media(max-width:700px) {
      align-items: center;
      justify-content: center;
    }

    .photo {
      height: 10vw;
      width: 10vw;
      background-color: rgb(240, 240, 240);
      border-radius: 50%;
      padding: 2vw;
      display: flex;
      align-items: center;
      justify-content: center;

      @media(max-width:700px) {
        width: 30vw;
        height: 30vw;
      }
      
      svg {
        color:#a7a7a7;
        font-size: 5vw;
        @media(max-width:700px) {
          font-size: 10vw;
        }
      }
    }
    .select {
      margin-top: 2vw;
      text-align: center;
      @media(max-width:700px) {
        font-size: 5vw;
      }
    }
  }
}

</style>