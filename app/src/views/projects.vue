<template>
  <div id="projects" class="margin-0-small">
    <div id="project-header">
      <img src="@/assets/logos/logo_color.svg" alt="logo" class="logo" />
      <h1>Wilkommen im <span class="fat">Projekt-Portfolio</span></h1>
      <h3>
        Professionelle <span class="fat">Applikationen</span> und
        <span class="fat">Webdesign</span> für die
        <span class="fat">Zukunft</span>
      </h3>
    </div>
    <div
      v-for="project in projects"
      :key="project.name"
      class="grey1 project"
      @mouseenter="sethover(project, true)"
      @mouseleave="sethover(project, false)"
    >
      <div id="inner" class="fb fb-fd-r fb-jc-sb fb-ai-c">
        <transition name="expand">
          <div v-if="project.hoverbool" id="expand-text">
            <h2>{{ project.name }}</h2>
            <p>{{ project.text }}</p>
            <a :href="project.link" target="_blank"
              ><button class="pb button-with-icon">
                Zur Website
                <span class="material-icons">arrow_right_alt</span>
              </button></a
            >
          </div>
        </transition>
        <img
          :src="require('@/assets/backgrounds/' + project.img)"
          alt="projectpic"
          width="1920"
          height="1080"
          class="project-img shadow"
          :class="{ active: project.hoverbool }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
  data() {
    return {
      projects: [
        {
          name: "Bachl Nachhilfe",
          text: "Website, Webapp für interne Organisation, Social Media",
          hoverbool: false,
          link: "//www.bachl-nachhilfe.at",
          img: "test.jpg",
        },
        {
          name: "Bachl Nachhilfe",
          text: "Website, Webapp für interne Organisation, Social Media",
          hoverbool: false,
          link: "//www.bachl-nachhilfe.at",
          img: "test.jpg",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    sethover(project, bool) {
      project.hoverbool = bool;
    },
  },
};
</script>
<style >
#project-header {
  text-align: center;
}

#projects h1 {
  margin-bottom: 30px;
}

.project-img {
  transition: 1s;
  width: 100%;
  height: 100%;
  z-index: 46;
}

.active {
  transform: scale(0.5) translate(45%, 0%);
}

.expand-enter-active,
.expand-leave-active {
  transition: opacity 1s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
}

.expand-enter-active {
  transition-delay: 0.4s;
}

.project {
  position: relative;
  margin-top: 130px;
  margin-bottom: 130px;
  width: 100%;
  padding-top: 56.25%;
}

#inner {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  top: 0;
}

#expand-text {
  position: absolute;
  width: calc(45% - 80px);
  padding: 40px;
  z-index: 45;
}

#expand-text p {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
