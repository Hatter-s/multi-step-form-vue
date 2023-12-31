import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    formVal: {
      name: '',
      email: '',
      phone: '',
      plan: 'arcade',
      'add-ons':[],
      billed: 'monthly'
    },
    'price-name': {
      monthly: {
        arcade: '$9/mo',
        advanced: '$12/mo',
        pro: '$15/mo',
        'online-service': '+$1/mo',
        'larger-storage': '+$2/mo',
        'customizable-profile': '+$2/mo'
      },
      yearly: {
        arcade: '$90/yr',
        advanced: '$120/yr',
        pro: '$150/yr',
        'online-service': '+$10/yr',
        'larger-storage': '+$20/yr',
        'customizable-profile': '+$20/yr'
      }
    },
    price: {
      monthly: {
        arcade: 9,
        advanced: 12,
        pro: 15,
        'online-service': 1,
        'larger-storage': 2,
        'customizable-profile': 2
      },
      yearly: {
        arcade: 90,
        advanced: 120,
        pro: 150,
        'online-service': 10,
        'larger-storage': 20,
        'customizable-profile': 20
      }
    },
    valueError: '',
    errorMessage: '', 
  }),

  getters: {

  },
  actions: {
    checkStep1Validation(){
      const name = this.formVal['name'];
      const email = this.formVal['email'];
      const phone = this.formVal['phone'];

      if(name === '') {
        this.valueError = 'name';
        this.errorMessage = 'This field is required';
        return false;
      }

      if(email === '') {
        this.valueError = 'email';
        this.errorMessage = 'This field is required';
        return false;
      }

      if(phone === '') {
        this.valueError = 'phone';
        this.errorMessage = 'This field is required';
        return false;
      }

      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
      {
        this.valueError = 'email';
        this.errorMessage = 'Invalid email address!';
        return false;
      }

      if(!(phone.split(' ').join('').match(/^\d{10}$/))) {
        this.valueError = 'phone';
        this.errorMessage = 'Invalid phone number!';
        return false;
      }

      this.valueError = '';
      return true;
    },

    toggleBilled() {
      if(this.formVal.billed === 'monthly') {
        this.formVal.billed = 'yearly';
      }else {
        this.formVal.billed = 'monthly';
      }
    }
  }
})