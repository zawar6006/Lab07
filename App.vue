<script setup>
//import "@/assets/css/pico.min.css";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main class="container">
    <header class="header-margin">
      <nav style="display: flex; justify-content: center">
        <RouterLink to="/">หน้าแรก</RouterLink>
        <RouterLink to="/courses">รายวิชา</RouterLink>
        <RouterLink to="/enrollments">ลงทะเบียนเรียน</RouterLink>
        <RouterLink to="/mycourse">วิชาที่ลงทะเบียน</RouterLink>
</nav>
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
.header-margin {
  padding: 0.8em;
  display: flex;
  align-items: center;
  background-color: #333;
}

nav > a {
  padding-left: 0.5em;
  padding-right: 0.5em;
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: bold;
}

nav > a.router-link-active {
  color: #00b0ff;
  border-bottom: 2px solid #00b0ff;
}
</style>

