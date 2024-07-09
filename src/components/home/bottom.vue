<template>
    <section class="frame30">
        <div class="frame33">
            <h1>精益求精，全全球医疗保健解决方案</h1>
      <p>Striving For Excellence In Offering<br> Global Healthcare Solutions</p>
      <div class="img1"></div>
    </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'bottom',
  };
  </script>
  
  <style scoped>
    .frame30 {
    background: url('@/assets/Frame_24.svg') no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    width: 100%; /* 使用100%使其宽度自适应 */
    height: 288px;
    position: relative;
    opacity: 1; /* 使其完全不透明 */
    margin-top: 0px;
}

.frame33{
    margin-left: 670px;
}
.frame33 h1{
    font-family: Source Sans 3;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
    color: #FFF;

}
.frame33 p{
    color: #FFFFFF;
    font-family: Source Sans 3;
    font-size: 36px;
    font-weight: 400;
    line-height: 46px;
    text-align: center;
    margin-top: 0px;

}
  </style>