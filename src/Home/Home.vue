<template>
  <div class="home">
    <Icons class="icon-top" />
    <div class="top-nav">
      <a href="#story"><div>STORY</div></a>
      <a href="#mint"><div>MINT</div></a>
      <div class="top-nav-image">IMAGE</div>
      <a href="#roadmap"><div>ROADMAP</div></a>
      <a href="#team"><div>TEAM</div></a>
    </div>
    <div class="banner">
      <!-- <img src="../assets/banner.jpg" /> -->
      <video src="../assets/banner.mp4" autoplay loop></video>
    </div>
    <div class="story" id="story">
      <div class="story-word">
        <p>some storysome storysome storysome story</p>
        <p>some storysome storysome storysome story</p>
        <p>some storysome storysome storysome story</p>
        <p>some storysome storysome storysome storysome storysome storysome storysome storysome storysome storysome storysome story</p>
        <p>some storysome storysome storysome story</p>
      </div>
      <div class="story-image">
        <img src="../assets/banner.jpg" />
        <img src="../assets/banner.jpg" />
        <img src="../assets/banner.jpg" />
        <img src="../assets/banner.jpg" />
      </div>
    </div>
    <div class="mint" id="mint">
      <el-input-number
        class="mint-item"
        v-model="num"
        :min="1"
        :max="10"
        size="large"
      />
      <el-button class="mint-item" size="large" @click="handleEnter()"
        >Default</el-button
      >
    </div>
    <div class="middle-image">
      <img src="../assets/banner.jpg" />
      <img src="../assets/banner.jpg" />
      <img src="../assets/banner.jpg" />
      <img src="../assets/banner.jpg" />
    </div>
    <div class="roadmap" id="roadmap">
      <!-- <a-timeline mode="alternate" class="roadmap-main">
        <a-timeline-item class="roadmap-main-item" label="123">Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item class="roadmap-main-item">Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item class="roadmap-main-item">Create a services site 2015-09-01Create a services site 2015-09-01Create a services site 2015-09-01Create a services site 2015-09-01Create a services site 2015-09-01Create a services site 2015-09-01Create a services site 2015-09-01Create a services site 2015-09-01Create a services site 2015-09-01</a-timeline-item>
      </a-timeline> -->
      <Roadmap></Roadmap>
    </div>
    <div class="line"></div>
    <div class="footer" id="team">
      <Links/>
      <Icons/>
    </div>
  </div>
</template>

<script>
import Icons from "../components/Icons.vue";
import Roadmap from "../components/Roadmap.vue";
import Links from "../components/Links.vue";

export default {
  name: "Home",
  props: {},
  components: {
    Icons,
    Roadmap,
    Links
  },
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    handleEnter() {
      console.log(this.num);
    },
  },
};
</script>

<style scoped>
.home {
  color: #fff;
  padding: 0 3rem;
  /* max-width: 1920px;
  margin: auto; */
}
.icon-top {
  display: flex;
  justify-content: right;
  /* width: 6rem; */
  margin: 0 5rem;
  padding: 1rem;
}
.top-nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
}
.top-nav div {
  font-weight: 900;
  color: #fff;
}
.top-nav-image {
  width: 300px;
}
.banner {
  margin: 2rem;
}
.banner video {
  width: 95%;
}
.story {
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
}
.story-word {
  font-size: 2rem;
  font-weight: 700;
}
.story-image {
  display: grid;
  grid-template-columns: 20rem 20rem;
  grid-template-rows: 20rem 20rem;
  place-items: center;
}
.story-image img {
  width: 18rem;
  height: 18rem;
}
.mint {
  display: flex;
  justify-content: center;
  padding: 2rem 5rem;
}
.mint-item {
  margin: 0 5rem;
}
.middle-image {
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
}
.middle-image img {
  width: 18rem;
  height: 18rem;
}
.roadmap {
  margin: 5rem 0;
}
.roadmap-main {
  color: #fff;
}
.roadmap-main-item .ant-timeline-item-content {
  border: 1px solid #fff;
}
.line {
  height: 1px;
  border: 1px solid #fff;
}
.footer {
  display: flex;
  justify-content: space-between;
  margin: 2rem;
}
@media screen and (max-width: 1600px) {
  .story-word {
  font-size: 1.2rem;
  font-weight: 700;
  margin: auto;
}
  .story-image {
  display: grid;
  grid-template-columns: 10rem;
  grid-template-rows: 10rem 10rem 10rem 10rem;
  place-items: center;
}
.story-image img {
  width: 8rem;
  height: 8rem;
}
.middle-image {
  width: 60rem;
  display: grid;
  grid-template-columns: 20rem 20rem;
  grid-template-rows: 20rem 20rem;
  place-items: center;
  margin: auto;
}
.middle-image img {
  width: 18rem;
  height: 18rem;
  margin: auto;
}
}
@media screen and (max-width: 1050px) {
.middle-image {
  width: 40rem;
  display: grid;
  grid-template-columns: 10rem 10rem;
  grid-template-rows: 10rem 10rem;
  place-items: center;
  text-align: center;
}
.middle-image img {
  width: 8rem;
  height: 8rem;
  margin: auto;
}
}
</style>
