<template>
    <div>
      <S1 />
      <S2 />
      <S3 />
      <S4 />
    </div>
</template>
  
<script>
import S1 from '@/components/DiabetesManagementSection/Section1.vue';
import S2 from '@/components/DiabetesManagementSection/S2.vue';
import S3 from '@/components/DiabetesManagementSection/S3.vue';
import S4 from '@/components/DiabetesManagementSection/S4.vue';
export default {
    name: 'DiabetesManagementSection',
    components: {
      S1,
      S2,
      S3,
      S4,
    },
  };
</script>