<template>
  <div style="background-color: lightgray;">
    <h3 style="padding: 10px;margin: 10px 0;">รายวิชาทั้งหมด</h3>
    <hr style="margin: 10px 0;" />
    <table style="width: 100%; border-collapse: collapse;">
      <tr style="background-color: lightblue;">
        <th style="padding: 10px; text-align: left">รหัสวิชา</th>
        <th style="padding: 10px; text-align: left">ชื่อวิชา</th>
      </tr>

      <tr v-for="(course, index) in courses" :key="index" style="background-color: white;">
    <td style="padding: 10px; text-align: left">{{ course.course_id }}</td>
    <td style="padding: 10px; text-align: left">
      {{ course.course_name }}
    </td>
  </tr>
</table>
</div>
</template>
<script setup>
import courses from "../json/cs_courses.json";
</script>
<style></style>
