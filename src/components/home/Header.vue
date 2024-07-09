<template>
  <header>
    <nav class="navbar">
      <div class="frame2">
        <img src="@/assets/ic_on_call_logo.svg" alt="Logo" class="logo" />
    
        <ul class="nav-links">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/diabetes-management">数字化糖尿病管理</router-link></li>
          <li><router-link to="/ecosystem">生态系统</router-link></li>
          
          <li class="dropdown">
          <router-link>解决方案</router-link>
          <ul class="dropdown-content">
            <li><router-link to="/solutions/in-hospital">院内解决方案</router-link></li>
            <li><router-link to="/solutions/out-hospital">院外解决方案</router-link></li>
          </ul>
        </li>
        

          <li><router-link to="/about">关于我们</router-link></li>
          <li><router-link to="/contact">简体中文</router-link></li>
        </ul>
      </div>    
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: #fff;
}
.frame2{
  width: 1199px;
  height: 32px;
  top: 21px;
  
  gap: 120px;
  opacity: 0px;
  display: flex;


}

.logo {
  left: 360px;
  width: 174.22px;
  height: 32px;
  display: flex;      
}

.nav-links {
  list-style: none;
  display: flex;

  width: Hug (672px)px;
  height: Hug (24px)px;
  gap: 80px;
  opacity: 0px;
  margin: 0;
  padding: 0;

}

.nav-links li a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  display: flex;
}

.nav-links li a:hover{
  color: #007EFF;


}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  /*box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);*/
  z-index: 1;
  /*min-width: 160px;*/
}

.dropdown-content li {
  width: 100%;
}

.dropdown-content li a {
  padding: 10px 20px;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>