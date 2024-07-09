<template>
    <section class="frame34">
      <div class="frame21">
        <h1>平台同步患者在APP记录数据</h1>
        <h2>On Call Diabetes Care 平台是一款数据管理后台系统，旨在家庭和专业环境中使用，帮助糖尿病患者及其医疗保健专业人员审查、分析和评估设备数据，以支持有效的糖尿病管理计划。它满足了糖尿病管理的未来发展需求，在HCP领域的维护和开发中发挥着重要作用。<br>
该系统主要用于各医疗机构医护人员测试血糖等数据，要求操作人员有医学方面的背景或者经过相关知识培训，能比较熟练操作浏览器功能。<br>
平台会同步患者在OnCallCareAPP上的记录（血糖、血压、体重、脉搏、饮食、降糖药、胰岛素等）数据，帮助医生迅速掌握患者近况，并进行分析和评估数据。医生可以与患者直接讯息沟通，医生也可以创建群组，打造医生与患者、患者与患者之间的直接联系。
</h2>
        
        <div class="background-image"></div>
        <div class="img1"></div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'S5',
  };
  </script>
  
  <style scoped>
    .frame34 {
        


        width: 100%;
        height: 570px;
        top: 642px;
        padding: 48px 0px 0px 0px;
        gap: 61px;
        opacity: 0px;

    }
    .frame21 h1{
        font-family: Source Sans 3;
        font-size: 32px;
        font-weight: 600;
        line-height: 40px;
        text-align: left;
        margin-left: 481px;
        width: 462px;
        margin-top: 80px;

    }
    .frame21 h2{
      color: #666;
        font-family: Source Sans 3;
        font-size: 15px;
        font-weight: 400;
        line-height: 26px;
        text-align: left;
        margin-top: 32px;

        width: 462px;
        margin-bottom: 16px;
        margin-left: 481px;
    }

    .img1 {
    position: absolute;
    width: 1004px;
height: 670px;
gap: 0px;
opacity: 0.1px;


margin-top: -502px;
margin-left: 961px;

    opacity: 1; /* 设置不透明度为20% */
    background: url('@/assets/Frame_22.svg') no-repeat center center;
    background-size: cover;
    }

</style>