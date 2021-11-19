<template>
  <div id="landing1" class="grey1">
    <div id="banner-content" class="fb fb-fd-r fb-ai-c fb-jc-sb">
      <div class="side">
        <h1 class="veryfat">Digitale Lösungen für dein Unternehmen</h1>
        <h2>Professionelle Applikationen und Webdesign für die Zukunft</h2>
         <a :href="'/contact'"
          ><button class="pb">Jetzt Kontaktieren</button></a>
      </div>

      <Landingsvg></Landingsvg>
    </div>

    <div id="content-landing">
      <div id="service-banner">
        <div class="fb fb-fd-r fb-jc-c fb-ai-fs">
          <div class="service-container white fb fb-fd-c fb-ai-c fb-jc-c">
            <Smallwebsitesvg></Smallwebsitesvg>
            <span
              ><h3 class="fat">Websites & Landingpages</h3>
              <p>
                Moderne und professionelle Websites für Unternehmen, 
                die Interessenten zu Kunden machen möchten.
              </p>
            </span>
          </div>
          <div class="service-container white fb fb-fd-c fb-ai-c fb-jc-c">
            <Pcsvg></Pcsvg>
            <span
              ><h3 class="fat">Webapps & Desktopapps</h3>
              <p>
                Digitale und maßgeschneiderte Applikationen, 
                die Abläufe automatisieren und Resourcen sparen.
              </p>
              </span>
          </div>
          <div class="service-container white fb fb-fd-c fb-ai-c fb-jc-c">
            <Cloudsvg></Cloudsvg>
            <span
              ><h3 class="fat">Cloud-Anwendungen</h3>
              <p>
                Jederzeit und von überall auf Firmenresourcen 
              zugreifen und die Produktivität steigern.
              </p></span
            >
          </div>
        </div>
      </div>

      <div class="white-section fb fb-fd-r fb-ai-c fb-jc-sb margin-0">
        <Websitesvg></Websitesvg>

        <div class="side">
          <h2 class="fat">
            Erfolgreiches Webdesign liegt in der Liebe zum Detail
          </h2>
          <p>
           Du möchtest online verkaufen, Termine über deine Website vereinbaren oder einfach nur Kunden informieren?
            Rücke deine Marke in ein modernes Licht mit professionellem und maßgeschneidertem Webdesign, das intuitiv und einfach zu benutzen ist.
            Vom Erstgespräch bis hin zur vollständigen Anwendung wickle ich dein Projekt mit größter Sorgfalt ab.
          </p>
          <a :href="'/projects'"> <button class="pb">Projekte Ansehen</button></a>
        </div>
      </div>
      <div class="white-section scnd fb fb-fd-r fb-ai-c fb-jc-sb margin-0">
        <div class="side">
          <h2 class="fat">Intuitive Anwendungen als Lösung für komplexe Probleme</h2>
          <p>
            Automatisiere die Probleme, die dir und deinen Mitarbeitern täglich Zeit kosten. 
            Durch effiziente Projektplanung und Zieldefinition werden vielschichtige Aufgaben zuerst klar strukturiert und dann automatisiert.
            Mit modernsten Technologien setze ich Full-Stack-Anwendungen, Web- und Cloudapps um und lege dabei immer den Fokus auf die Usability des Endproduktes.
          </p>
           <a :href="'/contact'"><button class="pb">Jetzt Kontaktieren</button></a>
        </div>
        <Automationsvg></Automationsvg>
      </div>

      <div class="banner-inner">
        <div class="white margin-0 customer-section">
          <h2 class="fat">Das sagen andere Kunden</h2>
          <span class="fb fb-fd-r fb-ai-c fb-jc-sb">
            <span
              class="material-icons clickable margin-20 grey3-t"
              @click="back"
            >
              arrow_back_ios
            </span>

           
            <div id="rating" class="fb fb-fd-r fb-ai-c fb-jc-c">
               <img
              :src="require('@/assets/customers/' + ratings[ratingindex].img)"
              alt="profilepic"
              id="ratingimg"
            />
              <span><h3>"{{ ratings[ratingindex].text }}"</h3>
              <br>
              <h3>{{ ratings[ratingindex].customer }}</h3>
              <p>{{ ratings[ratingindex].position }}</p>
              </span>
            </div>

            <span
              class="material-icons clickable margin-20 grey3-t"
              @click="forward"
            >
              arrow_forward_ios
            </span>
          </span>
          <div class="fb fb-fd-r fb-ai-c fb-jc-c" id="slider-dots">
                <span v-for="(dot, index) in ratings" :key="index">
                  <div
                    class="dot clickable"
                    :class="{ 'active-dot': index == ratingindex }"
                    @click="setActive(index)"
                  ></div>
                </span>
              </div>
        </div>
      </div>

      <div class="banner-inner margin-0" id="mysection">
        <img src="@/assets/team/me.jpg" alt="profilepic" id="myimg" />
        <h2>Hey, ich bin Florian!</h2>
        <p>
          Seit meinem Abschluss als B.Sc. an der Fachhochschule Hagenberg durfte ich 
          für meine Kunden viele Projekte im Bereich Web und Software umsetzen. 
          Wenn ich mich entscheiden müsste, was mir an meiner Tätigkeit am besten gefällt,
          dann wohl die Notwendigkeit, komplexe Aufgaben in einfachster und intuitiver Form darzustellen.
          Programmierer finden oft Spaß daran, einfache Aufgaben kompliziert zu machen.
          Das Ergebnis ist dann oft die sogenannte "Eier-legende Wollmilch-Sau". In der Programmierung 
          zwar ein Meisterwerk, für den Benutzer aber ein Albtraum.
          Ob Mitarbeiter in einem Unternehmen oder potentieller Kunde, jeder Nutzer verdient 
          eine optimierte und einfach zu bedienende Oberfläche. 
        </p>
        <h4>Florian Bachl, B.Sc.</h4>
        <p>Software & Webdesign</p>
      </div>
    </div>
  </div>
