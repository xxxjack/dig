import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import DiabetesManagement from '@/views/DiabetesManagement.vue';
import Ecosystem from '@/views/Ecosystem.vue';
import Solutions from '@/views/Solutions.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import out_hospital from '@/views/out_hospital.vue'
import in_hospital from '@/views/in_hospital.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/diabetes-management',
    name: 'DiabetesManagement',
    component: DiabetesManagement,
  },
  {
    path: '/ecosystem',
    name: 'Ecosystem',
    component: Ecosystem,
  },
  {
    path: '/solutions/in-hospital',
    name: 'in_hospital',
    component: in_hospital,
  },
  {
    path: '/solutions/out-hospital',
    name: 'out_hospital',
    component: out_hospital,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;