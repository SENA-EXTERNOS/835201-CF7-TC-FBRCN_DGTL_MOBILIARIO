<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Preparación para el mecanizado CNC

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-1.svg', alt='Máquina')
      .col-lg-10(data-aos="fade-left")
        p En el momento de mecanizar alguna pieza con las máquinas herramientas controladas numéricamente por computador CNC, se deben presentar ciertas condiciones que producirán el mejor resultado de las operaciones.
        p.mb-0 Estas condiciones se acopian en tres grandes grupos:

    .row.d-flex.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-left")
        .tarjeta.cft31.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema3/img3-2.svg', alt='Preparación operario')
          h4.text-center Primer grupo
          p.text-center Preparación del operario.
      .col-lg-4.mb-sm-4(data-aos="zoom-in")
        .tarjeta.cft32.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema3/img3-3.svg', alt='Rueda dentada')
          h4.text-center Segundo grupo
          p.text-center Preparación del espacio de trabajo.
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        .tarjeta.cft31.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema3/img3-4.svg', alt='Martillo')
          h4.text-center Tercer grupo
          p.text-center Preparación de la máquina herramienta controlada numéricamente por computador CNC.

    br
    br
    h3.mb-4(data-aos='fade-right') Preparación del operario

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img3-5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La preparación del operario de máquinas herramientas controladas numéricamente por computador CNC es fundamental. Aunque estas requieran poca intervención del ser humano en su operación, es importante contar con un operador que tenga 
          b conocimientos tanto de 
            em software 
          |y programación, como de 
          b mecanizado convencional
          |. Además, debe tener y demostrar ciertas destrezas, habilidades y conocimientos que se abordan a continuación.
        br
        br
        p.mb-0 Si bien, no siempre quien opera la máquina tiene que ser la misma persona que realizó el programa, es importante que también tenga conocimientos en la programación con máquinas herramientas controladas por computador CNC.

    p.mb-5(data-aos="fade-right") El operario también debe contar con conocimientos en áreas como:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-left")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema3/img3-6.svg', alt='Trigonometría')
          .tarjeta.cfta.w-100
            .text-center.mt-4
              h4 Álgebra y trigonometría
      .col-lg-4.mb-sm-4(data-aos="zoom-in")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema3/img3-7.svg', alt='Planos')
          .tarjeta.cfta.w-100
            .text-center.mt-4
              h4 Dibujo técnico o interpretación de planos
      .col-lg-4(data-aos="fade-right")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema3/img3-8.svg', alt='Manual')
          .tarjeta.cfta.w-100
            .text-center.mt-4
              h4 Metrología

    p.mb-5(data-aos="fade-down") Las actividades que se desarrollan como preparación para un mecanizado con máquinas herramientas controladas numéricamente por computador CNC, se pueden resumir en las siguientes fases:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
         LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Fase 1") Se comienza con la interpretación y el entendimiento de las piezas o productos que se desean obtener.
          p.text-small(numero="2" titulo="Fase 2") Al conocer la pieza que se va a desarrollar, se sabrá cuáles operaciones realizará.
          p.text-small(numero="3" titulo="Fase 3") Cuando se conocen las operaciones que se van a realizar, se pueden interpretar los riesgos a los que se va a exponer y determinar, entonces, con cuáles elementos de protección personal, se debe proceder a trabajar.
      .col-lg-4.order-sm-first.order-lg-last.mb-sm-4
        figure
          img(src='@/assets/curso/temas/tema3/img3-9.png', alt='Operarios')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img3-10.svg', alt='Operarios con maquinaria')
      .col-lg-5.rectanguloid.p-4
        p En todo momento el operador de máquinas herramientas controladas numéricamente por computador CNC, debe estar en 
          b excelente estado físico, psicológico 
          |y 
          b social
          |. Es necesario que se prevea el tiempo que va durar el mecanizado, ya que se recomienda que en todo momento se estén vigilando los procesos.
        p.mb-0 Debe revisarse que el espacio de trabajo esté en condiciones para mecanizar, la disponibilidad del material o los materiales de trabajo. Así como, el buen funcionamiento de la máquina y la compatibilidad del archivo.

 

    
    h3.mb-4(data-aos='fade-right') Preparación del espacio de trabajo

    p.mb-3(data-aos="fade-left") El espacio de trabajo donde se encuentren ubicadas las máquinas herramientas controladas numéricamente por computador CNC, debe cumplir con las condiciones mínimas para poder mecanizar de manera segura, cómoda y eficiente. 
    p.mb-5(data-aos="fade-right") Las principales condiciones para el buen funcionamiento del espacio de trabajo son:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-11.png', alt='Equipos')
      .col-lg-8(data-aos="zoom-in")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--blanca")
          .row(titulo="Orden y aseo")
            .col-md-12.mb-4.mb-md-0
              p El orden y aseo, cada elemento en su lugar. Esto influye directamente, no solo en la movilidad del operador, sino también en la seguridad física.
          .row(titulo="Iluminación óptima")
            .col-md-12.mb-4.mb-md-0
              p La iluminación, bien sea natural o artificial, debe permitir que el operario en todo momento y desde cualquier lugar del trabajo, no tenga que realizar esfuerzos visuales.
          .row(titulo="Buena ventilación")
            .col-md-12.mb-4.mb-md-0
              p La ventilación, no sólo para mantener las condiciones de temperatura ideales para el trabajo, sino para poder evacuar los vapores o gases que sean nocivos para la salud, que se puedan presentar durante el mecanizado.
          .row(titulo="Energía eléctrica")
            .col-md-12.mb-4.mb-md-0
              p La energía eléctrica, es importante revisar que todas las conexiones eléctricas y electrónicas se encuentren en buenas condiciones de funcionamiento, orden, y aseo. Ya sea para evitar interrupciones en el fluido eléctrico o electrónico, o para eliminar riesgo de accidentes, como puede ser el de una electrocución.  
          .row(titulo="Aire comprimido")
            .col-md-12.mb-4.mb-md-0
              p El aire comprimido, muchas de las funciones básicas de las máquinas herramientas controladas numéricamente por computador CNC, se realizan gracias al aire comprimido, es importante garantizar que la cantidad y la presión van a ser suficientes para todo el mecanizado planeado y que no se presentarán variaciones.


    h3.mb-4(data-aos='fade-right') Preparación de la máquina

    p.mb-5(data-aos="fade-left") El éxito del resultado del proceso de mecanizado, depende en gran parte, del desempeño que tengan las máquinas herramientas controladas numéricamente por computador CNC durante su ejecución. Así pues, es muy importante la preparación que se les haga, 
      b siguiendo siempre las recomendaciones de los fabricantes y proveedores
      |; ya que estos son quienes más las pueden conocer y han aprendido de las experiencias de otros usuarios.
    p.mb-5(data-aos="fade-right") Algunas de estas prácticas para la preparación de las máquinas son:

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          .row(titulo="Aseo de las máquinas herramientas controladas numéricamente por computador CNC")
            .col-md-12.mb-4.mb-md-0
              p Aunque parezca muy reiterativo, el aseo de las máquinas herramientas controladas numéricamente por computador CNC, es una actividad imprescindible en su preparación y alistamiento, se debe revisar que no se presenten residuos de mecanizados anteriores, o de ser así, retirarlos con los implementos de aseo respectivos para poder continuar con el proceso de mecanizado.
          .row(titulo="Lubricación")
            .col-md-12.mb-4.mb-md-0
              p A pesar de que los mecanismos móviles y las partes que lo requieren, de las máquinas herramientas controladas numéricamente por computador CNC, se autolubrican gracias a una programación que traen por defecto, es una buena práctica, hacer una revisión de preparación y alistamiento del sistema de lubricación manualmente.
          .row(titulo="Mecanismos de precisión")
            .col-md-12.mb-4.mb-md-0
              p Los mecanismos de apriete o sujeción del material de trabajo y de las herramientas de corte deben funcionar muy bien. Es por esto que, en la preparación de la máquina se debe revisar que estos se encuentren a punto, para evitar posibles situaciones adversas durante el mecanizado.
          .row(titulo="Herramientas de corte")
            .col-md-12.mb-4.mb-md-0
              p Las herramientas de corte con las que se va a mecanizar deben estar correctamente ubicadas, montadas y con el apriete requerido, en sus respectivos dispositivos que han sido creados para este fin. 
          .row(titulo="Alimentación de aire comprimido")
            .col-md-12.mb-4.mb-md-0
              p El sistema de alimentación de aire comprimido de las máquinas herramientas controladas numéricamente por computador CNC, debe estar funcionando correctamente al momento de mecanizar. Es por esto que se debe revisar el estado de las conexiones y los accesorios, para garantizar un funcionamiento adecuado. 
          .row(titulo="Nivel de los tanques")
            .col-md-12.mb-4.mb-md-0
              p El nivel de los tanques o de los recipientes del sistema de refrigeración se debe mantener al máximo, ya que, en todo momento durante el mecanizado, es fundamental que se surta del líquido que evitará que el material de trabajo o las herramientas se quemen o sufran daños en su afilado. También para que, durante el arranque de viruta, el corte sea lubricado. 
      .col-lg-4.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img3-12.png', alt='Botones de maquinaria')
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