</template>

<script>
import Landingsvg from "../../components/svgs/landingsvg";
import Automationsvg from "../../components/svgs/automationsvg";
import Websitesvg from "../../components/svgs/websitesvg";
import Smallwebsitesvg from "../../components/svgs/smallwebsitesvg";
import Cloudsvg from "../../components/svgs/cloudsvg";
import Pcsvg from "../../components/svgs/pcsvg";

export default {
  name: "landing1",
  data() {
    return {
      ratingindex: 0,
      touchstartX: null,
      touchendX: null,
      touchstartY: null,
      touchendY: null,
      ratings: [
        {
          customer: "Brigitte Bachl",
          position: "Geschäftsführerin Bachl Nachhilfe",
          text: "Zuerst dachte ich, das man das alles nie in nur einem Programm unterbringen könne. Seit wir das neue Organisationsprogramm verwenden, hat sich mein Organisationsaufwand um 90% verringert.",
          img: "bachl.png",
        },
      ],
    };
  },
  
  components: {
    Landingsvg,
    Automationsvg,
    Websitesvg,
    Smallwebsitesvg,
    Cloudsvg,
    Pcsvg,
  },
  computed: {},
  created() {
    this.$store.dispatch("setLogoWhite", false);

  
  },
  mounted() {
      document
        .getElementById("rating").addEventListener('touchstart', (event)=> {
    this.touchstartX = event.changedTouches[0].screenX;
     this.touchstartY = event.changedTouches[0].screenY;
}, false);

    document
        .getElementById("rating").addEventListener('touchend', (event)=> {
         this.touchendX = event.changedTouches[0].screenX;
         this.touchendY = event.changedTouches[0].screenY;
        this.handleGesture();
    }, false);
  },
  watch: {
  },
  methods: {
    handleGesture() {
    if (this.touchendX < this.touchstartX) {
        this.forward();
        console.log('Swiped left');
    }

    if (this.touchendX > this.touchstartX) {
        this.back();
        console.log('Swiped right');
    }

    if (this.touchendY < this.touchstartY) {
        console.log('Swiped Up');
    }

    if (this.touchendY > this.touchstartY) {
        console.log('Swiped Down');
    }

    if (this.touchendY === this.touchstartY) {
        console.log('Tap');
    }
},
    setActive(index) {
      this.ratingindex = index;
    },
    forward() {
      if (this.ratingindex + 1 < this.ratings.length) {
        this.ratingindex += 1;
      } else {
        this.ratingindex = 0;
      }
    },
    back() {
      if (this.ratingindex > 0) {
        this.ratingindex -= 1;
      } else {
        this.ratingindex = this.ratings.length - 1;
      }
    },
  },
};
</script>
<style >

