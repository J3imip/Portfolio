<template>
  <div class="wrapper">
    <div class="__container">
      <header>
        <div class="title">Пакети послуг<br v-show="!store.mobile"/> з фотозйомки</div>
        <div class="description">Будь-який з пакетів можна розширити шляхом додавання знімальної години, збільшення кількості відретушованих фотографій, замовлення виготовлення фотокниги тощо.</div>
      </header>
      <Service 
        v-for="(item, num) in services" 
        :key="num"
        :content="item"
      />
    </div>
  </div>
</template>

<script>
import Service from "../components/services/Service.vue";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      services: [
        {
          title: "Портретна фотозйомка",
          description: "Жіночий, чоловічий портрет, модельні тести. Разом стоворимо красиву та істетичну серію знімків з щирими ємоціями в будьякому місці.",
          image: "/src/assets/portfolio/portrait/Николь & На світанку/2.JPG",
          services: [
            "Час зйомки до 2 годин",
            "70 фотографій",
            "Створення образу",
            "Підбірка локації/студії",
            "Готові фотографії протягом 15 днів",
            "Ретуш усіх великих портретів",
            "Авторська обробка всіх фотографій"
          ],
          price: "1500 грн"
        },
        {
          title: "Фотосессия «Лавсторі»",
          description: "У кожної закоханої пари своя, особлива та  гарна історія кохання. Яку не опишеш і  не передаси словами. Зате фотографія завжди допоможе відобразити ваші емоції та  сфотографувати закохані погляди.",
          image: "/src/assets/portfolio/lovestory/Денис і Влада/6.JPG",
          services: [
            "Час зйомки до 2 годин",
            "70 фотографій",
            "Створення образу",
            "Підбірка локації/студії",
            "Готові фотографії протягом 15 днів",
            "Ретуш усіх великих портретів",
            "Авторська обробка всіх фотографій"
          ],
          price: "2000 грн"
        },
        {
          title: "Репортажна зйомка",
          description: "Репортажна зйомка - це специфічний вид фотографії, що включає портретну, групову, пейзажну, документальну, вуличну, інтер’єрну та інші форми зйомки. Якісний репортаж потребує від мене наявность  професійної інтуїції, швидкої реакції та здатності передбачати перебіг подій.",
          image: "/src/assets/portfolio/reportage/Барбер-фест/2.JPG",
          services: [
            "70-100 фотографій  за годину",
            "Готові фотографії протягом 20 днів",
            "Авторська обробка всіх фотографій"
          ],
          price: "1000грн/год"
        }
      ]
    }
  },
  components: { Service }
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  padding-top: 100px;
  background-color: #fff;
  color: #373737;
  letter-spacing: 0;
  line-height: 1.4;

  @media (max-width:700px) {
    line-height: normal;
  }

  header {
    display: flex;
    @media(max-width:700px) {
      flex-direction: column;
    }
  }

  .title {
    font-family: 'Forum';
    font-size: 2.5vw;
    margin-right: 4vw;
    width: 36%;
    @media(max-width:700px) {
      font-size: 280%;
      width: 100%;
    }
  }

  .description {
    font-size: 1vw;
    width: 60%;
    @media(max-width:700px) {
      font-size: 95%;
      margin-top: 10vw;
    }
  }
}
</style>