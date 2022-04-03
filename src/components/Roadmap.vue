<template>
  <div class="roadmap">
    <div class="roadmap-item">
      <div class="roadmap-item-content">
        <h3>word</h3>
        <p>wordwordwordwordwordwordwordwordwordvword</p>
      </div>
      <div class="roadmap-item-line"></div>
      <div class="roadmap-item-icon"></div>
      <div class="roadmap-item-date">wordwordword</div>
    </div>
    <div class="roadmap-item">
      <div class="roadmap-item-date">wordwordword</div>
      <div class="roadmap-item-line"></div>
      <div class="roadmap-item-icon"></div>
      <div class="roadmap-item-content">
        <h3>word</h3>
        <p>wordwordwordwordwordwordwordwordwordvwordwordwordwordwordwordwordwordwordwordvwordwordwordwordwordwordwordwordwordwordvword</p>
      </div>
    </div>
    <div class="roadmap-item">
      <div class="roadmap-item-content">
        <h3>word</h3>
        <p>wordwordwordwordwordwordwordwordwordvword</p>
      </div>
      <div class="roadmap-item-line"></div>
      <div class="roadmap-item-icon"></div>
      <div class="roadmap-item-date">wordwordword</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Roadmap",
};
</script>

<style scoped>
.roadmap {
  width: 100%;
}
.roadmap-item {
  display: flex;
  justify-content: center;
}
.roadmap-item-line {
  width: 1px;
  border: 1px solid blue;
  margin: 0 5rem;
}
.roadmap-item-content {
  padding: 2rem;
  border: 1px solid #fff;
  width: 20rem;
}
.roadmap-item-content h3,.roadmap-item-content p {
  /* width: 20rem; */
  word-break: break-all;
  word-wrap: break-word;
  color: #fff;
}
.roadmap-item-date {
  width: 20rem;
  padding: 1rem;
}
.roadmap-item-icon {
  width: 3rem;
  height: 3rem;
  background: chartreuse;
  position: absolute;
  border-radius: 50%;
}
</style>
