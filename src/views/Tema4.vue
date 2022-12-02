<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Interpretación de planos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img4-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dentro de las competencias requeridas para el operador de una máquina herramienta controladas numéricamente por computador CNC, está la interpretación de planos, debido a que los modelos de las piezas a fabricar mediante el mecanizado, se representan gráficamente en los planos técnicos. Además de contener toda la información técnica necesaria para su producción.
  
    h3(data-aos="fade-right") El plano técnico

    p(data-aos="fade-left") Un plano técnico está definido como 
      b la representación gráfica de un objeto real, cumpliendo unas normas que regulan y estandarizan toda la información que contiene
      |, desde el tamaño del papel hasta los espesores de las líneas.
    p.mb-5(data-aos="fade-right") Se diferencian dos fases en el trabajo con planos técnicos, estas son:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-botones.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img4-2.svg', alt='Inicio de plano')
        h2.text-center Fase uno
        p.text-center La elaboración de los planos técnicos.
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img4-3.svg', alt='Lápiz, escuadra, calculadora')
        h2.text-center Fase dos
        p.text-center La interpretación de los planos técnicos.
      
    h3(data-aos="fade-right") Tipos de planos técnicos

    p.mb-5(data-aos="fade-left") Dependiendo el ámbito o campo donde se apliquen o desempeñen, se pueden encontrar diferentes tipos de planos técnicos. Los tres grupos principales son:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img4-4.png", alt="Dibujo arquitectónico")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center Dibujo arquitectónico
            p.mb-0 Estos planos son usados en la representación gráfica de proyectos y 
              b construcciones arquitectónicas 
              |de todo tipo.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-up")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img4-5.png", alt="Plano topográfico")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center Dibujo topográfico
            p.mb-0 Los planos topográficos son utilizados para representar replanteos sobre 
              b terrenos para obras civiles
              |, representan un terreno en sus tres dimensiones espaciales mediante puntos, curvas, coordenadas, etc.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-right")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img4-6.png", alt="Dibujo industrial")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center Dibujo industrial
            p.mb-0 Los planos para el diseño y dibujo industrial, representan instalaciones, conjuntos, mecanismos o elementos de aplicación mecánico, eléctrico, electrónico, térmico, energético, etc.

    h3(data-aos="fade-right") Escalas

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img4-7.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Al momento de realizar un plano técnico de un objeto o conjunto de gran tamaño, por ejemplo, un estadio, para dibujarlo a una 
          b escala real
          |, se necesitaría un monitor o un papel demasiado grande, o al contrario para realizar el plano técnico de un objeto demasiado pequeño, por ejemplo, el piñón del mecanismo de un reloj, se necesita 
          b aplicar una escala.

    p.mb-5 Una escala es la relación entre 
      b las dimensiones dibujadas y las dimensiones reales.
    p.mb-5 Los tipos de escala que se emplean en dibujo son los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-sm-8.mb-sm-4(data-aos="fade-left")
        .tarjeta.cft4.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img8.svg', alt='Escala reducida')
          h4.text-center Escala de reducción
      .col-lg-3.col-sm-8.mb-sm-4(data-aos="zoom-in")
        .tarjeta.cft4.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img9.svg', alt='Escala ampliada')
          h4.text-center Escala de ampliación
      .col-lg-3.col-sm-8.mb-sm-4(data-aos="fade-right")
        .tarjeta.cft4.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img10.svg', alt='Escala real')
          h4.text-center Escala real (1:1)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4(style="background-color: rgba(207, 189, 176, .25)")
          p.mb-0 Siendo así, se puede decir que un objeto de gran tamaño, como el estadio, se representó a 
            b escala 1:100
            |, significa que un centímetro dibujado en el plano son 100 centímetros en la realidad a esta se le llama 
            b escala de reducción
            |. Igualmente, se representó un piñón a escala 5:1, significa que 5 milímetros dibujados en el plano es un milímetro en la realidad, a esta se le llama 
            b escala de ampliación
            |. Finalmente, cuando se representan los objetos con las mismas dimensiones en el plano que en la realidad, se dice que es 
            b escala real 
            |o 
            b escala 1:1.

    h3.mb-3(data-aos="fade-right") Principios generales de representación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Como se ha mencionado anteriormente, en el dibujo técnico se 
          b representan gráficamente objetos o proyectos reales
          |, siguiendo unas 
          b normas internacionales
          |. Estas definen que, para representar un objeto en el plano técnico puede hacerse con respecto a la 
          b representación ortogonal.
        p.mb-0 Para representar las vistas ortogonales (frontal, superior, inferior, lateral derecha, lateral izquierda y posterior), y dependiendo de la posición del observador con respecto del objeto o del plano donde se proyectan las vistas, hay dos sistemas, el 
          b sistema europeo ISO E 
          |y el 
          b sistema americano ISO A.
      .col-lg-5.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img4-11.png', alt='Revisando planos')

    h3(data-aos="fade-right") ISO E, sistema europeo

    p.mb-5(data-aos="fade-right") Algunas características del sistema ISO E, se muestran a continuación:

    .tarjeta.tarjeta--lila.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            p Para el sistema 
              b europeo 
              |la pieza se sitúa entre el observador y el plano donde se proyectarán y dibujarán las vistas.
            p La imagen a continuación muestra el símbolo del sistema ISO E, que, según la norma, en el caso de haberlo usado, lo debe llevar el plano en el rótulo o cajetín.
            p Símbolo ISO E.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema4/img4-12.svg', alt='Símbolo ISO E')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            p La distribución de las vistas ortogonales (frontal, superior, inferior, lateral derecha, lateral izquierda y posterior), en el 
              b sistema europeo 
              |para el modelo de la imagen a continuación que se toma como ejemplo.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema4/img4-13.svg', alt='Distribución de vistas ortogonales')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            p Las vistas ortogonales en el sistema ISO E, se disponen de tal forma que puede imaginarse que, si “se dobla” el plano hacia afuera, por los vértices de las vistas, puede obtenerse o armar el sólido que se está representando.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema4/img4-14.svg', alt='Vistas ortogonales en sistema ISO E')

    h3(data-aos="fade-right") ISO A, sistema americano

    p.mb-5(data-aos="fade-right") Las características del sistema 
      b ISO A
      |, se muestran a continuación:

    .tarjeta.tarjeta--lila.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            p Para el sistema 
              b americano 
              |la pieza se sitúa detrás del plano donde se proyectarán y dibujarán las vistas. La imagen a continuación muestra el símbolo del sistema ISO A, que, según la norma, en el caso de haberlo usado, lo debe llevar el plano en el rótulo o cajetín.
            p Símbolo ISO A.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema4/img4-15.svg', alt='Símbolo ISO A')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            p La distribución de las vistas ortogonales (frontal, superior, inferior, lateral derecha, lateral izquierda y posterior), en el 
              b sistema americano 
              |para el modelo de la imagen que se toma como ejemplo a continuación.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema4/img4-16.svg', alt='Distribución de vistas ortogonales')
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            p Las vistas ortogonales en el sistema ISO A, se disponen de tal forma que puede imaginarse que, si “se dobla” el plano hacia adentro, por los vértices de las vistas, puede obtenerse o armar el sólido que se está representando.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema4/img4-17.svg', alt='Vistas ortogonales en sistema ISO A')

    h3(data-aos="fade-right") Acotado

    p.mb-5(data-aos="fade-right") El objetivo principal del acotado es representar e indicar las dimensiones de los objetos y también anotar los aspectos importantes para la comprensión total del objeto o proyecto, sin dar espacio para errores o malas interpretaciones. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img4-18.png', alt='Persona con planos')
      .col-lg-8(data-aos="fade-left")
        p Pueden encontrarse los principios generales para un buen acotado siguiendo las normas para este caso:

        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.ctsf.p-4
            .row.justify-content-center.mb-3
              .col-8
                figure
                  img(src='@/assets/curso/temas/tema4/img4-19.svg' alt='Norma 1')
            p.text-center Se debe señalar la mínima cantidad de cotas necesarias para dimensionar el objeto, es decir, evitar al máximo repetirlas. 
          .tarjeta.ctsf.p-4
            .row.justify-content-center.mb-3
              .col-8
                figure
                  img(src='@/assets/curso/temas/tema4/img4-20.svg' alt='Norma 2')
            p.text-center No se debe omitir ninguna cota que se necesite para definir el objeto, la ausencia de una cota puede obstaculizar el proceso del proyecto.
          .tarjeta.ctsf.p-4
            .row.justify-content-center.mb-3
              .col-8
                figure
                  img(src='@/assets/curso/temas/tema4/img4-21.svg' alt='Norma 3')
            p.text-center Se debe evitar al máximo el tener que hacer cálculos innecesarios, es decir, que se deben indicar las magnitudes explícitamente.
          .tarjeta.ctsf.p-4
            .row.justify-content-center.mb-3
              .col-8
                figure
                  img(src='@/assets/curso/temas/tema4/img4-22.svg' alt='Norma 4')
            p.text-center Las cotas se deben disponer en la vista que más convenga para la mejor interpretación del objeto.
          .tarjeta.ctsf.p-4
            .row.justify-content-center.mb-3
              .col-8
                figure
                  img(src='@/assets/curso/temas/tema4/img4-23.svg' alt='Norma 5')
            p.text-center Todas las cotas deben estar en las mismas unidades, en el caso de que sea necesario se debe indicar claramente si cambian.
          .tarjeta.ctsf.p-4
            .row.justify-content-center.mb-3
              .col-8
                figure
                  img(src='@/assets/curso/temas/tema4/img4-24.svg' alt='Norma 6')
            p.text-center Se debe acotar el objeto final, es decir, luego de todos los procesos que requiera para su fabricación.
          .tarjeta.ctsf.p-4
            .row.justify-content-center.mb-3
              .col-8
                figure
                  img(src='@/assets/curso/temas/tema4/img4-25.svg' alt='Norma 7')
            p.text-center Las cotas, en lo posible, deben estar hacia afuera de la vista del objeto, para facilitar su lectura y para no obstaculizar la interpretación de la forma. 
          .tarjeta.ctsf.p-4
            .row.justify-content-center.mb-3
              .col-8
                figure
                  img(src='@/assets/curso/temas/tema4/img4-26.svg' alt='Norma 8')
            p.text-center Se debe tratar de mantener un dibujo técnico con estética y orden, esto facilita la lectura y la claridad en los proyectos. 

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
