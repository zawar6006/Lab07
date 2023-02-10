<script setup>
import news from "../json/news.json";
</script>

<template>
  <div class="content">
    <div style="padding-top 1.5em;padding-bottom: 1.5em;">
      <h1 class="m-0">ยินดีต้อนรับเข้าสู่ระบบลงทะเบียนเรียนออนไลน์</h1>
      <h3 class="m-0 color-gray">สาขาวิชาวิทยาการคอมพิวเตอร์</h3>
    </div>

    <hr />

    <h5>ข่าวสารล่าสุด</h5>
    <article>
      <table>
        <tr>
          <th>วันที่</th>
          <th>หัวข้อข่าว</th>
        </tr>

        <tr v-for="news_content in news" :key="news_content.newsId">
          <td style="text-align: left">{{ news_content.News_Date }}</td>
          <td style="text-align: left">
            {{ news_content.News_Title }}
          </td>
        </tr>
      </table>
    </article>
  </div>
</template>
<style scoped>
.content {
  margin-top: 1em;
  margin-bottom: 1em;
}
.m-0 {
  margin: unset;
}

.color-gray {
  color: gray;
}
</style>
