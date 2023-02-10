<template>
  <div class="container">
    <h3>วิชาที่ลงทะเบียนทั้งหมด</h3>
    <table>
      <thead>
        <tr>
          <th>รหัสวิชา</th>
          <th>ชื่อวิชา</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(subject, index) in myEnrollment" :key="index">
          <td>{{ subject.course_id }}</td>
          <td>{{ subject.course_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { useEnrollment } from "../stores/useEnrollment";

const enrollmentList = useEnrollment();

const myEnrollment = enrollmentList.getState;
</script>
<style scoped>
.container {
  background-color: #f2f2f2;
  margin-top: 1em;
  padding: 1em;
}

table {
  width: 100%;
}

th {
  text-align: left;
  padding: 0.5em;
}

td {
  padding: 0.5em;
}
</style>
