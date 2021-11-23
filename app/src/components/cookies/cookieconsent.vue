<template>
  <div id="cookieconsent">
    <transition name="popup">
      <div
        v-if="expanded && !accepted"
        id="cookie-popup"
        class="fb fb-fd-c fb-ai-s fb-jc-sb"
      >
        <span>
          <span class="material-icons clickable" @click="expanded = false"
            >close</span
          >
          <h1>Privatsphäre-Einstellungen</h1>
          <p>
            Wir verwenden Cookies, die für den Betrieb unserer Webseite
            notwendig sind und um dir Services anbieten zu können. Zusätzliche
            Cookies werden nur verwendet, wenn du ihnen zustimmst. Diese werden
            für statistische Zwecke genutzt und um dir individuelle Angebote
            bzw. personalisierte Werbung zeigen zu können. Du kannst deine
            Privatsphäre-Einstellungen jederzeit ändern.
          </p>
          <div id="cookie-container">
              <h2>Essentielle Cookies</h2>
            <div
              v-for="cookie in cookieArray.essential"
              :key="cookie.name"
              class="cookie fb fb-fd-r fb-ai-fs fb-jc-sb"
            >
              <span>
                <h3>{{ cookie.name }}</h3>
                <p>{{ cookie.description }}</p>
              </span>
              <label class="switch">
                <input type="checkbox" checked disabled/>
                <span class="slider round essential"></span>
              </label>
            </div>
            <h2>Non-Essentielle Cookies</h2>
            <div
              v-for="cookie in cookieArray.nonessential"
              :key="cookie.name"
              class="cookie fb fb-fd-r fb-ai-fs fb-jc-sb"
            >
              <span>
                <h3>{{ cookie.name }}</h3>
                <p>{{ cookie.description }}</p>
              </span>
              <label class="switch">
                <input type="checkbox" v-model="cookie.allowed"/>
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </span>

        <button class="pb" @click="accept()">Einstellungen akzeptieren</button>
      </div>
    </transition>
    <transition name="slide-fade">
      <div v-if="!expanded && !accepted" id="cookie-bar">
        <div class="margin-0">
          <h5>Cookie-Information</h5>
          <p>
            Wir nutzen Cookies auf unserer Webseite. Einige von ihnen sind
            essenziell, während andere uns helfen die Webseite und
            Werbemaßnahmen zu verbessern.
          </p>
          <span class="fb fb-fd-r fb-ai-fs fb-jc-fe">
            <button class="sb" @click="expanded = true">Anpassen</button>
            <button class="pb" @click="accept()">
              Einstellungen akzeptieren
            </button>
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";

export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  name: "cookieconsent",
  data() {
    return {
      expanded: false,
    };
  },
  components: {},
  computed: {
    accepted() {
      return this.$store.getters.getCookieConsent;
    },

    cookieArray(){
        return this.$store.getters.getCookies;
    }
  },
  watch: {
      accepted(){
          if(!this.accepted){
            this.removeCookies()
          } 
      }
  },
  methods: {
    removeCookies() {
      for (let i in this.cookieArray.essential) {
        this.cookies.remove(
          this.cookieArray.essential[i].name
        );
      }
      for (let j in this.cookieArray.nonessential) {
        this.cookies.remove(
          this.cookieArray.nonessential[j].name
        );
      }
      
      this.$store.dispatch("resetCookies")
      this.expanded = true

    },
    accept() {
      for (let i in this.cookieArray.essential) {
        this.cookies.set(
          this.cookieArray.essential[i].name,
          this.cookieArray.essential[i].value,
          this.cookieArray.essential[i].expiry
        );
      }
      for (let j in this.cookieArray.nonessential) {
        if (this.cookieArray.nonessential[j].allowed) {
          this.cookies.set(
            this.cookieArray.nonessential[j].name,
            this.cookieArray.nonessential[j].value,
            this.cookieArray.nonessential[j].expiry
          );
        } else if (this.cookies.isKey(this.cookieArray.nonessential[j].name)) {
          this.cookies.remove(this.cookieArray.nonessential[j].name);
        }

      }
      this.$store.dispatch("setCookieConsent", true)
    },
    initCookies() {
      let hasEssentials = true;
      for (let i in this.cookieArray.essential) {
        if (!this.cookies.isKey(this.cookieArray.essential[i].name)) {
          hasEssentials = false;
        }
      }
      for (let j in this.cookieArray.nonessential) {
        if (this.cookies.isKey(this.cookieArray.nonessential[j].name)) {
          if (!hasEssentials) {
            this.cookies.remove(this.cookieArray.nonessential[j].name);
          }
        } else if (hasEssentials) {
          this.cookieArray.nonessential[j].allowed = false
        }

      }
      this.$store.dispatch("setCookieConsent", hasEssentials)
    },
  },
  created() {
      this.initCookies()
  },
};
</script>
<style scoped>
h5,
h1 {
  padding-bottom: 0.5em;
  font-size: 1.5em;
}
h2{
    margin-top: 1em;
    font-size: 1em;
    font-weight: 500;
}

.cookie{
    background-color: #F5F9FC;
    margin-bottom: 0.1em;
    padding:  0.5em 1em;
}

#cookie-container{
    max-height: 15em;
    overflow-y: scroll;
    padding-right: 1em;
    margin-top: 1em;
}

#cookie-container::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #F5F9FC; /* or add it to the track */
  border-radius: 10px;
}

/* Add a thumb */
#cookie-container::-webkit-scrollbar-thumb {
    background: #999c9e;
    border-radius: 10px;
}

#cookie-popup {
  position: fixed;
  background-color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);
  width: 40em;

  padding: 2em;
  margin: 2em;
  z-index: 10000;
  max-width: calc(100% - 8em);
  max-height: calc(100% - 8em);
}
.material-icons {
  float: right;
}
.sb {
  color: black;
  border-color: black;
  margin-right: 1em;
}

.pb,
.sb {
  margin-top: 2em;
}

#cookie-bar {
  position: fixed;
  bottom: 0;

  padding: 2em;
  width: calc(100% - 4em);
  z-index: 10000;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.03);
}

.slide-fade-enter-active {
  transition: all 0.5s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20em);
}

.popup-enter-active {
  transition: all 0.2s ease-in;
}

.popup-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background:  #56AFF5;
}

input:focus + .slider {
  box-shadow: 0 0 1px #56AFF5;
}

input:checked + .essential {
  background: #999c9e;
}

input:focus + .essential {
  box-shadow: 0 0 1px #999c9e;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
