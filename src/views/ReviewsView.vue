<template>
  <div class="wrapper" @keydown.esc="modalActive=false">
    <div class="__container">
      <review v-for="(item, num) in reviews" :key="num" :content="item"/>

      <div class="comment">
        <button
          @click="toggleModal()"
        >Залишити відгук</button>
      </div>

    </div>
  </div>

  <modal v-if="modalActive" :toggleModal="toggleModal" />
</template>

<script>
import Review from "../components/reviews/Review.vue";
import Modal from "../components/reviews/Modal.vue";

export default {
  data() {
    return {
      modalActive: false,
      reviews: [
        {
          image: "/src/assets/reviews/3.JPG",
          name: "Денис і влада",
          page: "lovestory",
          data: "Денис і влада",
          social: "https://instagram.com/denisadamskiii/",
          review: "Хто бажає красивих фото, приємну атмосферу та море емоцій? Ти? Тоді тобі до Макса!! :) У виборі фотографа у нас тепер немає сумнівів! Він той, до кого хочеться йти та робити пам’ятні знімки. Дякую тобі за те, що вкладаєш у фото душу! З вдячністю, твої Влада та Денис."
        },
        {
          image: "/src/assets/reviews/2.JPG",
          name: "Аліса",
          page: "portrait",
          data: "Аліса & Саржин яр",
          social: "https://instagram.com/al_uzlova/",
          review: "Працювати із Максимом одне задоволення! І пожартувати, і посміятися, і поговорити про життя, і отримати чудові фотографії, звичайно. :) Рідко зустрінеш фотографа, який так круто ловить потрібний кадр, емоцію, світло – та взагалі все. Ця фотосесія показала мені мене з іншого боку, і я дуже рада, що мені дісталася можливість попрацювати з Максимом!"
        },
        {
          image: "/src/assets/reviews/1.JPG",
          name: "Денис",
          page: "reportage",
          data: "Барбер-фест",
          social: "https://instagram.com/denwebart/",
          review: "Шикарна фотосесія! Я в захваті! Все дуже сподобалося, фотограф Максим – справжній професіонал. Допомагав позувати та видати потрібні емоції! Велике вам дякую. Обов’язково ще до вас звернуся і радитиму друзям і знайомим.))"
        }
      ]
    }
  },  
  components: { Review, Modal },
  methods: {
    toggleModal() {
      this.modalActive = !this.modalActive;
    }
  },
  watch: {
    modalActive(modal) {
      if(modal) {
        document.documentElement.style.overflow = 'hidden';
        return
      }

      document.documentElement.style.overflow = 'auto';
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
  padding-top: 70px;
}
.comment {
  width: 100%;
  display: flex;
  justify-content: center;
}
.comment button {
  margin-top: 4vw;
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
    padding: 3vw 6vw;
  }

  &:hover,
  &:focus {
    background-color: #2b2b2b35;
    color:#2B2B2B;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2);
  }
}
</style>