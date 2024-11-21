<template>
  <div class="container-navigation">
    <nav class="nav">
      <ul
        class="menu-group"
        v-for="menu in menus"
        :key="menu.label"
        :style="{
          height: menu.isExpanded ? menu.options.length * 60 + 60 + 'px' : 60 + 'px',
        }"
        :class="{ expandedMenu: menu.isExpanded }"
      >
        <li class="menu-item" @click="toggleMenuStatus(menu)">
          <p>{{ menu.label }}</p>
          <img src="@/assets/img/arrows/down-arrow.png" alt="down-arrow" v-if="menu.isExpanded" />
          <img src="@/assets/img/arrows/right-arrow.png" alt="right-arrow" v-else />
        </li>

        <template v-if="menu.isExpanded">
          <li class="menu-item" v-for="option in menu.options" :key="option.label">
            <p>{{ option.label }}</p>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          label: 'League of Legends',
          isExpanded: false,
          options: [
            { label: 'EloJob', path: '/lol/services' },
            { label: 'Ranking', path: '/lol/ranking' },
            { label: 'Guides', path: '/lol/guide' },
          ],
        },
        {
          label: 'Animated storyline',
          isExpanded: false,
          options: [
            { label: 'Programming', path: '/storyline/portfolio' },
            { label: 'Gaming', path: '/storyline/gaming' },
          ],
        },
        {
          label: 'Social Media',
          isExpanded: false,
          options: [
            { label: 'Twitter', path: null, url: 'https://x.com/thesh1ro_' },
            { label: 'Twitch', path: null, url: 'https://www.twitch.tv/' },
          ],
        },
      ],
      intervalId: null, // Para armazenar o ID do intervalo
    }
  },
  created() {},
  onMounted() {},
  onUnmounted() {
    this.intervalId = null
  },
  computed: {},
  watch: {
    menus: {
      handler(newValue) {
        const expandedMenu = newValue.some((menu) => menu.isExpanded)
        if (expandedMenu) {
          this.stopTimer()
          this.startTimer()
        } else if (!expandedMenu && this.intervalId) {
          this.stopTimer()
        }
      },
      deep: true, // Para observar mudanças nas propriedades internas
    },
  },

  methods: {
    startTimer() {
      // Inicia o intervalo de fechamento dos menus
      this.intervalId = setInterval(() => {
        this.closeAllMenus()
      }, 3000)
    },

    stopTimer() {
      // Limpa o intervalo existente
      clearInterval(this.intervalId)
      this.intervalId = null
    },

    closeAllMenus() {
      // Fecha todos os menus
      this.menus.forEach((menu) => {
        menu.isExpanded = false
      })
    },

    toggleMenuStatus(clickedMenu) {
      this.closeAllMenus() // Fecha todos os menus antes de abrir o selecionado
      clickedMenu.isExpanded = !clickedMenu.isExpanded // Alterna o estado do menu clicado
    },
  },
}
</script>

<style scoped>
.container-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  nav {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;

    .menu-group {
      display: flex;
      flex-direction: column;
      border: 1px solid #404b62;
      border-radius: 10px;
      max-width: 400px;
      width: 100%;
      margin-inline: auto;

      transition: all 0.25s ease-out;
      overflow: hidden;

      &:hover {
        border-color: rgba(0, 255, 255, 0.25);
      }

      .menu-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 60px;
        cursor: pointer;
        transition: all 0.1s;

        img {
          position: absolute;
          right: 10px;
          height: 50px;
          filter: invert(1) opacity(0.4) sepia(1) saturate(100) hue-rotate(110deg);
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
        &:first-of-type {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        &:last-of-type {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
    }

    .expandedMenu {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
