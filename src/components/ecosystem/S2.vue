<template>
    <section class="frame34">
      <div class="frame21">
        <h1>通过我们的开放生态系统</h1>
        <h2>将糖尿病管理提升到一个新的水平。</h2>
        <h3>围绕开放健康平台构建的生态系统使iPDM成为可能。该平台实现了广泛的连接，这是iPDM的基本要求，将我们自</h3>
        <h4>己和合作伙伴的多种数字解决方案、设备和服务结合在一起。 这些数字解决方案中的患者数据被收集、</h4>
        <h5>存储并转化为有价值的信息和强大的见解，以便做出及时有效的治疗决策，从而有助于改善结果。</h5>
        
        <div class="background-image"></div>
        <div class="img"></div>
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
        
        background-image: -webkit-linear-gradient(180deg, #D6E9FF 0%, #F4F8FF 47.5%, #D6E9FF 100%);

        width: 100%;
        height: 910px;
        top: 642px;
        padding: 48px 0px 0px 0px;
        gap: 61px;
        opacity: 0px;
    }
    .frame21 h1,h2{
        font-family: Inter;
        font-size: 24px;
        font-weight: 400;
        line-height: 34px;
        text-align: center;
    }
    .frame21 h2{
        margin-bottom: 24px;
    }
    .frame21 h3,h4,h5{
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 34px;
        text-align: center;
        margin: 0px;
    }
    .img{
        margin-left:740px ;
        margin-top: 62px;
        width: 442px;
        height: 441px;
        
        opacity: 1; /* 设置不透明度为20% */
        background: url('@/assets/Frame_6.svg') no-repeat center center;
        background-size: cover;
    }
</style>