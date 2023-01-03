<template>
 <router-view></router-view>
  <Navbar/>
</template>

<script setup>
import Navbar from "@/components/navbar";
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
body{
  background-color: #d3d3d3;
}
#app {
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 60px;
}
section{
  margin: 1rem;
  max-width: 100vw;
  overflow-x: hidden;
}
h1{
  color: #565656;
}
</style>
