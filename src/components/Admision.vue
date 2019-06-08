<template>
  <section>
    <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="pills-home-tab"
          data-toggle="pill"
          href="#pills-home"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true">
          Descripci&oacute;n
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link"
           id="pills-profile-tab"
           data-toggle="pill"
           href="#pills-profile"
           role="tab"
           aria-controls="pills-profile"
           aria-selected="false">
            Incluye
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="pills-contact-tab"
          data-toggle="pill"
          href="#pills-contact"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false">
          Recomendaciones
        </a>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
        v-for="(item, index) in info" :key="index">

        <div class="row">
          <div class="col-12" >
            <h4 class="content__title content__title--color">{{ item.tituloH1 }}</h4>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <p class="text-justify content__description content__description--color">
              {{ item.descripcion }}
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
           <h4 class="content__title content__title--color">Atractivos principales</h4>
            <ul
              class="content__description content__description--color"
              v-for="(atractive, index) in item.atractivos"
              :key="index">
              <li>{{ atractive.titulo }}</li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <strong class="content__description content__description--color">
              Nota: Actividades incluidas en tu entrada.
            </strong>
          </div>
        </div>

      </div>
      <div
        class="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab">
        Incluye
      </div>
      <div
        class="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab">
        Recomendaciones
      </div>
    </div>
  </section>
</template>

<script>
import { getData } from '@/services/front';

export default {
  name: 'Admision',
  data() {
    return {
      info: [],
    };
  },
  mounted() {
    this.getDataFront();
  },
  methods: {
    getDataFront() {
      getData().then((data) => {
        this.info = data.data;
      });
    },
  },
};
</script>
