<template>
  <div id="main-background">
    <main id="main">
      <HomeProfile />
      <HomeNavigation />
    </main>
  </div>
</template>

<script>
import HomeProfile from '@/components/Home/HomeProfile.vue'
import HomeNavigation from '@/components/Home/HomeNavigation.vue'

export default {
  components: { HomeProfile, HomeNavigation },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
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
}
</style>
