<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button v-bind:disabled="!isIdValidation" type="submit">Join</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      //log
      logMessage: '',
    };
  },
  computed: {
    isIdValidation() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      console.log('submit');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData); // Destructuring
      this.logMessage = `${data.username}님이 가입되었습니다.`;
      //template literal(백틱문법) 자바스크립변수를 문자열과 합침
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
