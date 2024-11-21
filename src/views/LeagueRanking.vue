<template>
  <main id="main">
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">Ranqueada Solo/Duo</li>
        <li class="navbar-item">Ranqueada Flexível</li>
        <li class="navbar-item">Level</li>
        <li class="navbar-item">Partidas</li>
      </ul>
    </nav>
    <div class="content">
      <div v-for="x in 20" class="card" :key="x">
        <div class="account-image">
          <img src="@/assets/img/pfp.jpg" alt="profile-picture" />
        </div>
        <div class="account-details">
          <h1>ABCDABCDABCDABCD#RIOTA</h1>
          <p>Account@Level</p>
          <p>Soloq@Elo</p>
          <p>Flex@Elo</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: [],
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
#main {
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);

  .navbar {
    margin-bottom: 0.5rem;
    background-color: rgb(116, 22, 22);
    border-radius: 10px 10px 0px 0px;

    .navbar-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      .navbar-item {
        padding-block: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;

        &:first-of-type {
          border-top-left-radius: 10px;
        }
        &:last-of-type {
          border-top-right-radius: 10px;
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.25);
        }
      }
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 1rem;
  }

  .card {
    height: 120px;

    display: flex;
    gap: 1.5rem;

    background-color: rgb(209, 209, 183);
    color: black;
    padding: 10px;
    border-radius: 5px;

    .account-image {
      height: 100%;

      img {
        height: 100%;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
    }

    .account-details {
      h1 {
        font-size: 1.25rem;
        font-weight: bold;
      }
    }
  }
}
</style>
