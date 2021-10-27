<template>
  <div id="particles-js">
    <div id="navbar" class="fb fb-fd-r fb-jc-sb fb-ai-c shadow white">
      <div class="fb fb-fd-r fb-jc-fs fb-ai-c">
        <router-link to="/login" class="fb fb-fd-r fb-ai-c">
          <img src="../assets/logo2.png" alt="Logo" />
          <h2>Bachl Nachhilfe</h2>
        </router-link>
      </div>
      
    </div>
    <div class="back fb fb-fd-c fb-ai-fs fb-jc-c">
      <h1>Admin Login</h1>
    </div>
    <form @submit.prevent="signIn">

      <div>
        <label for="email">Email</label>
        <input
          v-model="loginObj.email"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
            <div>
        <label for="password">Passwort</label>
        <input
          v-model="loginObj.password"
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <button type="submit">Anmelden</button>
    </form>
  </div>
  
</template>
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});</script>
<script>

export default {
  name: "login",
  data() {
    return {
      loginObj:{
        email: '',
        password: '',
      }
    };
  },
  computed:{
    user(){
      return this.$store.getters.getUser
    }
  },
  watch:{
    user (value){
      if(value != undefined && value != null){
        this.$router.push('/dashboard')
      }
    }
  },
  methods: {
    async signIn() {
      this.$store.dispatch('signIn',this.loginObj)
    },
  },
};
</script>
<style >
.back {
  height: 70vh;
  width: calc(100% - 100px);
  padding-left: 100px;
  background-image: url("../assets/backgrounds/back1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
h2 {
  font-weight: 500;
  margin-right: 60px;
}

img {
  width: 40px;
  height: 40px;
  margin-top: 0px;
  margin-right: 15px;
  border-radius: 50%;
}

.sb {
  padding-right: 13px;
  font-size: 15px;
}

.pb {
  padding-right: 15px;
  font-size: 15px;
}

.mainpage-button {
  margin-top: 20px;
  margin-left: 0px;

  height: calc(100% - 20px);
}

.mainpage-button p {
  font-size: 17px;
}

body {
  margin: 0;
  background-color: #17182f;
}

canvas {
  display: block;
  vertical-align: bottom;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
