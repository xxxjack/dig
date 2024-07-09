<template>
  <section class="hero">
    <div class="frame33">
      <h1>数字化糖尿病管理</h1>
      <p>为慢性疾病的防治提供更多创新性、系统性的智慧医疗解决方案</p>
      <div class="img1"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'S1',
};
</script>

<style scoped>
.hero {
  background: url('@/assets/hero_background.svg') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  width: 100%; /* 使用100%使其宽度自适应 */
  height: 560px;
  position: relative;
  opacity: 1; /* 使其完全不透明 */
}

.frame33 {
  width: 560px; /* 直接设置宽度 */
  height: 108px; /* 直接设置高度 */
  position: absolute; /* 使用绝对定位 */
  top: 194px; /* 距离顶部的距离 */
  left: 18.75%; /* 距离左边的距离 */
  display: flex;
  flex-direction: column; /* 使h1和p垂直排列 */
  align-items: flex-start; /* 左对齐 */
  gap: 26px; /* 设置h1和p之间的间隙 */
}

.frame33 h1 {
  font-family: Inter;
  font-size: 56px;
  font-weight: 600;
  line-height: 48px;
  text-align: left;
  color: #14315E;
}

.frame33 p {
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 34px;
  text-align: left;
}
.img1 {
    position: absolute;
    width: 550px;
    height: 550px;
    gap: 0px;
    opacity: 0px;

    margin-top: -191px;
    margin-left: 660px;

    opacity: 1; /* 设置不透明度为20% */
    background: url('@/assets/home_2.svg') no-repeat center center;
    background-size: cover;
    }
</style>