<template>
  <div id="quiz">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
    <div id="foreground">
      <div id="content" class="fb fb-fd-c fb-jc-sb">
        <div></div>
        <div class="fb fb-fd-r fb-ai-c fb-jc-sb" v-if="!introslide">
          <div class="width-60">
            <span id="question-indicator">
              Frage 0{{ questionsindex + 1 }} / 0{{ questions.length }}
            </span>
            <h2>{{ questions[questionsindex].question }}</h2>
            <div id="quiz-buttons">
              <span v-if="questions[questionsindex].input" class=" fb fb-fd-r fb-jc-c fb-ai-fs">
                <input
                  type="number"
                  @input="checkvalidity()"
                  class=""
                  v-model="questions[questionsindex].text"
                /><span id="currency">€</span>
              </span>
              <div v-if="questions[questionsindex].textarea" class="area">
                <textarea
                  id="scrollbar"
                  @input="checkvalidity()"
                  
                  v-model="questions[questionsindex].text"
                />
              </div>
              <span
                v-for="(answer, index) in questions[questionsindex].answers"
                :key="answer"
              >
              <div class="surrounding-topdown" :class="[
                      answer.dropdown ? 'dropdown':''
                  ]">
                <button
                  @click="setAnswer(index, questions[questionsindex])"
                  :class="[
                    questions[questionsindex].answerchosen == index
                      ? 'pb'
                      : 'sb',
                  ]"
                >
                  {{ answer.answer }}
                </button>
                <input
                  type="text"
                  v-if="questions[questionsindex].answerchosen == index && 
                  questions[questionsindex].answerchosen == 2"
                  @input="checkvalidity()"
                   class="inputfordropdown"
                  v-model="questions[questionsindex].text"
                />
                </div>
              </span>
            </div>
          </div>
          <div class="width-40"></div>
        </div>
        <div v-else>
          <h2>Willkommen!</h2>
          <p>dfhjrhdsgdgnf rdfhfg dfhrjfggsdf</p>
        </div>
        <div class="fb fb-fd-r fb-jc-sb fb-ai-c">
          <p @click="previous()" v-if="!introslide" class="clickable">Zurück</p>
          <button
            class="button-with-icon"
            @click="next()"
            :disabled="!proceed"
            :class="{ pb: proceed }"
          >
            Weiter
            <span class="material-icons">arrow_right_alt</span>
          </button>
        </div>
      </div>
      <!--<button> Hello</button>
        <button class="pb"> Hello</button>
        <button class="button-with-icon"> Hello
            <span class="material-icons">arrow_right_alt</span>
        </button>

        <button class="sb button-with-icon button-with-icon-and-line"> Hello
            <span class="material-icons">arrow_right_alt</span>
        </button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "quiz",
  data() {
    return {
      questionsindex: 0,
      proceed: true,
      introslide: true,
      questions: [
        {
          question: "Was möchtest du umsetzen?",
          answers: [
            { answer: "Website", dropdown: false },
            { answer: "Webapp oder Desktopapp", dropdown: false },
            { answer: "andere", dropdown: true },
          ],
          answerchosen: null,
          illustrationlink: null,
        },
        {
          question: "Was ist das Ziel deines Projektes?",
          answers: [
            {
              answer: "Kosten oder Zeit im Unternehmen sparen",
              dropdown: false,
            },
            { answer: "Neue Kunden gewinnen", dropdown: false },
            { answer: "andere", dropdown: true },
          ],
          answerchosen: null,
          illustrationlink: null,
        },
        {
          question:
            "Wie viel Kosten würde die Umsetzung des Projektes einsparen?",
          input: true,
          answerchosen: null,
          text: null,
          illustrationlink: null,
        },
        {
          question: "Wie definierst du den Erfolg deines Projektes?",
          textarea: true,
          answerchosen: null,
          text: null,
          illustrationlink: null,
        },
        {
          question:
            "Welche Aspekte sind dir bei der Umsetzung dieses Projektes besonders wichtig?",
          textarea: true,
          answerchosen: null,
          text: null,
          illustrationlink: null,
        },
      ],
      loginObj: {
        email: "",
        password: "",
      },
      options: {
        detectRetina: false,
        fpsLimit: 30,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#fff",
          },
          number: {
            density: {
              enable: true,
              area: 1080,
            },
            limit: 0,
            value: 400,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 1,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.05,
            },
            value: 0.5,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "top",
            out_mode: "out",
          },
          shape: {
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.5,
            },
            value: 1.5,
          },
        },
      },
    };
  },
  created(){
    this.$store.dispatch('setLogoWhite', true)
  },
  methods: {
    setAnswer(index, question) {
            question.answerchosen = index;
            this.proceed = true;
    },
    checkvalidity() {
      if (
        this.questions[this.questionsindex].text != null &&
        this.questions[this.questionsindex].text != ""
      ) {
        this.proceed = true;
      } else {
        this.proceed = false;
      }
    },
    previous() {
      if (this.questionsindex > 0) {
        this.questionsindex -= 1;
      } else {
        this.introslide = true;
      }
      if (this.questions[this.questionsindex].text != null &&
        this.questions[this.questionsindex].text != "" || 
        this.questions[this.questionsindex].answerchosen != null && 
        this.questions[this.questionsindex].answerchosen != "") {
        this.proceed = true;
      }
    },
    next() {
      console.log(this.proceed);
      if (!this.introslide) {
        console.log("ZEig her");
        if (this.questionsindex < this.questions.length - 1) {
          this.questionsindex += 1;
        }
      } else {
        this.introslide = false;
      }
      if (this.questions[this.questionsindex].answerchosen == null) {
        this.proceed = false;
      }
    },
  },
};
</script>
<style scoped>
#quiz {
}
#tsparticles {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1000;
  background: linear-gradient(0.01turn, #021126, #02060e);
}
#foreground {
  margin: auto;
  height: 100vh;
  width: calc(100vw - 50px);
  max-width: 1200px;
  color: white;
}

#question-indicator {
  font-size: 20px;
  color: #8b8aa1;
}

#content {
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
  height: calc(100vh - 200px);
}

#quiz-buttons {
  margin-top: 50px;
}

#quiz-buttons button {
  margin-right: 20px;
  margin-bottom: 20px;
}

input{
    width: calc( 100% - 60px);
    text-align: right;
    background: none;
    border: none;
    border-bottom: 2px solid white;
    caret-color: white;
    color: white;
    font-size: 25px;

}

input:focus{
    outline: none;
}

textarea:focus{
    outline: none;
}

textarea{
    width: 100%;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    background-color: #161A21;
    border: none;
    height: 120px;
    resize: none;
}

#currency{
    width: 40px;
    margin-left: 20px;
    font-size: 25px;
    text-align: right;
}
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.area{
    background-color: #161A21;
    border-radius: 10px;
    padding: 15px;
}

/* width */
#scrollbar::-webkit-scrollbar {
  width: 5px;
}

/* Track */
#scrollbar::-webkit-scrollbar-track {
  background: #1A2029;
  border-radius: 10px;
}

/* Handle */
#scrollbar::-webkit-scrollbar-thumb {
  background: #272F3D;
  border-radius: 10px;
}

/* Handle on hover */
#scrollbar::-webkit-scrollbar-thumb:hover {
  background: #303744;
}

.surrounding-topdown{
    transition: all 2s ease;
}

.dropdown{
    width: 100%;
}
.inputfordropdown::before{
    opacity: 0;
}
.inputfordropdown{
    opacity: 1;
}
</style>
