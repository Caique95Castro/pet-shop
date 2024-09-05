<template>
  <div id="app">
    <button @click="toggleMenu" class="hamburger-button" v-if="isMobile">
      &#9776;
    </button>
    <div class="header-container">
      <img class="logo-image" src="./assets/img/logo.png" alt="" />
      <nav :class="{ open: isMenuOpen }">
        <router-link to="/" @click="closeMenu">Home</router-link>
        <router-link to="/about" @click="closeMenu">Sobre Nós</router-link>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Serviços
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="/cirurgia-em-animais"
              >Cirurgias em Animais</a
            >
            <a class="dropdown-item" href="/ortopedia-veterinaria"
              >Ortopedia Veterinária</a
            >
            <a
              class="dropdown-item"
              href="/fisioterapia-e-acupuntura-veterinaria"
              >Fisioterapia e Acupuntura Veterinária</a
            >
            <a class="dropdown-item" href="/laboratorio-veterinario"
              >Laboratório Veterinário</a
            >
            <a class="dropdown-item" href="/internacao-veterinaria"
              >Internação Veterinária</a
            >
          </div>
        </div>
        <router-link to="/especialidades" @click="closeMenu"
          >Especialidades</router-link
        >
        <router-link to="#" @click="closeMenu">Contato</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isMobile: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    checkScreenWidth() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: green;
  z-index: 100;
}

.hamburger-button {
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
  display: none;
}
.empresa {
  color: black;
  z-index: 100;
  margin-right: 50px;
}
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 200px;
  padding: 0 10px;
  background-color: transparent;
  z-index: 1000;
}
.logo-image {
  width: 200px;
  height: 200px;
  z-index: 1000;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  gap: 20px;

  a {
    font-weight: bold;
    color: #ffd9a0;
    text-decoration: none;
    z-index: 100;

    &.router-link-exact-active,
    .dropdown-toggle-exact-active {
      color: #e6a23c !important;
    }
  }

  a:hover {
    color: #e6a23c;
    text-decoration: none;
  }
  .btn-secondary {
    background-color: transparent !important;
    border: none;
    color: #ffd9a0;
    font-weight: bold;
    z-index: 100;
  }
  .btn-secondary:hover {
    color: #e6a23c;
  }
  .dropdown-toggle {
    color: #ffd9a0 !important;
    background-color: transparent !important;
    border-color: none !important;
  }
  .dropdown-toggle:hover {
    color: #e6a23c !important;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: white;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    display: none;

    &.open {
      transform: translateX(0);
      display: flex;
    }

    a {
      padding: 20px;
      width: 100%;
      text-align: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .hamburger-button {
    display: block;
  }
}
</style>
