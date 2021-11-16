<template>
  <div id="footer">
    <div id="bottom-cta" v-if="$route.name != 'quiz'">
      <div class="margin-0 white-t fb fb-fd-c fb-jc-c fb-ai-fs">
        <h2>Nicht sicher, wonach du suchst?</h2>
        <p>Mach das Quiz und definiere dein Problem!</p>
        <a :href="'/quiz'"
          ><button class="sb button-with-icon button-with-icon-and-line">
            Quiz starten
            <span class="material-icons">arrow_right_alt</span>
          </button></a
        >
      </div>
    </div>
    <div id="bottom-links" class="darkblue">
      <div
        class="fb fb-fd-r fb-ai-fs fb-jc-sb margin-0 white-t"
        id="bottom-display"
      >
        <div class="bottom-container">
          <h4><span class="fat">Sitemap</span></h4>
          <a :href="'/landing1'"><p class="clickable">Startseite</p></a>
          <a :href="'/about'"><p class="clickable">About</p></a>
          <a :href="'/projects'"><p class="clickable">Projekte</p></a>
          <a :href="'/contact'"><p class="clickable">Kontakt</p></a>
        </div>
        <div class="bottom-container">
          <h4><span class="fat">Rechtliches</span></h4>
          <a :href="'/legal'"><p class="clickable">Impressum</p></a>
          <a :href="'/dataprotection'"
            ><p class="clickable">Datenschutzerklärung</p></a
          >
        </div>
        <div class="bottom-container">
          <h4><span class="fat">Kontakt</span></h4>
          <span class="fb fb-fd-r fb-ai-c fb-jc-fs">
            <span class="material-icons material-icons-small">email</span>
            <a href="mailto:hello@florianbachl.at"
              ><p>hello@florianbachl.at</p></a
            >
          </span>
          <span class="fb fb-fd-r fb-ai-c fb-jc-fs">
            <span class="material-icons material-icons-small">phone</span>
            <p>+43-650-677-9393</p>
          </span>
        </div>

        <div class="bottom-container">
          <div id="logo-text">
            <h3>Florian Bachl, B.Sc.</h3>
            <p>Software & Webdesign</p>
          </div>
          <span class="fb fb-fd-r fb-jc-fs fb-ai-c">
            <a
              href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
              target="_blank"
              ><div class="social-icon grey1 clickable" id="twitter"></div
            ></a>
            <a
              href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
              target="_blank"
              ><div class="social-icon grey1 clickable" id="instagram"></div
            ></a>
            <a
              href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
              target="_blank"
              ><div class="social-icon grey1 clickable" id="facebook"></div
            ></a>
            <a
              href="//www.linkedin.com/in/florian-bachl-b-sc-00163a222/"
              target="_blank"
              ><div class="social-icon grey1 clickable" id="linkedin"></div
            ></a>
          </span>
        </div>
      </div>
      <div id="bottom-legal" class="white-t">
        <p>
          © 2021 <span class="fat">Florian Bachl</span> Alle Rechte vorbehalten
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style scoped>

#bottom-cta {
  background: linear-gradient(0.13turn, #01cfdc 0%, #340a94 100%);
  padding: 30px;
  text-align: left;
}

#bottom-cta h2 {
  margin: 20px;
  margin-left: 0px;
}

#bottom-cta button {
  margin-top: 30px;
  margin-bottom: 30px;
}

.bottom-container {
  margin-top: 40px;
  margin-bottom: 40px;
  width: 25%;
}

.bottom-container h4 {
  margin-bottom: 20px;
}

.bottom-container p {
  margin-bottom: 3px;
  margin-top: 3px;
}

#bottom-links {
  padding-bottom: 20px;
}

#logo-bottom {
  padding-left: 20px;
  padding-right: 20px;
  width: calc(100% - 40px);
  height: 100px;
}

#logo-text {
}

#bottom-legal {
  text-align: center;
  font-size: 0.8em;
}

#bottom-spacer {
  width: 100px;
}

#legal {
  padding-top: 25px;
  padding-bottom: 30px;
}

a {
  color: white;
}

@media screen and (max-width: 768px) {
  .bottom-container {
    width: unset;
  }
  #bottom-display {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  #bottom-links .margin-0{
    margin-top: 0px;
  }
}
</style>