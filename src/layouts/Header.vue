<template>
  <header class="header">
    <div class="container">
      <nav class="navbar navbar-light bg-transparent header--custom-navbar">
        <a href="#" class="navbar-brand">
          <img class="img-fluid img--logo" src="@/assets/logo.png" alt="Xcaret">
        </a>
      </nav>
    </div>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item header--carousel-item active">
          <img class="img-fluid w-100" src="@/assets/img/sliders/slide-01.jpg" alt="Slide Xcaret">
          <div class="container">
            <div class="carousel-caption header--carousel-caption text-center">
              <button class="btn btn-outline-success rounded-pill px-4 py-2 header__button--bg">
                <i class="fas fa-play"></i> D&Aacute;LE PLAY
              </button>
              <p class="header__subtitle header__subtitle--size-sm mt-3">
                A TU PROXIMA AVENTURA
              </p>
            </div>
            <div class="carousel-caption text-left">
              <p class="header__subtitle header__subtitle--size-xl mt-3">
                INICIO/ PARQUES Y TOURS / PARQUE XCARET/
                <span class="header__subtitle--size-xxl">
                  ADMISI&Oacute;N XCARET
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
