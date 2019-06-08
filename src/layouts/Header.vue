<template></template>

<script>
import { getData } from '@/services/front';

export default {
  name: 'Header',
  mounted() {
    this.getDataFront();
  },
  methods: {
    getDataFront() {
      getData().then((data) => {
        console.log(data);
      });
    },
  },
};
</script>
