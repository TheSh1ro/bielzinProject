<template>
  <div id="main-background">
    <main id="main">
      <div class="container-profile">
        <img src="../assets/img/pfp.jpg" alt="Image" class="profile-picture" />
        <h1 class="profile-title">@thesh1ro</h1>
        <div class="profile-text">
          <p>Fullstack Developer</p>
          <p>Santa Catarina - Brazil</p>
        </div>
      </div>

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
              <img
                src="../assets/img/arrows/down-arrow.png"
                alt="down-arrow"
                v-if="menu.isExpanded"
              />
              <img src="../assets/img/arrows/right-arrow.png" alt="right-arrow" v-else />
            </li>

            <template v-if="menu.isExpanded">
              <li class="menu-item" v-for="option in menu.options" :key="option.label">
                <p>{{ option.label }}</p>
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      menus: {
        lol: {
          label: 'League of Legends',
          isExpanded: false,
          options: [
            { label: 'EloJob', path: '/lol/services' },
            { label: 'Ranking', path: '/lol/ranking' },
            { label: 'Guides', path: '/lol/guide' },
          ],
        },
        storylines: {
          label: 'Animated storyline',
          isExpanded: false,
          options: [
            { label: 'Programming', path: '/storyline/portfolio' },
            { label: 'Gaming', path: '/storyline/gaming' },
          ],
        },
        social: {
          label: 'Social Media',
          isExpanded: false,
          options: [
            { label: 'Twitter', path: null, url: 'https://x.com/thesh1ro_' },
            { label: 'Twitch', path: null, url: 'https://www.twitch.tv/' },
          ],
        },
      },
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    toggleMenuStatus(clickedMenu) {
      const firstState = clickedMenu.isExpanded

      Object.keys(this.menus).forEach((key) => {
        this.menus[key].isExpanded = false
      })

      clickedMenu.isExpanded = !firstState
    },
  },
}
</script>

<style scoped>
#main-background {
  background-image: url(../assets/img/home-background.gif);
  background-size: cover;
  background-position: auto;
}
#main {
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  min-height: 100vh;
  padding: 8vh 8vw;
  gap: 8vh 8vw;

  .container-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 0.75rem;

    .profile-picture {
      height: 150px;
      border-radius: 50px;
      outline: 2px solid #404b62;
      opacity: 0.8;
      transition: all 0.05s ease-in;

      &:hover {
        border-radius: 25px;
      }
    }

    .profile-title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .profile-text {
      display: flex;
      align-items: center;
      flex-direction: column;

      p {
        font-size: 1em;
        text-align: center;
      }
    }
  }

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

        transition: height 0.25s ease-out;
        overflow: hidden;

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
            filter: invert(1) opacity(0.6);
          }

          &:hover {
            background-color: rgba(50, 50, 150, 0.25);
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
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
