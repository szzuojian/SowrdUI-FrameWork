<template>
  <div v-if="store.state.login">
    <MainFrame></MainFrame>
  </div>
  <div v-else>
    <Login></Login>
  </div>
</template>

<script>
import MainFrame from './components/MainFrame'
import Login from './components/Login'
export default {
  name: 'App',
  components: {
    MainFrame,
    Login
  }
}
</script>

<style>
  body{
    height: 100%;
    overflow-x: hidden;
    padding: 0px;
    margin: 0px;
  }
</style>
