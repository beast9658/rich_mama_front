<template>
  <div class="icon">
    <div><img src="../assets/icon2.png"></div>
    <div><img src="../assets/icon3.png"></div>
    <div><img src="../assets/icon4.png"></div>
    <div><img src="../assets/icon1.png"></div>
  </div>
</template>

<script>
export default {
  name: 'Icons',
}
</script>

<style scoped>
.icon {
  display:flex;
  justify-content: center;
  color: #fff;
}
.icon div,.icon div img{
  width: 1rem;
  height: 1rem;
}
.icon div {
  margin: 10px;
}
</style>
