<template>
    <div>
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      <S5 />
    </div>
  </template>
  
  <script>
  import S1 from '@/components/IO_hospital/O_hospital/S1.vue';
  import S2 from '@/components/IO_hospital/O_hospital/S2.vue';
  import S3 from '@/components/IO_hospital/O_hospital/S3.vue';
  import S4 from '@/components/IO_hospital/O_hospital/S4.vue';
  import S5 from '@/components/IO_hospital/O_hospital/S5.vue';
  export default {
    name: 'out_hospital',
    components: {
      S1,
      S2,
      S3,
      S4,
      S5,
    },
  };
  </script>