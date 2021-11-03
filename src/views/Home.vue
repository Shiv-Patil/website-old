<template>
  <div class="home">
    <div class="parallax-bg"> </div>
    <div class="nav">
      <div class="nav__item box">About</div>
      <div class="nav__item box">Projects</div>
      <div class="nav__item box">Contact</div>
    </div>
    <div class="hero__wrapper">
      <div class="hero box">
        <div class="hero__title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie
          est eu purus consequat, non sodales ante iaculis.
        </div>
        <img src="@/assets/hero__image.png" class="hero__image">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.box {
  border-radius: 10px;
  background-color: rgba(1, 1, 1, .2);
  backdrop-filter: blur(5px) contrast(130%);
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
  -7px -7px 12px 0 rgba(255, 255, 255, 0.4);
}

.home {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 24px;
}

.nav {
  display: flex;
  justify-content: center;
  padding: 5px;
  transform: translateZ(0);
}

.nav__item {
  margin: 8px;
  padding: 8px;
  user-select: none;
  color: #212131;
}

.nav__item:hover {
  cursor: pointer;
}

.nav__item:active {
  box-shadow: none;
}

.parallax-bg {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 3000px;
  background-attachment: scroll;
  background-image: url("../assets/hero__bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateZ(-18px) scale(1.75);
}

.hero__wrapper {
  height: 580px;
  transform: translateZ(0);
}

.hero {
  position: absolute;
  top: 5px;
  left: 40px;
  right: 40px;
  bottom: 40px;
}

.hero__title {
  position: absolute;
  top: 50%;
  left: 65%;
  width: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: xx-large;
  font-weight: bold;
  color: #212131;
}

.hero__image {
  position: absolute;
  height: 50%;
  top: 25%;
  left: 15%;
  border-radius: 50%;
  background: inherit;
  box-shadow: 10px 10px 14px 0 rgba(0, 0, 0, 0.17),
  -5px -5px 8px 0 rgba(200, 200, 200, 0.17);
}
</style>
