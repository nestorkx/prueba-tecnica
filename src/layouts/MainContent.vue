<template>
    <div class="content py-4">
      <div class="container">
        <div class="row">
            <div class="col-12 text-center">
              <h3>Admisi&oacute;n Xcaret</h3>
            </div>
        </div>

        <div class="row">
          <div class="col-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true">
                  Compra tu admisi&oacute;n
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"
                   id="profile-tab"
                   data-toggle="tab"
                   href="#profile"
                   role="tab"
                   aria-controls="profile"
                   aria-selected="false">
                  Atracciones
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false">
                  Restaurantes
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home" role="tabpanel"
                aria-labelledby="home-tab">home</div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab">perfil</div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab">contact</div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'MainContent',
};
</script>
