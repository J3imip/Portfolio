<template>
  <nav ref="navbar">
    <div class="__container wrapper">
      
      <!-- LOGO -->
      <div class="logo">
        <router-link :to="{name: 'home'}" onclick="" class="logo-link">
          <img src="@/assets/logo.png" alt="">
        </router-link>
      </div>

      <!-- BARS ICON -->
      <div :class='{"bars": true, "active": mobileNav}' v-show="store.mobile" @click="toggleMobileNav">
        <div class="bar"></div>
      </div>

      <!-- MENU -->
      <transition name="menu">
        <ul v-show="!store.mobile || mobileNav" class="menu">
          <li><router-link @click="toggleMobileNav" :to="{name: 'home'}">Головна</router-link></li>
          <li class="portfolio">
            
            <span class="portfolio-title">Портфоліо</span>
            <fa icon="angle-down" class="angle"/>
            
            <!-- PORTFOLIO SUBMENU -->
            <div class="submenu">
              <ul class="submenu-list">
                <li><router-link @click="toggleMobileNav" :to="{path:'/portfolio/portrait'}" onclick="">Портрет</router-link></li>
                <li><router-link @click="toggleMobileNav" :to="{path:'/portfolio/reportage'}" onclick="">Репортаж</router-link></li>
                <li><router-link @click="toggleMobileNav" :to="{path:'/portfolio/lovestory'}" onclick="">Лавсторі</router-link></li>
              </ul>
            </div>

          </li>
          <li><router-link @click="toggleMobileNav" :to="{name:'services'}">Послуги</router-link></li>
          <li><router-link @click="toggleMobileNav" :to="{name:'reviews'}">Відгуки</router-link></li>
          <li><router-link @click="toggleMobileNav" :to="{name:'contacts'}">Контакти</router-link></li>

          <li v-show="store.mobile">
            <a href="https://www.instagram.com/portal_in_nature/" onclick="" target="_blank" rel="noopener noreferrer">
              <fa :icon="[ 'fab', 'instagram' ]" class="instagram"/>
            </a>
          </li>
        </ul>
      </transition>
    </div>

  </nav>
</template>

<script>
import { store } from "../store";
export default {
  data() {
    return {
      mobileNav: null,
      store
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-title {
  cursor: pointer;
}
.router-link-active.router-link-exact-active:not(.logo-link) {
  color:#000;
  @media(max-width:700px) {
    border-bottom: 1px solid #000;
  }
}
nav {
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;
}

.wrapper {
  display: flex;
  flex-direction: row;
  padding-top: 12px;
  padding-bottom: 12px;
  align-items: center;
  justify-content: space-between;

  @media(max-width:700px) {
    padding: 20px;
  } 
}

.menu{
  display: flex;
  position: relative;

  @media(max-width:700px) {
    position: fixed;
    flex-direction:column;
    top: 64px;
    left: 0;
    padding: 24px;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    overflow: scroll;
  } 

  li:not(.submenu-list li) {
    &:not(:first-child) {
      margin-left: 2.5vw;
      @media screen and (min-width:1300px) {
        margin-left: 32.5px;
      }

      @media(max-width:700px) {
        margin-left: 0;
        &:not(:first-child) {
          padding-top: 24px;
        }
        &:last-child {
          padding-bottom: 200px !important;
          padding-top: 34px !important;
        }
      }
    }
    &:nth-child(3) {
      padding-top: 0 !important;
    }
  }

  a, .angle, .portfolio-title {
    font-size: 84%;
    text-transform: uppercase;
    color: rgb(90, 90, 90);
    transition: all .2s ease-in-out;
    
    &:hover {
      color: #000;
    }
    @media(max-width:700px) {
      font-size: 130%;
      font-weight: bold;
      color: rgb(63, 63, 63);
      letter-spacing: normal;
    }
  }
}

.angle {
  color: rgb(90, 90, 90);
  margin-left: 4px;
  @media(max-width:700px) {
    display: none;
  }
}

.submenu {
  position: absolute;
  visibility: hidden;
  background-color: rgba(255, 255, 255);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 4% 5%;
  transition: all .2s ease-in-out;
  transform: translateX(-1.2vw) translateY(0vw);
  opacity: 0;

  @media(max-width:700px) {
    visibility: visible;
    opacity:1;
    background-color: transparent;
    position: relative;
    transform: translateX(0px) translateY(0px);
    box-shadow: none;
    padding: 24px;

    a, .portfolio-title {
      font-weight: normal;
    }
  } 

  &:hover > .submenu,
  &:focus > .submenu {
    visibility: visible;
  }

  .submenu-list {
    display: flex;
    flex-direction: column;


    li {
      margin-left: 0;
      padding-right: 24px;
      &:not(:first-child) {
        padding-top: 0.9vw;

        @media screen and (min-width:1300px) {
          padding-top: 12px;
        }

        @media(max-width:700px) {
          padding-top: 18px;
        }
      }

      a, .portfolio-title {
        text-transform: capitalize;
      }
    }
  }
}

.logo {
  img {
    width: 2.5vw;
    max-width: 32.5px;
    height: auto;

    @media(max-width:700px) {
      width: 10vw;
    }
  }
}

.portfolio {
  &:hover > .submenu,
  &:focus > .submenu {
    visibility: visible;
    transform: translateX(-1.2vw) translateY(0.8vw);
    opacity: 1;

    @media(max-width:700px) {
      transform: translateX(0) translateY(0);
    }
  }

  &:hover > .angle,
  &:focus > .angle{
    transform: rotateX(180deg);
  }
}

.bars {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  .bar {
    height: 2px;
    width:100%;
    background-color: rgb(0, 0, 0);
    box-shadow: 0 2px 5px rgba(47, 47, 47, 0.2);
    border-radius: 5px;
    transition: all .3s ease-in-out;
  }
  .bar::before,
  .bar::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: rgb(0, 0, 0);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(47, 47, 47, 0.2);
    transition: all .3s ease-in-out;
  }

  .bar::before {
    transform: translateY(-10px);
  }
  .bar::after {
    transform: translateY(10px);
  }

  /* ANIMATION */
  &.active .bar {
    background: transparent;
    box-shadow: none;
  }
  &.active .bar::before {
    transform: rotate(45deg);
  }
  &.active .bar::after {
    transform: rotate(-45deg);
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-to,
.menu-leave-from {
  transform: translateX(0px);
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(-60px);
  opacity: 0;
}

.instagram {
  font-size: 28px;
}
</style>