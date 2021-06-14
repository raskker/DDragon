<template>
<section class="p-5">
  <div class="container">
    <div class="row">
      <div class="col-md m-3" v-for="c in champions" v-bind:key="c.key">
        <div class="card bg-dark text-light">
          <div class="card-body text-center" >
            <img :src="c.icon" alt="">
            <h3 class="card-title mb-3">{{ c.name }}</h3>
            <p class="card-text pb-2">
              {{c.description}}
            </p>
            <a href="" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import championData from "../assets/champions.json";
export default {
  name: "HelloWorld",
  data() {
    return {
      champions: championData,
      champss: {},
    };
  },
  methods: {
    imgsrc(icon) {
      return icon;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card {
  min-height: 400px;
}
</style>
