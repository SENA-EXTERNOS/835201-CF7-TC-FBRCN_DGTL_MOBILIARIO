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
          p Bienvenido al recurso educativo Fundamentos para la fabricación de piezas en máquinas CNC, a través de este, comprenderá que para mecanizar exitosamente un producto con máquinas o herramientas de control numérico computarizado CNC, no solo basta con haberlo modelado mediante el diseño asistido por computador CAD y luego haber desarrollado la programación con la fabricación asistida por computador CAM, sino que antes de correr o ejecutar el programa, es importante tener en cuenta que existen algunas normas, no solo para proteger la integridad de los operarios o para evitar posibles accidentes o incidentes, sino también para lograr que el resultado del mecanizado sea eficiente y cumpla con todos los requisitos establecidos desde su diseño. También encontrará la forma de preparar el proceso desde el punto de vista del operario, del espacio de trabajo y de la máquina.
          pmb-0 Lo invitamos a ver el siguiente video para contextualizar la fabricación de piezas con máquinas CNC y de otros temas tratados a lo largo de este componente.
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
