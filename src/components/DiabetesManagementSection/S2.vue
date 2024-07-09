<template>
    <section class="frame34">

      <div class="frame21">
        <!--
       <div class="node">
            <h1>“</h1>
        </div>-->
        <h1>糖尿病是无法缓解的</h1>
        <p>OnCallCare致力于打造“生物物联网+智慧医疗+健康管理方式引导”的糖尿病及相关慢病数字管理模式为全球慢性疾病的防治提供更多创新性、系统性的智慧医疗解决方案</p>
        <h3>”</h3>
        <div class="background-image"></div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'S2',
  };
  </script>
  
  <style scoped>
    .frame34 {
        background-color:#EEF7FF;
        width: 100%;
        height: 640px;
        top: 642px;
        padding: 48px 0px 0px 0px;
        gap: 61px;
        opacity: 0px;
    }

    .frame21 {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        width: 889px;
        
    }
    .frame21 h1 {
        font-family: Source Sans 3;
        font-size: 32px;
        font-weight: 400;
        line-height: 40px;
        margin-top: 0px;
    }
    .frame21 p{
        font-family: Inter;
        font-size: 20px;
        font-weight: 400;
        line-height: 34px;
        text-align: left;
        margin-top: 40px;
    }
    .node h1{
        font-family: Source Sans 3;
        font-size: 128px;
        font-weight: 400;
        weight:20px;
        text-align: left;
        margin-left: 26%;
        margin-top: 28px;

    }
    .frame21 h3{

    }
    .background-image {
    position: absolute;
    width: 800px;
    height: 429px;

    opacity: 1; /* 设置不透明度为20% */
    background: url('@/assets/imageS2.svg') no-repeat center center;
    background-size: cover;
    }
  </style>