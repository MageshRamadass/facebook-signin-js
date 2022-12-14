import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app';
// import firebase from 'firebase/compat/app';
/* eslint-disable */
export const initFbsdk = () => {
  return new Promise(resolve => {
    window.fbAsyncInit = function() {
      FB.init({
        appId : '479404944279138',
        cookie : true,
        xfbml : true, // parse social plugins on this page
        version : 'v2.8' // use graph api version 2.8
      });
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  })
}
// console.log('f',firebase)

// const firebaseConfig = {
//   apiKey: "AIzaSyC9WZkncGsa52xKwhZbfLQS3kKGiQ4HOWs",
//   authDomain: "signin-226ac.firebaseapp.com",
//   projectId: "signin-226ac",
//   storageBucket: "signin-226ac.appspot.com",
//   messagingSenderId: "55922781779",
//   appId: "1:55922781779:web:bbfb7a4c07a15fa5e3a0a6"
// };
// firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
