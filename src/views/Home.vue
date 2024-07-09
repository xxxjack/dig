<template>
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiabetesManagementSection />
      <EcosystemSection />
      <AboutSection />
      <bottom />
    </div>
  </template>
  
  <script>
  import HeroSection from '@/components/home/HeroSection.vue';
  import FeaturesSection from '@/components/home/FeaturesSection.vue';
  import DiabetesManagementSection from '@/components/home/DiabetesManagementSection.vue';
  import EcosystemSection from '@/components/home/EcosystemSection.vue';
  import AboutSection from '@/components/home/AboutSection.vue';
  import bottom from '@/components/home/bottom.vue';
  
  export default {
    name: 'Home',
    components: {
      HeroSection,
      FeaturesSection,
      DiabetesManagementSection,
      EcosystemSection,
      AboutSection,
      bottom,
    },
  };
  </script>