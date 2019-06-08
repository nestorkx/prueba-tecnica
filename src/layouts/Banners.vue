<template>
  <div class="banners py-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="buy-us__head--title buy-us__head--color">
              A otros visitantes que compraron Xcaret tambi&eacute;n les interes&oacute;:
            </h4>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3 mt-xl-2 mt-sm-4 col-sm-6">
            <div
              class="banners__container banners__container--img"
              :style="{backgroundImage: 'url(' + banners.banner01 + ')'}">
              <div class="banners__box-container banners__box-container--bg-blue text-center">
                <div class="banners__box-container--font text-white">
                  <p class="m-0">Agrega <strong>STAR TREK&reg;</strong> POR SOLO $000 USD*</p>
                  </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 mt-xl-2 mt-sm-4 col-sm-6">
            <div
              class="banners__container banners__container--img"
              :style="{backgroundImage: 'url(' + banners.banner02 + ')'}">
              <div class="banners__box-container banners__box-container--bg-orange text-center">
                <div class="banners__box-container--font text-white">
                  <p class="m-0">Agrega <strong>XPLOR</strong> POR SOLO $000 USD*</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 mt-xl-2 mt-sm-4 col-sm-6">
            <div
              class="banners__container banners__container--img"
              :style="{backgroundImage: 'url(' + banners.banner03 + ')'}">
              <div class="banners__box-container banners__box-container--bg-magenta text-center">
                <div class="banners__box-container--font text-white">
                  <p class="m-0">Agrega <strong>XPLOR</strong> POR SOLO $000 USD*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import banner01 from '@/assets/img/banners/banner-01.jpg';
import banner02 from '@/assets/img/banners/banner-02.jpg';
import banner03 from '@/assets/img/banners/banner-03.jpg';

export default {
  name: 'Banners',
  data() {
    return {
      banners: {
        banner01,
        banner02,
        banner03,
      },
    };
  },
  methods: {
    getImage(src) {
      return src;
    },
  },
};
</script>
