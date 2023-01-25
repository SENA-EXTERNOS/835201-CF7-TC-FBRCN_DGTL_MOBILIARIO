<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .tarjeta.p-4.p-md-5.mb-5.fondoi
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last(data-aos="fade-right")
          p Apreciado aprendiz, bienvenido a este componente formativo, donde aprenderá sobre los conceptos y acciones para mecanizar exitosamente un producto, con máquinas o herramientas de control numérico computarizado, CNC. Podrá fortalecer su conocimiento en lo relacionado con modelado, diseño asistido por computador CAD y desarrollo de fabricación asistida por computador CAM, ejecución del programa, normas, etc. Comprenderá cómo proteger la integridad de los operarios, para evitar posibles accidentes y cómo lograr resultados eficientes del mecanizado, para que se cumplan todos los requisitos establecidos con anterioridad. 
          p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/intro/intro.png")

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
