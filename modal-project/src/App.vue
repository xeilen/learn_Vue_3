<template>
  <h1>{{ title }}</h1>
  <!--  <label for="name">Name Input:</label>-->
  <!--  <input type="text" name="name" id="name" ref="name">-->
  <!--  <button @click="handleClick">Click me!</button>-->
  <teleport to=".modal__teleport" v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  </teleport>
  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>My second Modal</h1>
      <p>This is the paragraph for the second modal</p>
      <template v-slot:links>
        <a href="#">This is the link</a>
        <a href="#">This is the another link</a>
      </template>
    </Modal>
  </div>
  <button @click.shift="toggleModal">Open Modal (shift)</button>
  <button @click.shift="toggleModalTwo">Open Second Modal (shift)</button>
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
      showModal: false,
      showModalTwo: false
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
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modal {
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
