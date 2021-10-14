<template>
  <div>
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
</style>
