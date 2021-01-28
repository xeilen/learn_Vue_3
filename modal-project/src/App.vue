<template>
  <h1>{{ title }}</h1>
  <!--  <label for="name">Name Input:</label>-->
  <!--  <input type="text" name="name" id="name" ref="name">-->
  <!--  <button @click="handleClick">Click me!</button>-->
  <div v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  </div>
  <button @click.shift="toggleModal">Open Modal (shift)</button>
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
      title: 'My first Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal
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
  font-size: 30px;
  color: #8feea9;
  border-bottom: 1px solid #42b983;
  padding-bottom: 10px;
}
</style>
