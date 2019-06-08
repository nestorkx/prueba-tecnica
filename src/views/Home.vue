<template>
  <div class="home">
    <Header />
    <WhyBuy />
    <FooterAbout />
    <ContactPhone />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/layouts/Header.vue';
import Footer from '@/layouts/Footer.vue';
import ContactPhone from '@/layouts/ContactPhone.vue';
import FooterAbout from '@/layouts/FooterAbout.vue';
import WhyBuy from '@/layouts/WhyBuy';

export default {
  name: 'home',
  components: {
    WhyBuy,
    ContactPhone,
    Footer,
    Header,
    FooterAbout,
  },
};
</script>
