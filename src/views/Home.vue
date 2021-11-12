<template class="home">
  <div id="snackbar" class="snackbar">Discord tag copied</div>
  <img
    src="@/assets/background__inner.jpg"
    class="bg__inner"
    alt="website background"
  />
  <div class="nav">
    <router-link class="nav__item neu" to="/" @click="nav_item_click(this)"
      >Terminal
      <div class="nav__item__indicator"></div>
    </router-link>
    <div
      class="nav__item neu"
      @click="
        aboutButton();
        nav_item_click(this);
      "
    >
      About
      <div class="nav__item__indicator"></div>
    </div>
    <a
      class="nav__item neu"
      href="https://www.github.com/Shiv-Patil"
      @click="nav_item_click(this)"
    >
      Projects
      <div class="nav__item__indicator"></div>
    </a>
    <div
      class="nav__item neu"
      @click="
        discordSnack();
        nav_item_click(this);
      "
    >
      Contact
      <div class="nav__item__indicator"></div>
    </div>
  </div>
  <div class="hero__wrapper">
    <div class="hero neu">
      <div class="hero__title">Krymzin</div>
      <div class="hero__image__wrapper neu">
        <img
          src="@/assets/hero__image.png"
          @load="bgLoaded"
          class="hero__image"
          alt="picture"
        />
      </div>
    </div>
  </div>
  <div class="about__wrapper">
    <div class="about neu" id="about">
      <div class="about__text__wrapper">
        <span class="about__text__title">About</span>
        <div class="about__text">
          Hey there! My name is Shiv, currently
          {{ new Date().getFullYear() - 2005 }}. I'm a self-taught programmer
          who is well-acquainted with python and has some experience with
          JavaScript and C++.<br />
          I have largely worked with the Kivy python framework to make
          cross-platform GUI apps.<br />
          Currently I am trying to learn new technologies and trying out
          different programming languages to work with.<br />
          I like rock/metal music :P
        </div>
      </div>
      <div class="about__images__container">
        <div class="python about__image__wrapper neu">
          <img
            src="@/assets/python_logo.png"
            class="about__image"
            alt="py logo"
          />
        </div>
        <div class="js about__image__wrapper neu">
          <img src="@/assets/js_logo.png" class="about__image" alt="js logo" />
        </div>
        <div class="cpp about__image__wrapper neu">
          <img
            src="@/assets/cpp_logo.png"
            class="about__image"
            alt="cpp logo"
          />
        </div>
        <div class="kivy about__image__wrapper neu">
          <img
            src="@/assets/kivy_logo.png"
            class="about__image"
            alt="kivy logo"
          />
        </div>
      </div>
    </div>
  </div>
  <div id="loader__wrapper">
    <div class="loader"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      scrollEventTimeout: 400,
      scrollEventLastCalled: Date.now(),
    };
  },
  components: {},
  methods: {
    bgLoaded() {
      document.getElementById("loader__wrapper").style.display = "none";
      this.pageScrollTimeout();
    },
    discordSnack() {
      navigator.clipboard.writeText("KrYmZiN#0311");
      let sn = document.getElementById("snackbar");
      sn.className = "snackbar show";
      setTimeout(() => {
        sn.className = "snackbar";
      }, 2000);
    },
    aboutButton() {
      document.getElementById("about").scrollIntoView();
    },
    nav_item_click() {},
    pageScroll() {
      if (Date.now() - this.scrollEventLastCalled > this.scrollEventTimeout) {
        this.pageScrollTimeout();
        this.scrollEventLastCalled = Date.now();
      }
    },
    pageScrollTimeout() {
      const vh = window.innerHeight;
      document.querySelectorAll(".neu").forEach((ele) => {
        if (!ele.classList.contains("scale_and_fade_in"))
          if (ele.getBoundingClientRect().top < vh - 50)
            ele.classList.add("scale_and_fade_in");
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.pageScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.pageScroll);
    document.querySelectorAll(".neu").forEach((ele) => {
      if (ele.classList.contains("scale_and_fade_in")) ele.classList.remove("scale_and_fade_in");
    });
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  margin: 12px 0;
  width: 100%;
}

.scale_and_fade_in {
}

.nav__item {
  position: relative;
  border-radius: 6px;
  transform: scale(0.97);
  font-size: max(8px, min(4vw, 16px));
  margin: 8px max(4px, min(2vw, 8px));
  padding: max(4px, min(2vw, 9px));
  user-select: none;
  color: #212131;
  text-decoration: none;
  font-family: Montserrat, sans-serif;
}

.nav__item::before {
  content: "";
  border-radius: 6px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 4px 4px 8px rgba(94, 104, 121, 0.4),
    -2px -2px 5px rgba(252, 252, 252, 0.8);
  background-color: rgba(94, 104, 121, 0.05);
  opacity: 0;
  transform: scale(1.04166);
}

.nav__item.scale_and_fade_in {
  animation: scalein 0.7s linear forwards;
}

.nav__item.scale_and_fade_in::before {
  animation: fadein 1s ease-in forwards, scalein 1s linear forwards;
}

.nav__item:hover {
  cursor: pointer;
}

.nav__item:active::before {
  box-shadow: inset 2px 2px 4px rgba(94, 104, 121, 0.4),
    inset -2px -2px 4px rgba(252, 252, 252, 0.8);
  transform: scale(1.04166) !important;
}

.nav__item:active {
  transform: scale(0.96) !important;
}

.nav__item__indicator {
  position: relative;
  width: max(12px, min(5vw, 20px));
  height: 3px;
  border-radius: 5px;
  left: calc(50% - max(6px, min(2.5vw, 10px)));
  bottom: 0;
  background-color: #999999;
  margin-bottom: 2px;
  margin-top: 4px;
  user-select: none;
}

.nav__item:active > .nav__item__indicator {
  background-color: #ed9c5a;
  box-shadow: 0 0 6px 0 #ed9c5a;
}

.snackbar {
  opacity: 0;
  min-width: 160px;
  background-color: #efefef;
  color: #333;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  font-weight: bold;
  font-family: Poppins, Montserrat, serif;
  transition: opacity 0.5s linear, bottom 0.5s linear;
}

.snackbar.show {
  opacity: 1;
  bottom: 30px;
}

.bg__inner {
  position: absolute;
  top: 0;
  left: 0;
  height: max(100%, 1500px);
  width: max(100%, 200px);
  user-select: none;
}

.hero__wrapper {
  height: min(580px, 150vw);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
}

.hero {
  border-radius: 10px;
  position: relative;
  width: min(86%, 1200px);
  height: 100%;
  transform: scale(0.98);
}

.hero.scale_and_fade_in {
  animation: scalein 1s linear forwards;
}

.hero.scale_and_fade_in::before {
  animation: fadein 1s linear forwards, scalein 1s linear forwards;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 10px;
  background-color: rgba(94, 104, 121, 0.05);
  box-shadow: 12px 12px 20px rgba(94, 104, 121, 0.4),
    -4px -4px 14px rgba(252, 252, 252, 0.8);
  transform: scale(1.0204);
  opacity: 0;
}

.hero__title {
  position: absolute;
  top: 50%;
  left: 65%;
  width: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: max(32px, min(14vw, 76px));
  color: #212131;
  font-family: "Dancing Script", Montserrat, serif;
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
  user-select: none;
  transform: scale(0.98);
}

.hero__image__wrapper.scale_and_fade_in {
  animation: scalein 0.7s linear forwards;
  animation-delay: 1s;
}

.hero__image__wrapper.scale_and_fade_in::before {
  animation: fadein 0.7s ease-in forwards 1s, scalein 0.7s linear forwards 1s;
}

.hero__image__wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background-color: rgba(94, 104, 121, 0.05);
  box-shadow: 8px 8px 14px rgba(94, 104, 121, 0.4),
    -3px -3px 8px rgba(252, 252, 252, 0.8);
  opacity: 0;
  transform: scale(1);
}

.hero__image {
  width: 80%;
  user-select: none;
  pointer-events: none;
}

@media screen and (max-width: 1100px) {
  .hero__title {
    top: 75%;
    left: 50%;
    width: 80%;
  }

  .hero__image__wrapper {
    height: min(240px, 60vw);
    width: min(240px, 60vw);
    top: 20%;
    left: calc(50% - min(120px, 30vw));
    transform: scale(0.98);
  }
}

.about__wrapper {
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  height: min(580px, 150vw);
}

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
  width: min(86%, 1200px);
  height: 100%;
  transform: scale(0.98);
}

