<template>
  <div class="home">
    <Header />
    <MainContent />
    <Banners />
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
import WhyBuy from '@/layouts/WhyBuy.vue';
import Banners from '@/layouts/Banners.vue';
import MainContent from '@/layouts/MainContent.vue';

export default {
  name: 'home',
  components: {
    MainContent,
    Banners,
    WhyBuy,
    ContactPhone,
    Footer,
    Header,
    FooterAbout,
  },
};
</script>
