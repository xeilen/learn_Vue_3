const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Final Empire',
      author: 'Nazar Kovalenko',
      age: 26
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    }
  }
});

app.mount('#root')