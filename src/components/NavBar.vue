<template>
  <header>
    <div class="__container">
      <nav>
        <div class="logo">
          <img src="@/assets/logo.png" alt="Логотип портфоліо" />
        </div>
        <ul>
          <li><a href="">Головна</a></li>
          <li>
            <a href="" class="portfolio">Портфоліо</a>
            <font-awesome-icon icon="angle-down" class="angle-down" />
            <div class="submenu">
              <ul class="submenu-list">
                <li class="menu-list"><a href="#">Портрет</a></li>
                <li class="menu-list"><a href="#">Репортаж</a></li>
                <li class="menu-list"><a href="#">Лавсторі</a></li>
              </ul>
            </div>
          </li>
          <li><a href="">Послуги</a></li>
          <li><a href="">Відгуки</a></li>
          <li><a href="">Контакти</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="scss" scoped>

header {
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.2s ease all;
  min-height: 2vw;
  
  nav {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.2s ease all;
    text-transform: uppercase;
    justify-content: space-between;

    img {
      height: 1%;
      max-height: 36px;
    }

    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;  
      align-items: center;

      li {
        font-size: 84%;
        padding-left: 2vw;
        display: inline-block;

        &:nth-child(2):hover > .angle-down {
          color: #000;
          transform: rotateX(180deg);
        }

        &:nth-child(2):hover > .submenu {
          visibility: visible;
          opacity: 1;
          transform: translateX(-1vw) translateY(0vh);
        }

        .angle-down {
          color: rgb(65, 65, 65);
          margin-left: 6px;
          transition: all 0.2s ease-in-out;
        }
      }

      a {
        font-weight: 400;
        color: rgb(65, 65, 65);
        transition: all 0.2s;

        &:hover {
          color: #000;
        }

      }
    }

    .submenu {
      position: fixed;
      visibility: hidden;
      opacity: 0;
      transition: all .2s ease-in-out;
      transform: translateX(-1vw) translateY(-2vh);
  
      .submenu-list {
        background-color: #fff;
        border-radius: 8px;
        margin-top: 3vh;
        display: flex;
        flex-direction: column; 
        align-items: flex-start;
        padding: 1.5vw;
        box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2);

        li {
          padding: 0;
          text-transform: none;
          font-size: 94%;
          font-weight:300;
          padding-right: 1vw;

          &:not(:first-child) {
            padding-top: 3vh;
          }
        }
      }
    }
  }
}
</style>
