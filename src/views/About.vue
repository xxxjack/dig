<template>
    <div>
      <S1 />
      <S2 />
    </div>
  </template>
  
  <script>
  import S1 from '@/components/About/S1.vue';
  import S2 from '@/components/About/S2.vue';
  export default {
    name: 'About',
    components: {
      S1,
      S2,
    },
  };
  </script>