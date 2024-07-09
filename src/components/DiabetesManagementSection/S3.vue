<template>
    <div class="container">
      <div class="header">
        <p>OnCallCare致力于打造“生物物联网+智慧医疗+健康管理方式引导”的糖尿病及相关慢病
            数字管理模式为慢性疾病的防治提供更多创新性、系统性的智慧医疗解决方案</p>
      </div>
      <div class="main">
        <div class="icon-container">
            <div class="line1">
                <img src="@/assets/Frame_3.svg" alt="Icon">
            </div>
        </div> 
        <div class="content">
          <div class="left">
            <div class="scene-title">院外场景</div>
            <div class="scene-item">On Call Care APP</div>
            <div class="scene-item">On Call Care 平台</div>
            <div class="scene-item">血糖仪</div>
          </div>
          <div class="center">
                <img src="@/assets/Frame_4.svg" alt="Center Image">
          </div>
          <div class="right">
            <div class="scene-title">住院场景</div>
            <div class="scene-item">院内管理平台</div>
            <div class="scene-item">SmarPro APP</div>
          </div>
        </div>
      </div>
      <div class="txt1">患者</div>
      <div class="txt2">院内院外一体化</div>
      <div class="txt3">院外</div>
      <div class="txt4">院内</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'S3'
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    width: 100%;
    height: 691px;
    padding: 48px 0px;
    gap: 40px;
    position: relative;
  }
  
  .header {
    margin-bottom: 20px;
  }
  
  .header p {
    font-size: 16px;
    color: #333;
  }
  
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .icon {
    margin-bottom: 20px;
  }
  
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    /*position: relative;*/
  }
  
  .left {
    flex: 1; /* 使用flex属性使左侧内容均匀分布 */
    margin-right: 70px; /* 调整左侧内容与中心内容之间的间距 */
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* 将内容对齐到右侧 */
    gap: 24px;
  }
  
  .right {
    flex: 1; /* 使用flex属性使右侧内容均匀分布 */
    margin-left: 54px; /* 调整右侧内容与中心内容之间的间距 */
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 将内容对齐到左侧 */
    gap: 24px;
  }
  
  .scene-title, .scene-item {
    font-size: 16px;
    background-color:#F3F8FE;

    padding: 8px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px; /* 设置相同的宽度 */
    height: 50px; /* 设置相同的高度 */
    box-sizing: border-box; /* 确保padding不会影响宽度和高度 */
  }
  
  .scene-title {
    background-color: #007bff;
    color: white;
  }
  
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto; /* 固定中间内容的大小 */
  }

  .txt1 {
    position: absolute;  /* 使用绝对定位 */
    bottom: 470px;       /* 定位元素的底部距离容器底部20px */
    left: 50%;          /* 定位元素的左边距离容器左边50% */
    transform: translateX(-50%);
    display: flex;
  }

  .txt2 {
    position: absolute;  
    bottom: 160px;       
    left: 50%;          
    transform: translateX(-50%);
    display: flex;
  }

  .txt3 {
    position: absolute;  
    bottom: 228px;       
    left: 608px;          
    transform: translateX(-50%);
  }

  .txt4 {
    position: absolute;  
    bottom: 228px;       
    left: 61.5%;          
    transform: translateX(-50%);
  }
  </style>