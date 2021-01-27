<template>
  <h1>{{ title }}</h1>
<!--  <label for="name">Name Input:</label>-->
<!--  <input type="text" name="name" id="name" ref="name">-->
<!--  <button @click="handleClick">Click me!</button>-->
  <Modal />
</template>

<script>
import Modal from './components/Modal'
export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My first Vue App :)'
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: #19592c;
  border-bottom: 1px solid #42b983;
  padding-bottom: 10px;
}
</style>
