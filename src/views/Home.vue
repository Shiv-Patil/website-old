<template class="home">
  <div id="snackbar" class="snackbar">Discord tag copied</div>
    <img src="@/assets/background__inner.jpg" class="bg__inner" alt="website background"/>
    <div class="nav">
      <router-link class="nav__item box" to="/">Terminal</router-link>
      <div class="nav__item box" @click="aboutButton">About</div>
      <div class="nav__item box" @click="projectsButton">Projects</div>
      <div class="nav__item box" @click="discordSnack">Contact</div>
    </div>
    <div class="hero__wrapper">
      <div class="hero box">
        <div class="hero__title">
          Website work in progress :)
        </div>
        <div class="hero__image__wrapper box">
          <img
            src="@/assets/hero__image.png"
            @load="bgLoaded"
            class="hero__image"
            alt="picture"
          />
        </div>
      </div>
    </div>
  <div id="loader__wrapper"><div class="loader"></div></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    bgLoaded() {
      document.getElementById("loader__wrapper").style.display = "none";
    },
    discordSnack() {
      navigator.clipboard.writeText("KrYmZiN#0311");
      let sn = document.getElementById("snackbar");
      sn.className = "snackbar show";
      setTimeout(() => {sn.className = "snackbar"}, 2000);
    },
    projectsButton() {
      window.location = "https://www.github.com/Shiv-Patil";
    },
    aboutButton() {
      window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  },
  mounted() {},
};
</script>

<style scoped>
.box {
  border-radius: 10px;
  background-color: rgba(94, 104, 121, 0.05);
  box-shadow: 12px 12px 20px rgba(94, 104, 121, 0.4),
    -4px -4px 14px rgba(252, 252, 252, 0.8);
}

.home {
  /*perspective: 24px;*/
  min-width: 300px;
}

.nav {
  display: flex;
  justify-content: center;
  padding: 5px;
  transform: translateZ(0);
}

.nav__item {
  font-size: max(10px, min(4vw, 16px));
  margin: max(4px, min(2vw, 8px));
  padding: max(4px, min(2vw, 8px));
  user-select: none;
  color: #212131;
  text-decoration: none;
  font-family: Poppins,Montserrat,serif;
}

.snackbar {
  display: none;
  min-width: 250px;
  background-color: #efefef;
  color: #333;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  font-weight: bold;
  font-family: Poppins,Montserrat,serif;
}

.snackbar.show {
  display: block;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

.nav__item:hover {
  cursor: pointer;
}

.nav__item:active {
  box-shadow: inset 6px 6px 10px rgba(94, 104, 121, 0.4),
    inset -3px -3px 7px rgba(255, 255, 255, 0.8);
}

.bg__inner {
  position: absolute;
  top: 0;
  left: 0;
  height: max(100%, 1500px);
  width: max(100%, 300px);
}

/*.parallax-bg {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  right: 0;*/
/*  left: 0;*/
/*  height: 2000px;*/
/*  width: 100%;*/
/*  transform: translateZ(-18px) scale(1.75);*/
/*}*/

.hero__wrapper {
  height: 580px;
  transform: translateZ(0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  position: absolute;
  width: min(92%, 1200px);
  height: 100%;
}

.hero__title {
  position: absolute;
  top: 50%;
  left: 65%;
  width: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: max(25px, min(6vw, 30px));
  color: #212131;
  font-family: "Poppins Medium",Montserrat,serif;
}

.hero__image__wrapper {
  position: absolute;
  height: min(290px, 80vw);
  width: min(290px, 80vw);
  top: 25%;
  left: 10%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__image {
  width: 80%;
}

@media screen and (max-width: 1100px) {
  .hero__title {
    top: 75%;
    left: 50%;
    width: 80%;
  }

  .hero__image__wrapper {
    height: min(240px, 80vw);
    width: min(240px, 80vw);
    top: 12%;
    left: 50%;
    transform: translateX(-50%);
  }
}

#loader__wrapper {
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: hidden;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  font-size: 10px;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #111111;
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>
