<template>
  <div id="app">
    <Agenda />
  </div>
</template>
<script>
import Agenda from "@/components/Agenda";

export default {
  name: "App",
  components: {
    Agenda,
  },
};
</script>
<style>
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f1f4f6;
}
#app {
  background-color: #f1f4f6;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
