<template>
  <div id="footer">
    <div id="bottom-cta">
      <div class="margin-0 white-t fb fb-fd-c fb-jc-c fb-ai-c">
        <h2>Nicht sicher, wonach du suchst?</h2>
        <p>
          Manchmal kann es schwierig sein, in Worte zu fassen, was man benötigt,
          um ein Problem zu lösen. Unser Quiz hilft dir mit kurzen Fragen, dein
          Anliegen auf den Punkt zu bringen.
        </p>
        <button class="sb button-with-icon button-with-icon-and-line">
          Quiz starten
          <span class="material-icons">arrow_right_alt</span>
        </button>
      </div>
    </div>
    <div id="bottom-links" class="darkblue">
      <div class="fb fb-fd-r fb-ai-fs fb-jc-sb margin-0-small white-t">
        <div class="bottom-container">
          <h4><span class="fat">Sitemap</span></h4>
          <p class="clickable">Startseite</p>
          <p class="clickable">About</p>
          <p class="clickable">Projekte</p>
          <p class="clickable">Kontakt</p>
        </div>
        <div class="bottom-container">
          <h4><span class="fat">Kontakt</span></h4>
          <span class="fb fb-fd-r fb-ai-c fb-jc-fs">
            <span class="material-icons material-icons-small">email</span>
            <p>hello@florianbachl.at</p>
          </span>
          <span class="fb fb-fd-r fb-ai-c fb-jc-fs">
            <span class="material-icons material-icons-small">phone</span>
            <p>+43-650-677-9393</p>
          </span>
          <span class="fb fb-fd-r fb-jc-fs fb-ai-c">
            <div class="social-icon grey1 clickable" id="twitter"></div>
            <div class="social-icon grey1 clickable" id="instagram"></div>
            <div class="social-icon grey1 clickable" id="facebook"></div>
            <div class="social-icon grey1 clickable" id="linkedin"></div>
          </span>
        </div>

        <div class="bottom-container">
          <img
        src="@/assets/logos/logo_color.svg"
        alt="UpperBanner"
        id="logo-bottom" />
          <div id="logo-text">
            <h3>Florian Bachl, B.Sc.</h3>
            <p>Software & Webdesign</p>
          </div>
        </div>
      </div>
      <div id="bottom-legal" class="white-t">
        <div class="fb fb-fd-r fb-jc-c fb-ai-c" id="legal">
            <span class="clickable">Impressum</span>
            <div id="bottom-spacer"></div>
            <span class="clickable">Datenschutzerklärung</span>
        </div>
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
<style >
#bottom-cta {
  background: linear-gradient(0.13turn,#185cbc 0%, #340a94 100%);
  padding: 30px;
  text-align: center;
}

#bottom-cta h2 {
  margin: 20px;
}

#bottom-cta button {
  margin-top: 30px;
  margin-bottom: 30px;
}

.bottom-container {
  margin-top: 40px;
  margin-bottom: 40px;
  max-width: 33%;
}

.bottom-container h4 {
  margin-bottom: 20px;
}

.bottom-container p {
  margin-bottom: 3px;
  margin-top: 3px;
}

.social-icon {
  padding: 15px;
  border-radius: 50%;
  margin-top: 15px;
  margin-right: 15px;
  background-repeat: no-repeat;
  background-size: 60% auto;
  background-position: center center;
}

#bottom-links{
    padding-bottom: 20px;
}

#twitter {
  background-image: url("../../assets/logos/twitter.png");
}

#facebook {
  background-image: url("../../assets/logos/facebook.png");
}

#linkedin {
  background-image: url("../../assets/logos/linkedin.png");
}

#instagram {
  background-image: url("../../assets/logos/instagram.png");
}

#logo-bottom {
  padding-left: 20px;
  padding-right: 20px;
  width: calc( 100% - 40px );
  height: 100px;
}

#logo-text {
  padding-top: 20px;
  text-align: center;
  width: 100%;
}

#bottom-legal {
  text-align: center;
}

#bottom-spacer{
    width: 100px;
}

#legal{
    padding-top: 25px;
    padding-bottom: 30px;
}
</style>