#service-banner{
  margin: auto;
  max-width: 1100px;
}
.banner-inner h2 {
  padding-top: 20px;
  padding-bottom: 20px;
}

#banner-content h1 {
  margin-bottom: 0.4em;
}

#banner-content {
  width: 100%;
  height: 700px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

#content-landing {
  width: 100%;
  height: auto;
}

#banner-content h2 {
  margin-bottom: 1.5em;
}

.side {
  padding: 40px;
  width: calc(50% - 80px);
}

.banner-inner {
  z-index: 200;
  position: relative;
  text-align: center;
}

.service-container {
  width: calc(33% - 70px);
  padding: 25px;
  margin: 10px;
  margin-bottom: 5em;
}

.service-container h3 {
  padding-bottom: 0.5em;
}

#pcsvg,
#cloudsvg,
#smallwebsitesvg {
  width: 60%;
  padding-top: 1em;
  padding-bottom: 1em;
}

#websitesvg,
#automationsvg {
  width: 40%;

}

.bannerimg {
  width: 100%;
  height: auto;
}

.white-section {
  height: 30em;
  width: 100%;
}

.white-section p {
  margin-top: 0.7em;
  margin-bottom: 2em;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 20px;
  background-color: #999c9e;
  margin: 5px;
}

.active-dot {
  background-color: #185cbc;
}

.customer-section {
  padding: 1em 0em;
  margin-top: 5em;
}

#rating {
  text-align: left;
  margin: 60px;
  max-width: 70%;
  
}

#ratingimg {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  margin-right: 5em
}

#myimg {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}



#slider-dots {
  padding-bottom: 20px;
}

#mysection {
  margin-top: 5em;
  padding-bottom: 5em;
  
}

#mysection p {
  margin-top: 1em;
  margin-bottom: 2em;
}

#landing-logo {
  position: absolute;
  left: calc(50% - 135px);
  right: calc(50% - 135px);
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .customer-section, #mysection{
    margin: 0px 1em;
    max-width: calc( 100% - 2em);
  }
}

@media screen and (max-width: 768px) and (min-width: 450px){
  .service-container{
  flex-direction: row;

}
.side{
  width: 70%;
  
}
#websitesvg, #automationsvg{
  width: 60%;
}

#mysection{
  margin-bottom: 0px;
}
}

@media screen and (max-width: 768px) {

#banner-content{
  height: 40em;
  padding-top: 3em;
  justify-content: center;
}
#landingsvg{
  display: none;
}

.side{
  margin: 0 auto;
  text-align: center;
}

#service-banner .fb-fd-r{
  flex-direction: column;
}

.service-container{
  padding: 1.6em;
  width: calc( 100% - 3.2em - 20px);
  margin-bottom: 0.5em;
}
#smallwebsitesvg, #cloudsvg, #pcsvg{
  width: 15em;
  padding: 0px;
  padding-right: 1.6em;
} 

.white-section{
  flex-direction: column;
  height: unset;
}

.scnd{
  flex-direction: column-reverse;
}



.white-section .side{
  padding-top: 0em;
  width: calc( 100% - 80px);
}

#rating{
  flex-direction: column;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  text-align: center;
}

#ratingimg{
  margin: 2em;
}
}

@media screen and (max-width: 450px) {

.side{
  
  width: 100%;
}

.white-section .side{
  padding: 0px;
  width: 100%;
  text-align: left;
}
#websitesvg, #automationsvg{
  padding-top: 2em;
  width: 80%;
}

.customer-section{
  padding: 0.7em;
}

#rating{
  font-size: 15px;
}

#banner-content{
  height: 40em;
}

.margin-20{
  margin: 10px;
}
}
</style>
