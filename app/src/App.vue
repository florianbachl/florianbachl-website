<template>
<span>
    <router-view
        />
        <Footer></Footer>
        </span>
</template>

<script>
import Footer from './components/openaccess/footer'
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style>
html {
  background-color: white;
}
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}

* {
  padding: 0px;
  margin: 0px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

.margin-0{
  margin: auto;
  max-width: 1200px;
}

.margin-0-small{
  margin: auto;
  max-width: 900px;
}

h1{
 font-size: 2em;
}

h2{
  font-size: 1.6em;
}

h3{
  font-size: 1.3em;
}

h4{
  font-size: 1em;
}

p{
  font-size: 15px;
}

.fb{
  display: flex;
}

.fb-fd-r{
  flex-direction: row;
}

.fb-fd-c{
  flex-direction: column;
}

.fb-ai-c{
  align-items: center;
}

.fb-ai-fs{
  align-items: flex-start;
}

.fb-ai-fe{
  align-items: flex-end;
}

.fb-jc-fs{
  justify-content: flex-start;
}

.fb-jc-fe{
  justify-content: flex-end;
}

.fb-jc-c{
  justify-content: center;
}

.fb-jc-sb{
  justify-content: space-between;
}

.fb-ai-s{
  align-items:stretch;
}
.shadow{
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.16);
}

a{
  text-decoration: none;
}

.white{
  background-color: white;
}

.white-t{
  color: white;
}

.grey1{
  background-color: #F5F9FC;
}

.grey1-t{
  color: #F5F9FC;
}

.grey2{
  background-color: #EDF2F4;
}

.grey2-t{
  color: #EDF2F4;
}

.grey3{
  background-color: #999c9e;
}

.grey3-t{
  color: #999c9e;

}


.darkblue{
  background-color: #02060E;
}

.darkblue-t{
  color: #02060E;
}

.margin-20{
  margin: 20px;
}
.fat{
  font-weight: 500;
}

button{
  border-radius: 50px; 
  background: #272f3d;
  color: white;
  border: none;
  padding: 18px 25px;
  line-height: 15px;
  font-size: 15px;
  font-weight: 500; 
  z-index: 0;
  cursor: pointer;
}

.clickable{
  cursor: pointer;
}

button::before{
  opacity: 0;
  position: absolute;
  transition: opacity 2s linear;
  z-index: -1;
}

.sb{
  background: none;
  box-sizing: border-box;
  padding: 17px 23px;
  border: 1px solid white;
}
 

.button-with-icon{
  padding: 15.5px 25px !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.button-with-icon-and-line{
  padding: 13px 22px !important;
}

button .material-icons{
  font-size: 20px;
  margin-left: 10px
}

.pb {
  background: linear-gradient(to right, #340a94 0%, #185cbc 100%)

}

.pb::before{
  opacity: 1;
}

.width-60{
  width: 60%;
}

.width-40{
  width: 40%;
}
.material-icons-small{
  font-size: 18px;
  margin-right: 10px;
}

.logo {
  padding: 60px;
  width: 150px;
  height: auto;
}
</style>
