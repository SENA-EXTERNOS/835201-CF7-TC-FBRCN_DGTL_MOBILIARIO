<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normativa de seguridad y salud en el trabajo

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de comenzar a mecanizar con las máquinas herramientas controladas numéricamente por computador CNC, es muy importante conocer, comprender y aplicar una serie de 
          b normas
          |, en donde se encuentran los 
          b requisitos 
          |de estricto cumplimiento; con el fin de evitar situaciones de riesgo no solo para la integridad de las personas, sino también para la maquinaria, equipos y entorno de trabajo. Es decir, para todo el proceso.

    p.mb-5(data-aos="fade-right") Siempre es necesario mantener el control de riesgos en estas áreas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-left")
        .tarjeta.cft31.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img1-2.svg', alt='Personal')
          h4.text-center Personal que labora y ejecuta las máquinas
      .col-lg-4.mb-sm-4(data-aos="zoom-in")
        .tarjeta.cft32.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img1-3.svg', alt='Maquinaria')
          h4.text-center Maquinaria
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        .tarjeta.cft31.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img1-4.svg', alt='Fábrica')
          h4.text-center Lugar de trabajo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="flip-up")
        .cajon.color-acento-botones.p-4(style="background-color: rgba(162, 230, 176, .25)")
          p.mb-0 Estas normas generalmente contienen los requisitos, para que las organizaciones que decidan certificarse, demuestren su implementación y cumplimiento mediante las auditorías a los sistemas de gestión. 

    p.mb-5(data-aos="fade-right") A continuación, pueden conocerse las normas más reconocidas en el campo de la industria y el manejo de equipos:

    .tarjeta.tarjeta--lila.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Norma ISO 45001
            p El objetivo de esta norma es lograr, a través del cumplimiento de sus requisitos, 
              b establecer y mantener un sistema de gestión de seguridad y salud en el trabajo
              |, que brinde lugares de trabajo seguros y saludables, previniendo las posibles lesiones relacionadas con el desempeño en una labor determinada.
            p Es recomendable ver el video complementario del tema 
              em Sistema de gestión de la seguridad y salud en el trabajo
              |, haciendo clic en el siguiente enlace:
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=5CF3HZdu6Bc" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p
                  b Enlace web. 
                  |Seguridad y salud en el trabajo.
          .col-md-5.order-sm-first.order-lg-last.mb-sm-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-5.svg', alt='ISO 45001')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Decreto 1072
            p El decreto 1072 de 2015, se trata del 
              b decreto único reglamentario del sector trabajo
              |. El artículo 2.2.4.6.15 establece que:
            p El empleador o contratante debe aplicar una metodología que sea sistemática, que tenga alcance sobre todos los procesos y actividades rutinarias y no rutinarias internas o externas, máquinas y equipos, todos los centros de trabajo y todos los trabajadores independientemente de su forma de contratación y vinculación, que le permita identificar los peligros y evaluar los riesgos en seguridad y salud en el trabajo, con el fin que pueda priorizarlos y establecer los controles necesarios, realizando mediciones ambientales cuando se requiera.
            p Esto quiere decir que, de acuerdo con cada espacio de trabajo y sus características propias, se deben crear 
              b mecanismos para detectar los potenciales peligros y evaluar los riesgos, para establecer la forma de controlarlos.
          .col-md-5.order-sm-first.order-lg-last.mb-sm-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-6.svg', alt='Decreto')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 ICONTEC
            p En Colombia, entidades como el Instituto colombiano de normas técnicas y certificación ICONTEC, conforma comités de acuerdo a los diferentes sectores, estos revisan las normas internacionales y las ajustan a la región, para luego emitir las 
              b guías técnicas 
              |y ser difundidas en el país.
            p Para profundizar más y conocer algunas de estas guías, se recomienda consultar a través del siguiente enlace:
            a.anexo.mb-4.mb-lg-0(href="https://safetya.co/normas-tecnicas-colombianas-en-sst/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p
                  b Enlace web. 
                  |Guías y normas técnicas Colombianas.
          .col-md-5.order-sm-first.order-lg-last.mb-sm-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-7.svg', alt='ICONTEC')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