.about.scale_and_fade_in {
  animation: scalein 1s linear forwards;
}

.about.scale_and_fade_in::before {
  animation: fadein 1s linear forwards, scalein 1s linear forwards;
}

.about::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 10px;
  background-color: rgba(94, 104, 121, 0.05);
  box-shadow: 12px 12px 20px rgba(94, 104, 121, 0.4),
    -4px -4px 14px rgba(252, 252, 252, 0.8);
  transform: scale(1.0204);
  opacity: 0;
}

.about__images__container {
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  width: min(300px, 60%);
  margin-bottom: min(10%, 40px);
  margin-right: 10px;
}

.python {
  margin-bottom: 20px;
}

.cpp {
  margin-top: -40px;
}

.js {
  margin-top: 20px;
}

.about__image__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transform: scale(0.98);
  border-radius: 50%;
  height: 0;
  width: min(110px, 100%);
  padding-bottom: min(110px, 100%);
}

.about__image__wrapper.scale_and_fade_in {
  animation: scalein 0.7s linear forwards;
  animation-delay: 1s;
}

.about__image__wrapper.scale_and_fade_in::before {
  animation: fadein 0.7s ease-in forwards 1s, scalein 0.7s linear forwards 1s;
}

.about__image__wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background-color: rgba(94, 104, 121, 0.05);
  box-shadow: 8px 8px 14px rgba(94, 104, 121, 0.4),
    -3px -3px 8px rgba(252, 252, 252, 0.8);
  opacity: 0;
  transform: scale(1);
}

.cpp.about__image__wrapper::before {
  content: "";
  border-radius: 0;
}

.js.about__image__wrapper::before {
  content: "";
  border-radius: 0;
}

.about__image {
  width: 80%;
  margin-top: 100%;
  user-select: none;
  pointer-events: none;
}

.about__text__wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.about__text__title {
  font-size: max(20px, min(9vw, 48px));
  color: #212131;
  font-family: "Poppins Light", Montserrat, serif;
}

.about__text {
  font-size: max(11px, min(3.6vw, 24px));
  color: #212131;
  font-family: Montserrat, serif;
  text-align: left;
  padding: min(3vw, 40px);
}

@media screen and (max-width: 1100px) {
  .about__wrapper {
    height: min(750px, 150vw);
  }

  .about {
    flex-direction: column;
  }

  .about__text {
    text-align: center;
  }

  .about__images__container {
    margin-right: 0;
  }
}

@media screen and (max-width: 280px) {
  .about__wrapper {
    height: calc(700px - 100vw);
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
  to {
    opacity: 1;
  }
}

@keyframes fadein {
  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  to {
    opacity: 0;
  }
}

@keyframes fadeout {
  to {
    opacity: 0;
  }
}

@keyframes scalein {
  to {
    transform: scale(1);
  }
}

@-webkit-keyframes scalein {
  to {
    transform: scale(1);
  }
}
</style>
