<template>
  <div id="landing1" class="grey1">
    <div id="main-bg">
      <div id="banner-content" class="fb fb-fd-r fb-ai-c fb-jc-sb">
        <div class="side">
          <h1 class="white-t">
            <span class="fat">Digitale Lösungen</span><br />
            für dein Unternehmen
          </h1>
          <h3 class="white-t">
            <span class="fat">Professionelle Applikationen</span> und Webdesign
          für die Zukunft
          </h3>
          <button class="sb ">
            Jetzt Kontaktieren
          </button>
        </div>
        <div class="side">Grafik</div>
      </div>
    </div>
    <div id="content-landing">
      <img
        src="@/assets/backgrounds/t1.png"
        alt="UpperBanner"
        class="bannerimg"
        id="upper-banner-top"
        width="1921"
        height="95"
      />
      <div id="service-banner" class="banner-inner white">
        <h2>Services auf einen Blick</h2>
        <div class="fb fb-fd-r fb-jc-c fb-ai-c margin-0">
          <div class="service-container">
            <h3>Websites &<br />Landingpages</h3>
            <p>Some Text</p>
          </div>
          <div class="service-container">
            <h3>Webapps &<br />Cloud-Anwendungen</h3>
            <p>Some Text</p>
          </div>
          <div class="service-container">
            <h3>Desktop-<br />Anwendungen</h3>
            <p>Some Text</p>
          </div>
        </div>
      </div>
      <img
        src="@/assets/backgrounds/b1.png"
        alt="UpperBanner"
        class="bannerimg"
        width="1921"
        height="80"
      />

      <div class="white-section fb fb-fd-r fb-ai-c fb-jc-c  margin-0">
        <div class="side">Grafik</div>
        <div class="side">
          <h2>Heukunden überzeugen mit einem professionellen Webauftritt</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </p>
          <button class="pb">Jetzt Kontaktieren</button>
        </div>
      </div>
      <div class="white-section fb fb-fd-r fb-ai-c fb-jc-c  margin-0">
        <div class="side">
          <h2>Heukunden überzeugen mit einem professionellen Webauftritt</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </p>
          <button class="pb">Jetzt Kontaktieren</button>
        </div>
        <div class="side">Grafik</div>
      </div>
      <img
        src="@/assets/backgrounds/t2.png"
        alt="UpperBanner"
        class="bannerimg"
        id="lower-banner-top"
        width="1921"
        height="84"
      />
      <div class="banner-inner white">
        <h2>Das sagen andere Kunden</h2>
        <span class="fb fb-fd-r fb-ai-c fb-jc-c margin-0" id="customer-slider">
          <span
            class="material-icons clickable margin-20 grey3-t"
            @click="back"
          >
            arrow_back_ios
          </span>
          <img :src="require('@/assets/customers/'+ratings[ratingindex].img)" alt="profilepic" id="ratingimg" />
          <div id="rating">
            <h3>{{ ratings[ratingindex].text }}</h3>
            <h3>{{ ratings[ratingindex].customer }}</h3>
            <p>{{ ratings[ratingindex].position }}</p>
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
      <img
        src="@/assets/backgrounds/b2.png"
        alt="UpperBanner"
        class="bannerimg"
        width="1921"
        height="67"
      />
      <div class="banner-inner margin-0" id="mysection">
        <img src="@/assets/team/me.jpg" alt="profilepic" id="myimg" />
        <h2>Hey, ich bin Florian!</h2>
        <h3>Ich löse Probleme mit Softwareentwicklung</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren,
        </p>
        <h4>Florian Bachl, B.Sc.</h4>
        <p>Software & Webdesign</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "landing1",
  data() {
    return {
      ratingindex: 0,
      ratings: [
        {
          customer: "Brigitte Bachl",
          position: "Geschäftsführerin Bachl Nachhilfe",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
          img: "bachl.png"
        },
        {
          customer: "Brigitte Berchl",
          position: "Geschäftsführerin Bachl Nachhilfe",
          text: "Lorem ipsum dolor sit amet, conseafr htjzfkghfjd hgsftetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
          img: "bachl.png"
        },
      ],
    };
  },
  computed: {},
  created(){
    this.$store.dispatch('setLogoWhite', true)
  },
  watch: {},
  methods: {
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
.banner-inner h2 {
  padding-top: 20px;
  padding-bottom: 20px;
}
#main-bg {
  background: linear-gradient(0.13turn, #340a94 0%, #01CFDC 100%);
  width: 100%;
  height: calc(100vh + 100px);
  z-index: -20;
}

#main-bg h1 {
  line-height: 1.4em;
  margin-bottom: 1em;
}

#banner-content {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

#content-landing {
  width: 100%;
  height: auto;
}

#main-bg h3 {
  line-height: 1.5em;
  margin-bottom: 2.5em;
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
  width: calc(33% - 40px);
  padding: 20px;
  margin-bottom: 5em;
  margin-top: 5em;
}

#upper-banner-top {
  position: absolute;
  transform: translateY(calc(-100% + 1px));
}

#lower-banner-top {
  transform: translateY(calc(-100% + 1px));
  position: absolute;
}

.bannerimg {
  width: 100%;
  height: auto;
}

.white-section {
  height: 40em;
  width: 100%;
}

.white-section p {
  margin-top: 2em;
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

#rating {
  text-align: left;
  max-width: 900px;
  margin-right: 60px;
  margin-left: 60px;
  margin-bottom: 80px;
}

#ratingimg {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-left: 60px;
  margin-bottom: 80px;
}

#myimg {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

#customer-slider {
  margin-top: 50px;
}

#slider-dots {
  padding-bottom: 20px;
}

#mysection {
  margin-top: 130px;
  margin-bottom: 130px;
}

#mysection h3 {
  margin-bottom: 50px;
}

#mysection p {
  margin: 30px;

}

#landing-logo{
  position: absolute;
  left: calc( 50% - 135px) ;
  right:calc( 50% - 135px) ;
}
@media screen and (max-width:720px) {

}

@media screen and (max-width:450px) {
  .fb-fd-r{
    flex-direction: column;
  }
  #main-bg .fb-fd-r{
    flex-direction: column-reverse;
  }

  #main-bg{
    height: 100vh;
    text-align: center;
  }
  .side{
    padding: 20px;
    width: calc( 100% - 40px);
  }
}

</style>
