<template>
  <div style="background-color: #f2f2f2">
    <h4 style="margin: 10px">ค้นหาวิชาที่ลงทะเบียน</h4>
    <form style="margin: 10px" @submit.prevent="addToBasket">
      <input type="text" v-model="courseID" placeholder="รหัสวิชา" />
      <button type="submit">ลงทะเบียน</button>
    </form>

    <article
      style="margin: 10px"
      v-if="(x = courseData.find((elem) => elem.course_id == courseID))"
    >
      <div style="border: 1px solid #ccc; padding: 10px">
        <p style="margin: 0">
          <b>รหัสวิชา : </b> <span>{{ x.course_id }}</span>
        </p>
        <p style="margin: 0">
          <b>ชื่อวิชา : </b> <span>{{ x.course_name }}</span>
        </p>
        <p style="margin: 0">
          <b>หน่วยกิต : </b><span>{{ x.credit }}</span>
        </p>
      </div>
    </article>
    <article style="margin: 10px" v-else>
      <p style="margin: 0">ไม่พบผลการค้นหา</p>
    </article>

    <hr style="margin: 10px" />
    <div>
      <h4 style="margin: 10px">รายวิชารอยืนยัน</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 10px">
        <thead>
          <th style="border: 1px solid #ccc; padding: 10px">รหัสวิชา</th>
          <th style="border: 1px solid #ccc; padding: 10px">ชื่อวิชา</th>
          <th style="border: 1px solid #ccc; padding: 10px">หน่วยกิต</th>
        </thead>
        <tbody>
          <tr v-for="(course, index) in courseInfo" :key="index">
            <td style="border: 1px solid #ccc; padding: 10px ; text-align: center">{{ course.course_id }}</td>
            <td style="border: 1px solid #ccc; padding: 10px ; text-align: center">
              {{ course.course_name }}
            </td>
            <td style="border: 1px solid #ccc; padding: 10px; text-align: center;">
              {{ course.credit }}
            </td>
            <td><button @click="removeFromBasket(index)">ลบ</button></td>
          </tr>
        </tbody>
      </table>
      <button @click="enrollCourse">ยืนยันการลงทะเบียน</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import courseData from "../json/cs_courses.json";
import { useEnrollment } from "../stores/useEnrollment";

const enrollment = useEnrollment();

const courseID = ref("");
let courseInfo = ref([]);
function addToBasket() {
  const data = courseData.find((elem) => elem.course_id == courseID.value);
  //console.log(data);
  if (data) {
    courseInfo.value.push(data);
    courseID.value = "";
  } else {
    alert("โปรดกรอกรหัสวิชาที่ถูกต้อง");
  }
}
function removeFromBasket(course_key) {
  if (confirm("ต้องการลบรายวิชาหรือไม่ ?")) {
    courseInfo.value.pop(course_key);
  }
}
function enrollCourse() {
  if (courseInfo.value.length != 0) {
    courseInfo.value.forEach((subject) => {
      enrollment.storeState(subject);
    });
    console.log(enrollment.getState);
    courseInfo.value = [];
    alert("ลงทะเบียนแล้ว โปรดไปที่หน้า วิชาที่ฉันลงทะเบียน");
  } else {
    alert("โปรดเลือกวิชาก่อนทำการลงทะเบียน");
  }
}
</script>
<style scoped>
.border {
  margin: 20px auto;
  padding: 0.5em;
  border: 3px solid gray;
}
</style>
