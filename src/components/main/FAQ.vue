<template>
  <div class="wrapper">
    <div class="__container">
      <div class="content">
        <div class="row">
          <div class="faq">FAQ</div>
          <div class="title">Відповідаю на ваші питання</div>
          <div class="description">Дякую вам, буду щасливий разом з вами створити нову фотосессію</div>
        </div>
        <div class="row">
          <div 
            :class="{'collapse': true, 'active': isOpened(1)}"
            @click="toggleCollapse(1)"
          >
            <div 
              class="closed"
            >
              Як забронювати фотосесію?
              <fa icon="plus"/>
            </div>
            <transition name="collapse">
              <div
                class="opened"
                v-if="isOpened(1)"
              >
                Бронь дати відбувається після внесення передоплати 
                у розмірі 30% вартості зйомки. 70%, що залишилися,
                оплачуються в день зйомки. Звичайно, до авансу 
                ми погоджуємо всі необхідні деталі: ціну, місце, 
                час, концепцію, бронюємо фотостудію, якщо вона потрібна.
              </div>
            </transition>
          </div>
          <div 
            :class="{'collapse': true, 'active': isOpened(2)}"
            @click="toggleCollapse(2)"
          >
            <div 
              class="closed"
            >
              Чи можна отримати вихідні файли?
              <fa icon="plus"/>
            </div>
            <transition name="collapse">
              <div 
                class="opened"
                v-if="isOpened(2)"
              >
                Я віддаю достатньо вдалих кадрів, тому вам це 
                не знадобиться. Вихідні файли (RAW) не віддаю.
              </div>
            </transition>
          </div>
          <div 
            :class="{'collapse': true, 'active': isOpened(3)}"
            @click="toggleCollapse(3)"
          >
            <div 
              class="closed"
            >
              А якщо дощ?
              <fa icon="plus"/>
            </div>
            <transition name="collapse">
              <div 
                class="opened"
                v-if="isOpened(3)"
              >
                Ми з вами завжди зв’язуємось за день до зйомки та 
                додатково обговорюємо всі деталі. У разі дощу ми 
                можемо змінити концепт зйомки, перенести її до студії 
                або на інший день. Можемо ризикнути і все ж таки провести 
                заплановану зйомку. Під час дощу та відразу після нього 
                зелень стає зовсім іншого, дуже гарного кольору. 
                Від чого фотографії вийдуть більш насиченими та яскравими. 
                Вирішувати завжди вам.
              </div>
            </transition>
          </div>
          <div 
            :class="{'collapse': true, 'active': isOpened(4)}"
            @click="toggleCollapse(4)"
          >
            <div 
              class="closed"
            >
              Чи даєте ви одяг на фотосесію?
              <fa icon="plus"/>
            </div>
            <transition name="collapse">
              <div 
                class="opened"
                v-if="isOpened(4)"
              >
                Одяг на фотосесію я не надаю, але допоможу вам підібрати 
                потрібний варіант із вашого гардеробу, або пораджу оренди.
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapseArray: []
    }
  },
  methods: {
    toggleCollapse(num) {
      if(!this.collapseArray.includes(num)) {
        this.collapseArray.push(num);
      } else {
        this.collapseArray.forEach((item, i)=>{
          if(item == num) this.collapseArray.splice(i, 1);
        });
      }

      console.log(this.collapseArray)
    },
    isOpened(num) {
      if(this.collapseArray.includes(num)) return true;
      else return false;
    }
  } 
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
  padding: 3vw 0;
  @media(max-width:700px) {
    padding: 6vw 0;
  }
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 700px) {
    flex-direction: column;
  }

  
  .faq {
    letter-spacing: 5px;
    color: #373737;
    font-size: 1vw;
    @media(max-width:700px) {
      font-size: 4vw;
    }
  }
  .title {
    font-family: 'Forum';
    letter-spacing: 2px;
    font-size: 2.2vw;
    @media(max-width:700px) {
      font-size: 10vw;
    }
  }
  
  .description {
    color: #373737;
    font-size: 1vw;
    letter-spacing: -0.5px;
    line-height: 1.5;
    @media(max-width:700px) {
      font-size: 4vw;
    }
  }

  .row:first-child {
    div{
      margin-top: 1.5vw;
      @media(max-width:700px) {
        margin-top: 4vw;
      }
    }
  }
  .row:nth-child(2) {
    width: 50%;
    @media(max-width:700px) {
      width: 100%;
      margin-top: 8vw;
    }
  }

  .closed {
    font-weight: bold;
    font-size: 1vw;
    border-bottom: 1px solid rgb(224, 224, 224);
    padding: 1vw 0;
    display: flex;
    justify-content: space-between;
    letter-spacing: normal;
    color: #373737;
    cursor: pointer;

    @media(max-width:700px) {
      font-size: 4vw;
      padding: 4vw 0;
    }

    svg {
      font-weight: 100;
      transition: all .2s ease;
    }
  }
  .opened {
    font-size: 1vw;
    letter-spacing: normal;
    color: #373737;
    padding: 0.5vw 0;
    line-height: 1.5;
    @media(max-width:700px) {
      font-size: 4vw;
    }
  }
  
  .collapse.active svg {
    transform: rotate(45deg);
  }
  .collapse.active .closed {
    border: none;
  }
}
.collapse-leave-active {
  transition: all 0.3s ease;
}

.collapse-enter-to,
.collapse-leave-from {
  max-height: 200px;
  opacity: 1;
}

.collapse-enter-from,
.collapse-leave-to {
  max-height: 0px;
  opacity: 0;
}
</style>