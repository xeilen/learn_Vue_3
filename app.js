const app = Vue.createApp({
  data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        {
          title: 'Some title - 1',
          author: 'Author - 1',
          img: 'assets/0F0AF1E9-ABE6-4395-9A74-B4A3A166B11B (1).JPG',
          isFav: true
        },
        {
          title: 'Some title - 2',
          author: 'Author - 2',
          img: 'assets/F6BE9AD3-3BAB-4095-AF90-9A6E2C1BE13D.JPG',
          isFav: false
        },
        {
          title: 'Some title - 3',
          author: 'Author - 3',
          img: 'assets/IMG_2036.jpg',
          isFav: true
        },
      ],
      title: 'The Final Empire',
      author: 'Nazar Kovalenko',
      age: 26,
      x: 0,
      y: 0,
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(evt, data) {
      console.log(evt, evt.type)
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    toggleFavoriteBooks(book) {
      book.isFav = !book.isFav;
    }
  },
  computed: {
    filterBooks() {
      return this.books.filter(book => book.isFav)
    }
  }
});

app.mount('#root')