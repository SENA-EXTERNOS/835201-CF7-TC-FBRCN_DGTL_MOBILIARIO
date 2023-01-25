<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Tipos de máquinas CNC

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img5-1.svg' alt='Operarios con máquina')
      .col-lg-7.rectanguloid(data-aos="fade-left")
        p Las máquinas herramientas controladas numéricamente por computador CNC, se clasifican según las operaciones que ejecutan en: 
          b tornos CNC, fresadoras CNC, centros de mecanizado CNC y cortadora por plasma CNC
          |. También se pueden clasificar de acuerdo con el número de grados de libertad o ejes, que permiten más movimientos e innumerables operaciones. 
        p.mb-0 En el siguiente video se explicarán los diferentes tipos de máquinas CNC, es recomendable estudiarlo con atención:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    h3(data-aos="fade-right") Ventajas y desventajas de las máquinas herramientas CNC

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img5-2.svg' alt='Ventajas y desventajas')
      .col-lg-10.col-sm-10(data-aos="fade-left")
        p Los procesos con las máquinas herramientas controladas numéricamente por el computador CNC, han venido tomando mucha fuerza en el campo de la manufactura. Sin embargo, el uso de esta tecnología trae consigo una serie de ventajas y desventajas siendo, evidentemente, más numerosas las ventajas.
        p.mb-0 A continuación, se pueden conocer estas ventajas y desventajas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-10.col-sm-9
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/img5-3.svg', alt='Ventajas y desventajas de máquinas CNC')
          .tarjeta.tarjeta--azul.p-3(x="25%" y="65%" numero="+")
            ul.lista-ul
            li
              i
              |Reducción al mínimo del esfuerzo humano, debido a que todos los controles son automatizados.
            li
              i
              |Aumento de la eficiencia en los procesos, debido a las velocidades superiores en la producción.
            li
              i
              |Reducción de errores, gracias a la simulación previa del proceso de transformación de la materia prima.
            li
              i
              |Producción de piezas más complejas, gracias a las múltiples operaciones que solamente con esta tecnología, se pueden ejecutar.
            li
              i
              |Mejora en la producción de piezas con alta precisión y exactitud dimensional.
            li
              i
              |Reducción del desperdicio, tanto de materiales como de herramientas, por el error humano.
          .tarjeta.tarjeta--azul.p-3(x="74%" y="65%" numero="+")
            ul.lista-ul
            li
              i
              |Altos costos de producción, desde el mismo costo de la maquinaria.
            li
              i
              |Impacto social por la reducción de la mano de obra.
            li
              i
              |Capacitación o actualización continua del personal.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="flip-up")
        .cajon.color-acento-botones.p-4(style="background-color: rgba(162, 230, 176, .25)")
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
