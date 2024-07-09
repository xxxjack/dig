<template>
    <div class="container">
      <div class="header">
        <h>生态系统糖尿病管理提升到一个新的水平</h>
        <p>多项研究帮助我们开创了iPDM疾病治疗效果的先河</p>
      </div>
      <div class="content">
        <div class="item">
          <div class="icon">
            <img src="@/assets/Frame51.svg" alt="Icon1">
          </div>
          <div class="title">糖尿病的个性化治疗</div>
          <div class="description">
            内置描述内容内置描述内容内置描述内容<br>
            内置描述内容内置描述内容内置描述内容<br>
            内置描述内容内置描述内容内置描述内容<br>
            内置描述内容内置描述内容内置描述内容
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/Frame51_1.svg" alt="Icon2">
          </div>
          <div class="title">院内院外闭环打通</div>
          <div class="description">
            更好的院内及院内治疗体验<br>
            更好的治疗结果<br>
            更高的临床医生效率<br>
            更高的临床医生规范度
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/Frame51_2.svg" alt="Icon3">
          </div>
          <div class="title">加强患者与医生的沟通</div>
          <div class="description">
            更好的治疗满意度<br>
            更好的治疗依从性<br>
            提高患者舒适度<br>
            更好的患者自我效能
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'S4'
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
  
  .header {
    margin-bottom: 40px;
  }
  
  .header h{
    font-family: Source Sans 3;
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    text-align: left;

  }

  .header p {
    font-size: 18px;
    color: #333;
  }
  
  .content {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px; /* 调整每个内容块的左右间距 */
  width: 15%;
}
  
  .icon {
    margin-bottom: 20px;
  }
  
  .icon img {
    width: 80px; /* 根据需要调整图标大小 */
    height: 80px; /* 根据需要调整图标大小 */
  }
  
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .description {
    font-size: 16px;
    color: #666;
    line-height: 1.5;
  }
  </style>