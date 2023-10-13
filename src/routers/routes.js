import Home from '../views/Home.vue';
import Step1 from '../components/Step1.vue';
import Step2 from '../components/Step2.vue';
import Step3 from '../components/Step3.vue';
import Step4 from '../components/Step4.vue';
import Step5 from '../components/Step5.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '1',
        name: 'step 1',
        component: Step1,

      },
      {
        path: '2',
        name: 'step 2',
        component: Step2,

      },
      {
        path: '3',
        name: 'step 3',
        component: Step3,

      },
      {
        path: '4',
        name: 'step 4',
        component: Step4
      },
      {
        path: '5',
        name: 'step 5',
        component: Step5,

      },
    ]
  },
]