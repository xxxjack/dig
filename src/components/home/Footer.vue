<template>
    <footer class="footer">
      <div class="footer-content">

        <ul class="footer-links">
          <li><a href="#">关于我们</a></li>
          <li><a href="#">网站声明</a></li>
          <li><a href="#">法律声明</a></li>
          <li><a href="#">隐私政策</a></li>
          <li><a href="#">联系我们</a></li>
        </ul>
        <hr class="long-line">
        <p>本网站包含针对广泛受众的产品信息，可能包含在您所在国家/地区无法访问或无效的产品详细信息或信息。请注意，我们对访问此类信息不承担任何责任，这些信息可能不符合您原籍国的任何法
          律程序、法规、注册或使用。</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    
    color:#1B2944;
    
    padding: 20px;
    text-align: center;

    background: #F4F7FC;

  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  .footer-content p{
    color: #666F80;
    text-align: left;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 60px;
  }
  
  .footer-links li a {
    color:#1B2944;
    text-decoration: none;
  }
  
  .footer-links li a:hover {
    text-decoration: underline;
  }

  .long-line{
    width: 1200px;
    border-top: 1px solid #E7E7E7
  }
  </style>