<script setup>
import news from "../json/news.json";
</script>

<template>
  <div class="content" style="background-color: lightgray">
    <div style="padding: 1.5em;">
      <h1 class="m-0" style="color: black">
        ข่าวสารล่าสุด
      </h1>
      <h3 class="m-0 color-gray" style="color: black">สาขาวิชาวิทยาการคอมพิวเตอร์</h3>
    </div>
    <hr />
    <article>
  <table style="width: 100%;">
    <tr>
      <th style="text-align: left; color: black; padding: 0.5em;">วันที่</th>
      <th style="text-align: left; color: black; padding: 0.5em;">หัวข้อข่าว</th>
    </tr>

    <tr v-for="news_content in news" :key="news_content.newsId">
      <td style="text-align: left; color: black; padding: 0.5em;">{{ news_content.News_Date }}</td>
      <td style="text-align: left; color: black; padding: 0.5em;">
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
  padding-bottom: 2em;
  padding-left: 2em;
}
ma .m-0 {
  margin: unset;
}
</style>
