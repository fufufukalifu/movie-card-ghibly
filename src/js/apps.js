// fetching data from ghibli
new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get("https://ghibliapi.herokuapp.com/films/")
    .then(response => {this.results = response.data;
    		 console.log(response.data);
    })
  }
});