<template>
    <div>
      <S1 />
      <S2 />
      <S3 />
    </div>
  </template>
  
  <script>
  import S1 from '@/components/ecosystem/S1.vue';
  import S2 from '@/components/ecosystem/S2.vue';
  import S3 from '@/components/ecosystem/S3.vue';
  export default {
    name: 'Ecosystem',
    components: {
      S1,
      S2,
      S3,
    },
  };
  </script>