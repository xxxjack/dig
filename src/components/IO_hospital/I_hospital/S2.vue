<template>
    <section class="frame34">

      <div class="frame21">
        <!--
       <div class="node">
            <h1>“</h1>
        </div>-->
        <h1>护士根据医嘱测量患者血糖</h1>
        <p>On Call Smart Pro 分析仪主要支持血糖、血酮、尿酸三个参数测试，并会基于测<br>
量结果进行趋势分析、异常值检测提醒和达标值监控，形成定制化的数据报告；<br>
有效实现与医院HIS系统打通，同步患者信息、用药数据和测量医嘱等，为患者<br>
及医护人员提供有效的质控记录和分析，并自动生成质控月报。</p>
        <p>医护通的功能及优势：<br>
1.支持分屏测量，可同时测试多种参数；<br>
2.支持RJ-45、USB、蓝牙、无线四种传输方式；<br>
3.支持USB、底座两种充电方式；<br>
4.全新的电路设计，使得数据传输更稳定；<br>
5.独特的隔热设计，使得产品测量准确度、稳定性更强。</p>
        <h3></h3>
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
        background: url('@/assets/Component_2.svg') no-repeat center center;
        width: 100%;
        height: 640px;
        top: 642px;
        padding: 48px 0px 0px 0px;
        gap: 61px;
        opacity: 0px;
        margin-top: 550px;
    }

    .frame21 {
        margin-left: 1034px;
        margin-right: 360px;
        margin-top: 80px;
        text-align: center;
        width: 889px;
        
    }
    .frame21 h1 {
        font-family: Source Sans 3;
font-size: 32px;
font-weight: 600;
line-height: 40px;
text-align: left;

    }
    .frame21 p{
      color: #666;
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 34px;
        text-align: left;
        margin-top: 20px;
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
    width: 394.69px;
height: 700px;
gap: 0px;
opacity: 0px;
margin-top: -540px;
margin-left: -650px;

    opacity: 1; /* 设置不透明度为20% */
    background: url('@/assets/Frame_14.svg') no-repeat center center;
    background-size: cover;
    }
  </style>