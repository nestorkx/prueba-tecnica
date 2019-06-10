<template>
  <section class="booking">
    <fieldset class="mt-5 booking__fieldset">

      <legend
        class="booking__legend
        booking__legend--title
        booking__legend--color
        text-center">
        COMPRA AQUI:
      </legend>

      <div class="row mb-4 booking__prices">
        <div
          class="col-xl-6
          text-center border-right">
          <h6
            class="booking__prices--title
            booking__prices--color">
            ADULTOS
          </h6>
          <div
            class="booking__prices--before
          booking__prices--before-color">
            $1,881 MXN
          </div>
          <div
            class="booking__prices--title
            booking__prices--after-color">
            $1,692 MXN
          </div>
        </div>
        <div
          class="col-xl-6
          text-center
          booking__prices">
          <h6
            class="booking__prices--title
            booking__prices--color">
            NIÑOS
          </h6>
          <div
            class="booking__prices--before
          booking__prices--before-color">
            $940.50 MXN
          </div>
          <div
            class="booking__prices--title
            booking__prices--after-color">
            $846.45 MXN
          </div>
        </div>
      </div>

      <div class="row mb-3 booking__pax">
        <div class="col-xl-4 mb-xl-0 mb-sm-2 pr-xl-0">
          <select class="custom-select">
            <option value="">Adultos</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="col-xl-4 mb-xl-0 mb-sm-2 pr-xl-0">
          <select class="custom-select">
            <option>Niños</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="col-xl-4 mb-xl-0 mb-sm-2">
          <input type="text" class="form-control">
        </div>
      </div>

      <div class="row mb-3 booking__other-services">
        <div class="col-xl-6 text-center">
        <span class="booking__other-services--color">
          AGREGAR ALIMENTOS Y BEBIDAS
        </span>
          <div
            class="custom-control
            custom-switch
            booking__other-services--switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1">
            <label class="custom-control-label" for="customSwitch1"></label>
          </div>
        </div>
        <div class="col-xl-6 text-center">
        <span class="booking__other-services--color">
          AGREGAR <br> TRANSPORTACI&Oacute;N
        </span>
          <div
            class="custom-control
            custom-switch
            booking__other-services--switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch2">
            <label class="custom-control-label" for="customSwitch2"></label>
          </div>
        </div>
      </div>

      <div class="row mb-3 booking__total">
        <div class="col-xl-12 text-center">
          <h4 class="booking__total--color">
            TOTAL: $1,692 MXN
          </h4>
        </div>
      </div>

      <div class="row booking__months">
        <div class="col-xl-12 text-center">
          <span class="booking__months--color">
            <i class="far fa-credit-card"></i> HASTA 9 MESES SIN INTERESES
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-1"></div>
        <div class="col-xl-10">
          <img class="img-fluid" src="@/assets/img/payments-methods.png">
        </div>
        <div class="col-xl-1"></div>
      </div>

      <div class="row mb-1 booking__restrictions">
        <div class="col-xl-12">
          <p class="text-center booking__restrictions--color">
            Con los principales bancos y tarjetas emitidas en M&eacute;xico.
            *No aplica con PayPal. <strong><a href="#">Ver opciones</a></strong>
          </p>
        </div>
      </div>

      <div class="row mb-3 booking__button">
        <div class="col-xl-12 text-center">
          <button class="btn btn-success rounded-pill px-5 py-1">
            AGREGAR
          </button>
        </div>
      </div>

      <div class="row booking__policy">
        <div class="col-xl-12">
          <small class="text-left booking__policy--color">
            *Niños menores de 4 años entran gratis. De 5 a 11 años -50% del precio
            de adulto -10% de descuento -reservando con 7-20 dias de anticipación. -15%
            de descuento - reservando con 21 dias o más de anticipacion. Precios sujetos a cambios
            sin previo aviso.
            Aplican restricciones.
          </small>
        </div>
      </div>

    </fieldset>
  </section>
</template>
<script>
export default {
  name: 'BookingEngine',
};
</script>
