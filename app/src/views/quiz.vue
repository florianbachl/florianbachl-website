<template>
  <div id="quiz">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
    <div id="foreground">
      <div id="content" class="fb fb-fd-c fb-jc-c">
        <div class="fb fb-fd-r fb-ai-c fb-jc-sb" id="question-mobile" v-if="!introslide">
          <div class="width-50">
            <span id="question-indicator">
              Frage 0{{ questionsindex + 1 }} / 0{{ questions.length }}
            </span>
            <h2 class="fat">{{ questions[questionsindex].question }}</h2>
            <div id="quiz-buttons" >
              <span
                v-if="questions[questionsindex].input"
                class="fb fb-fd-r fb-jc-c fb-ai-fs"
              >
                <input
                  type="number"
                  @input="checkvalidity()"
                  class=""
                  v-model="questions[questionsindex].text"
                /><span id="currency">€</span>
                
              </span>
              <div id="vertical-line"  v-if="questions[questionsindex].input"></div>
              <div v-if="questions[questionsindex].textarea" class="area">
                <textarea
                  id="scrollbar"
                  @input="checkvalidity()"
                  v-model="questions[questionsindex].text"
                />
              </div>
              
              <div v-if="questions[questionsindex].input || questions[questionsindex].textarea || questions[questionsindex].text">
                <div class="fb fb-fd-r fb-jc-sb fb-ai-c" id="button-line">
                  <button
                    
                    class= "sb button-with-icon button-with-icon-and-line"
                    id="just-icon"
                    @click="previous()"
                  >
                    <span  class="material-icons">chevron_left</span>
                  </button>
                  
                  <button
                    @click="next()"
                    :disabled="!proceed"
                    :class="{ pb: proceed }"
                  >
                    Weiter
              
                  </button>
                </div>
              </div>
              <button
                    v-if="questions[questionsindex].answers"
                    class= "sb button-with-icon button-with-icon-and-line f-l"
                    id="just-icon"
                    @click="previous()"
                  >
                    <span  class="material-icons">chevron_left</span>
              </button>
              <span
                v-for="(answer, index) in questions[questionsindex].answers"
                :key="answer"
                class="f-l"
              >
                <div
                  class="surrounding-topdown"
                  
                >
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
                  
                </div>
              </span>
            </div>
          </div>

            <Rocketsvg></Rocketsvg>
         
        </div>
        <div v-else>
          <h2>Willkommen!</h2>
          <p>dfhjrhdsgdgnf rdfhfg dfhrjfggsdf</p>
          <button
            class="pb button-with-icon"
            @click="next()"
          >
            Weiter
            <span class="material-icons">arrow_right_alt</span>
          </button>
        </div>
        <!--<div class="fb fb-fd-r fb-jc-sb fb-ai-c">
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
        -->
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
import Rocketsvg from "../components/svgs/rocketsvg";

export default {
  name: "quiz",
  components:{
    Rocketsvg
  },
  data() {
    return {
      questionsindex: 0,
      proceed: true,
      introslide: true,
      questions: [
        {
          question: "Was möchtest du umsetzen?",
          answers: [
            { answer: "Website",  },
            { answer: "Webapp oder Desktopapp",  },
            { answer: "andere",  },
          ],
          answerchosen: null,
          illustrationlink: null,
        },
        {
          question: "Was ist das Ziel deines Projektes?",
          answers: [
            {
              answer: "Kosten oder Zeit im Unternehmen sparen",
             
            },
            { answer: "Neue Kunden gewinnen",},
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
  created() {
    this.$store.dispatch("setLogoWhite", true);
  },
  methods: {
    setAnswer(index, question) {
      question.answerchosen = index;
      this.proceed = true;
      this.next();
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
      if (
        (this.questions[this.questionsindex].text != null &&
          this.questions[this.questionsindex].text != "") ||
        (this.questions[this.questionsindex].answerchosen != null &&
          this.questions[this.questionsindex].answerchosen != "")
      ) {
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

input {
  width: calc(100% - 60px);
  text-align: right;
  background: none;
  border: none;
  caret-color: white;
  color: white;
  font-size: 25px;
}

input:focus {
  outline: none;
}

textarea:focus {
  outline: none;
}

textarea {
  width: 100%;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  background-color: #161a21;
  border: none;
  height: 120px;
  resize: none;
}

#currency {
  width: 40px;
  margin-left: 20px;
  font-size: 25px;
  text-align: right;
}
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.area {
  background-color: #161a21;
  border-radius: 10px;
  padding: 15px;
}

/* width */
#scrollbar::-webkit-scrollbar {
  width: 5px;
}

/* Track */
#scrollbar::-webkit-scrollbar-track {
  background: #1a2029;
  border-radius: 10px;
}

/* Handle */
#scrollbar::-webkit-scrollbar-thumb {
  background: #272f3d;
  border-radius: 10px;
}

/* Handle on hover */
#scrollbar::-webkit-scrollbar-thumb:hover {
  background: #303744;
}

.surrounding-topdown {
  transition: all 2s ease;
}


#just-icon{
  padding: 13px;
  margin: 0px;
}

#just-icon .material-icons{
  margin: 0px;
}

#button-line{
  margin-top: 2em;
}

#vertical-line{
  border-bottom: 2px solid white;
  width: 100%;
}

#button-line button{
  margin: 0px;
}

#rocketsvg{
  width: 40%;
}

@media screen and (max-width: 768px) {
  #question-mobile{
    flex-direction: column-reverse;
  }

#rocketsvg{
  width: 50%;
}
.width-50{
width: 50%;
}
}
</style>
