<template>
  <section class="frame30">
    <div class="frame21">
      <h2>我们的理念</h2>
      <p>我们致力于提供高质量的慢性疾病治疗和管理解决方案</p>
    </div>
    
    <div class="feature-cards">
      <div class="feature-card">
        
        <h3>个性化治疗</h3>
        <p>提供个性化的治疗方案，满足患者的不同需求。</p>
        <button class="b1">查看更多</button>
       
      </div>
      <div class="feature-card">
        
        <h3>个性化解决方案</h3>
        <p>提供个性化的解决方案，满足患者的不同需求。</p>
        <button class="b2">查看更多</button>
        <div class="background-image"></div>
      </div>
      <div class="feature-card">
        
        <h3>全面的血糖管理</h3>
        <p>提供全面的血糖管理方案，帮助患者更好地控制血糖。</p>
        <button class="b3">查看更多</button>
        <div class="background-image"></div>
      </div>
      <div class="feature-card">
        
        <h3>院内院外数据打通</h3>
        <p>我们相信，人类的独特性，因此相信糖尿病的个性化治疗。</p>
        <button class="b4">查看更多</button>
        <div class="background-image"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
};
</script>

<style scoped>
.frame30 {
  /* 设置宽度为视口宽度的62.5%，以保持1200px相对于1920px的比例 */
  width: 100%; 
  /* 可选：设置一个最小宽度，以保证在小屏幕上的表现 */
  /*min-width: 1200px; 
   其他样式继续保持 */
  height: 601px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: -20px;
  background-color: #F4F7FC;

}

.frame21 {
  width: 100%; /* 确保它占满整个容器宽度 */
  text-align: center; /* 文字水平居中 */
  
  margin-bottom: 40px;
}
.frame21 h2{
  
  padding-top: 20px;

}

.feature-cards {
  display: flex;
    flex-wrap: nowrap; /* 防止卡片换行 */
    /*justify-content: space-around; /* 卡片之间平均分布 */
    overflow-x: auto; /* 在内容超出容器宽度时提供水平滚动 */
    padding: 20px 0; /* 顶部和底部略微留白 */
    margin-left: 360px;
}

.feature-card {
  /*background: linear-gradient(180deg, #FFFFFF 0%, #DDE9FF 100%);*/
  /*box-shadow: 2px 4px 20px 0px rgba(4,29,77,0.08);*/
  width: 228px; 
  height: 389px;
  padding: 0px 40px 0px 32px;
  position: relative;
  border-radius: 16px; 
  opacity: 1; /* 使卡片可见 */
  background-image: url('@/assets/Group.png');
  
}

/*.background-image {
  position: absolute;
  width: 320.77px;
  height: 250.97px;
  opacity: 0.5; 
  background: url('@/assets/cardback.svg') no-repeat center center;
  background-size: cover;
  transform: rotate(15);
  top: 128px;
  left: 39px;
  right: -125.8px; 
  bottom: -64.44px; 
}*/




.feature-card h3{
  margin-top: 50px;
}

.b1,.b3 {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 140px;
}
.b2,.b4{
  background: #05C78B;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 140px;

}

.feature-card button:hover {
  background: #0056b3;
}
</style>