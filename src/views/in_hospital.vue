<template>
    <div>
      <S1 />
      <S2 />
      <S3 />
    </div>
  </template>
  
  <script>
  import S1 from '@/components/IO_hospital/I_hospital/S1.vue';
  import S2 from '@/components/IO_hospital/I_hospital/S2.vue';
  import S3 from '@/components/IO_hospital/I_hospital/S3.vue';
  export default {
    name: 'in_hospital',
    components: {
      S1,
      S2,
      S3,
    },
  };
  </script>