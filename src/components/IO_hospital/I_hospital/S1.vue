<template>
    <section class="hero">
      <div class="frame31">
        <h1>院内解决方案</h1>
        
        <p1>同步患者信息、用药数据和测量医嘱等，为患者</p1>
        <p2>及医护人员提供有效的质控记录和分析，并自动生成质控月报</p2>
        <button>立即体验</button>
        <div class="img1">
        <img src="@/assets/Frame_9.svg" alt="Center Image">
      </div>
        <div class="frame27">
            <div class="frame21">
                <h2>特色功能</h2>
                <p1>我们提供的解决方案将帮助您以更全面的视角治疗</p1>
            </div>

            <div class="content">
        <div class="item">
          <div class="icon">
            <img src="@/assets/Frame_10.svg" alt="Icon1">
          </div>
          <div class="title">全方位信息管理</div>
          <div class="description">
            内置描述内容内置描述内容内置描述内容<br>

          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/Frame_11.svg" alt="Icon2">
          </div>
          <div class="title">定制化血糖报告</div>
          <div class="description">
            更好的院内及院内治疗体验<br>

          </div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/Frame_12.svg" alt="Icon3">
          </div>
          <div class="title">自动生成质控月报</div>
          <div class="description">
            更好的治疗满意度<br>
          </div>
        </div>
      </div>
      <div class="frame22">
                <h2>核心功能</h2>
                <p1>我们提供的解决方案将帮助您以更全面的视角治疗</p1>
            </div>
            <div class="frame22_1">
              <div class="frame22_1_1">
                <h2>医生下达医嘱</h2>
                <p1>On Call Smart Pro 分析仪主要支持血糖、血酮、尿酸三个参数测试，并会基于测
量结果进行趋势分析、异常值检测提醒和达标值监控，形成定制化的数据报告；
有效实现与医院HIS系统打通，同步患者信息、用药数据和测量医嘱等，为患者
及医护人员提供有效的质控记录和分析，并自动生成质控月报。</p1>
              </div>

            </div>
            <div class="i22icon">
            <img src="@/assets/Frame_13.svg" alt="Icon1">
          </div>
        </div>
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
    /*background: url('@/assets/hero_background.svg') no-repeat center center;*/
    background-size: cover;
    display: flex;
    align-items: center;
    width: 100%; /* 使用100%使其宽度自适应 */
    height: 1100px;
    position: relative;
    opacity: 1; /* 使其完全不透明 */
    background-image: -webkit-linear-gradient(-75deg, #D1E7FE 18.1%, #FFFFFF 63.52%);

  }
  .img1{
  height: 500px;
  margin-left:465px ;
  margin-top: -387px;
}
  
  .frame31 {
    width: 560px; /* 直接设置宽度 */
    height: 108px; /* 直接设置高度 */
    position: absolute; /* 使用绝对定位 */
    top: 194px; /* 距离顶部的距离 */
    left: 18.75%; /* 距离左边的距离 */
    display: flex;
    flex-direction: column; /* 使h1和p垂直排列 */
    
    gap: 26px; /* 设置h1和p之间的间隙 */
  }
  
  .frame31 h1 {
    font-family: Inter;
    font-size: 56px;
    font-weight: 600;
    line-height: 48px;
    text-align: left;
    color: #14315E;
    align-items: flex-start;
  }

  
  .frame31 p1 {
    font-family: Source Sans 3;
    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
    color: #555555;
    margin: 0px;
    align-items: flex-start;

  }

  .frame31 p2 {
    font-family: Source Sans 3;
    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
    color: #555555;
    margin: 0px;
    margin-top: -23px;
    align-items: flex-start;
  }

  .frame31 button {
  
    background: #007EFF;
    color: #FFFFFF;
  border: none;
  padding: 10px 9px;
  border-radius: 5px;
  cursor: pointer;
  align-items: flex-start;

  width: 84px;
height: 44px;

}

.frame27 {
    text-align:center;
    align-items:center;    
    width: 1200px;
    height: 356px;
    gap: 32px;
    opacity: 0px;
    margin-top: 141px;
}

.content {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: -100px;
  }
  
  .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px; /* 调整每个内容块的左右间距 */
  margin-left: 200px;
  margin-top:90px;
  width: 15%;
}
  
  .icon {
    margin-bottom: 20px;
  }

  .title {
    font-family: Source Sans 3;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }

  .description {

    color: #666;
    margin-top: 16px;

    font-family: Source Sans 3;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;

  }

  .frame22{
    margin-top: 100px;
    
  }

  .frame22_1 {
    width: 384px;
    height: 280px;
    gap: 32px;
    opacity: 0px;
    margin-top: 90px;
    text-align: left;
    margin-left: 125px;
  }
  .frame22_1 h2{
    margin-bottom: 15px;
  }
  .i22icon{
    margin-top: -522px;
    margin-left: 410px;
  }

  </style>