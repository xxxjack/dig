<template>
  <div class="k">
  <div class="title1">
    <h2>数字化糖尿病管理</h2>
    <p>我们提供的解决方案将帮助您以更全面的视角治疗</p>
  </div>
  
  <section class="diabetes-management">
    <img src="@/assets/Rectangle5.svg" alt="Trapezoid Image">
    <div class="management-content">
      
      <div class="management-text"> 
        <h3>数字化糖尿病管理</h3>
        <p>我们统一见解，治疗的成功取决于一个人的能力和动机。治疗越个性化，结果就越好。因此，我们提供的
解决方案将帮助您以更全面的视角治疗糖尿病，并通
过向患者展示他们的努力正在取得成效来帮助他们保持参与。</p>
        
      </div>

      <div class="management-text-right">
        <h3>数字化糖尿病管理</h3>
        <p1>我们统一见解，治疗的成功取决于一个人的能力和动机。治疗越个性化，结果就越好。
因此，我们提供的解决方案将帮助您以更全面的视角治疗糖尿病，并通过向患者展示
他们的努力正在取得成效来帮助他们保持参与。</p1>
        <p2>
          我们统一见解，治疗的成功取决于一个人的能力和动机。治疗越个性化，结果就越好。
因此，我们提供的解决方案将帮助您以更全面的视角治疗糖尿病，并通过向患者展示
他们的努力正在取得成效来帮助他们保持参与。
        </p2>
        <button>了解更多</button>
      </div>

      
    </div>
    
  </section>
  </div>
</template>

<script>
export default {
  name: 'DiabetesManagementSection',
};
</script>

<style scoped>
.k{
  background-color: #F4F7FC;
  ;
}
.title1{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center; /* 使标题居中 */
  margin-top: 0px;
  margin-bottom: 40px;
}

.title1 h2{
  margin-top: 0px;
  padding-top: 80px;
}

.title1 p{
  
}

.diabetes-management {
  /*background: url('@/assets/Rectangle4.svg') no-repeat center center;
  background-size: cover;
  padding: 60px 20px;
  text-align: center;
  width: 62.5vw;
  height: 472px;
  margin-left: auto;
  margin-right: auto;*/
  
  width: 1200px;
  height: 472px;
  
  display: flex;
  align-items: center;
}
.diabetes-management img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  clip-path: polygon(0% 0%,100% 0%,100% 100%,0% 100%);
  margin-left: 360px;
  z-index: 0;
}

.management-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  margin-left: 0px;
}

.management-text {
  width: 640px;
height: 324px;
padding: 48px 0 0 0;
gap: 16px;
/* 应用圆角到所有四个角 */
border-radius: 16px; 
/* 添加阴影效果 */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
opacity: 1; /* 使其完全不透明，如果需要可见的话 */
background: #ffffff;
margin-left: -1290px;
}

.management-text-right {


width: 322px;
  height: 178px;
  padding: 48px 0 0 0;
  gap: 24px;
  margin-left: 0px;
  margin-top: -166px;
}

.management-image img {
  width: 100%;
  border-radius: 10px;
}

.management-text h3 {
  margin-bottom: 10px;
  color:black;
}

.management-text p {
  margin-bottom: 20px;
  color:black;
}

.management-text-right button {
  background-color: transparent;
  color: #fff;
  border:1px solid white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.management-text-right button:hover {
  background: #0056b3;
}

.management-text-right h3{
  color:#fff;
}
.management-text-right p1{
  color:#fff;
}
.management-text-right p2{
  color:#fff;
}
</style>