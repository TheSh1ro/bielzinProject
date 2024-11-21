<template>
  <div class="container-profile">
    <img src="@/assets/img/pfp.jpg" alt="Image" class="profile-picture" />
    <h1 class="profile-title">@thesh1ro</h1>
    <div class="profile-text">
      <p>Fullstack Developer</p>
      <p>Santa Catarina - Brazil</p>
    </div>
  </div>
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
    transition: all 0.1s ease-in;

    &:hover {
      outline-color: rgba(255, 255, 255, 0.25);
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
</style>
