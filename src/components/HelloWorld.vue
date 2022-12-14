<template>
  <div class="signup-buttons">
    <!-- <div id="fb-root"></div> -->
    <v-btn>
      <a href="#" class="facebook-signup" @click.prevent="loginWithFacebook">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#3578E5"
        >
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          />
        </svg>
        Facebook
      </a></v-btn
    >
  </div>
</template>

<script>
import axios from 'axios';
import { initFbsdk } from '@/main.js'
export default {
  name: 'login_signup_social',
  mounted () {
    initFbsdk()
  },
  methods: {
    loginWithFacebook () {
      window.FB.login(response => {
        console.log('fb response', response)
        this.accessToken = response
        this.getUserDetails()
      }, this.params)
    },
    getUserDetails() {
      
            var config = {
              method: 'post',
              url: 'https://graph.facebook.com/me?fields=email,name,gender,about&access_token='+this.accessToken.authResponse.accessToken,
              headers: { }
            };

            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });

    }
  }
}
</script>

<style>
</style>