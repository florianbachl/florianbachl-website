<template>
  <div id="nav">
    <div class="margin-0 fb fb-fd-r fb-ai-c fb-jc-sb">
      <div id="menu-spacer"></div>
      <a :href="'/landing1'" class="clickable">
        <div v-if="isLogoWhite">
          <img src="@/assets/logos/logo_white.svg" alt="logo" class="logo" />
        </div>
        <div v-else>
          <img src="@/assets/logos/logo_color.svg" alt="logo" class="logo" />
        </div>
      </a>
      <span
        class="material-icons clickable"
        id="hamburger"
        :class="[isLogoWhite ? 'hamburger-white' : 'hamburger-gradient']"
        @click="setExpanded(true)"
        >drag_handle</span
      >
    </div>
    <div v-if="isexpanded" id="menu" class="grey1 fb fb-fd-c fb-ai-s fb-jc-sb">
      <div class="fb fb-fd-r fb-ai-c fb-jc-sb">
        <span class="material-icons clickable" @click="setExpanded(false)">arrow_right_alt</span>
        <a :href="'/login'"><p class="hamburger-gradient">Login</p></a>
      </div>
      <div id="menu-items">
        <a :href="'/landing1'"><p class="clickable">Startseite</p></a>
        <a :href="'/about'"><p class="clickable">About</p></a>
        <a :href="'/projects'"><p class="clickable">Projekte</p></a>
        <a :href="'/contact'"><p class="clickable">Kontakt</p></a>
      </div>
      <div>
        <button class="pb">Kontaktieren aufnehmen</button>
        <span class="fb fb-fd-r fb-jc-fs fb-ai-c" id="social-icons-menu">
          <a
            href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
            target="_blank"
            ><div class="social-icon clickable" id="twitter"></div
          ></a>
          <a
            href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
            target="_blank"
            ><div class="social-icon clickable" id="instagram"></div
          ></a>
          <a
            href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
            target="_blank"
            ><div class="social-icon clickable" id="facebook"></div
          ></a>
          <a
            href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
            target="_blank"
            ><div class="social-icon clickable" id="linkedin"></div
          ></a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {};
  },
  computed: {
    isLogoWhite() {
      return this.$store.getters.isLogoWhite;
    },
    isexpanded() {
      return this.$store.getters.isExpanded;
    },
  },
  watch: {},
  methods: {
    setExpanded(payload) {
      this.$store.dispatch("setExpanded", payload);
    },
  },
};
</script>
<style scoped>
#nav {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
}

#menu-spacer {
  width: 60px;
}

#hamburger {
  width: 60px;
  text-align: right;
}

.hamburger-gradient {
  background: -webkit-linear-gradient(0.13turn, #340a94 0%, #185cbc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hamburger-white {
  color: white;
}

#menu {
  width: 300px;
  padding: 20px;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
}

.pb {
  width: 100%;
}

#social-icons-menu {
  padding-bottom: 35px;
  padding-top: 5px;
}

#menu-items{
    line-height: 80px;
}

#menu-items .clickable{
    color: black;
    font-size: 20px;
}
</style>
