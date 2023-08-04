<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Protocolos de seguridad en operaciones de mecanizado CNC

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img2-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las diferentes mesas sectoriales, que como se mencionó, son equipos de trabajo conformados por empresas y delegados de trabajadores, expertos en un tema determinado; actúan con entidades normalizadoras para emitir las 
          b normas, guías 
          |y 
          b recomendaciones de seguridad 
          |en la ejecución de procesos en cada una de sus especialidades. También, se tienen en cuenta las entidades 
          b Administradoras de Riesgos Laborales ARL 
          |que junto con las empresas gestionan los riesgos en el trabajo.

    h3.mb-5 Antes de mecanizar

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-2.svg', alt='Operario')
      .col-lg-10.col-sm-10(data-aos="fade-left")
        p Los riesgos se materializan en cualquier momento: no solo a la hora de poner en ejecución las máquinas y herramientas controladas numéricamente por computador CNC; algunos peligros de accidentes se pueden evitar o gestionar, previamente, al inicio del mecanizado. Es decir, en las acciones u operaciones preparatorias.
        p.mb-0 Estas son, algunas de las normas principales que se deben tener en cuenta antes de mecanizar:

    .tarjeta.tarjeta--verde.p-4.mb-5(data-aos="zoom-in")
      PasosB.color-acento-botones
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Es muy importante que la persona que va a operar la máquina tenga 
              b capacitación y entrenamiento 
              |en la labor, que conozca la máquina, sus características, sus partes, sus componentes; al igual que las herramientas y los dispositivos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2-3.png', alt='Operario')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El operario de las máquinas controladas numéricamente por computador CNC, debe estar en 
              b excelentes condiciones físicas, mentales y sociales.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2-4.png', alt='Operaria')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El operario de las máquinas controladas numéricamente por computador CNC, debe pensar en todos los peligros y riesgos que se puedan presentar. Es importante 
              b prever 
              |cualquier situación, para poder actuar a tiempo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2-5.png', alt='Evitar daños')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Usar adecuadamente los 
              b elementos de protección personal 
              |indicados para cada labor.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2-6.png', alt='EPP')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p 
              b El orden y aseo del espacio de trabajo 
              |son una señal de lo que podría suceder.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2-7.png', alt='Operario')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Revisar muy bien el 
              b ajuste de las guardas y elementos que lo requieran
              |, así como las 
              b herramientas y material de trabajo
              |. Generalmente, se le va a arrancar viruta a un material duro con herramientas con filo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2-8.png', alt='Trabajadores')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Es muy importante mantener 
              b lubricados 
              |los sistemas, que así lo requieran, de acuerdo con el manual del fabricante.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2-9.png', alt='Maquinaria')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Revisar de acuerdo con el fabricante, 
              b los niveles de refrigerante 
              |y asegurarse que sea el suficiente para terminar el mecanizado.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2-10.png', alt='Maquinaria')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p 
              b Simular los procesos
              |, permite no solo anticipar el resultado del mecanizado con máquinas CNC, sino también visualizar posibles incidentes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2-11.png', alt='Simulación')

    
    h3.mb-5 Durante el mecanizado

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-12.svg', alt='Operarios')
      .col-lg-8.p-4(data-aos="fade-left")
        p.mb-0 En esta fase del proceso, se hace más evidente el riesgo de accidentes: en ella, entran en funcionamiento las máquinas y se ponen en marcha. El operario y todo el personal deben prestar toda la atención a sus actividades, debido a que estas máquinas funcionan mediante sistemas y mecanismos que elevan los riesgos tanto <b>mecánicos</b> como <b>eléctricos,</b> además de los<b> ergonómicos</b> y otros que dependen de las características propias de cada puesto de trabajo. 

    p.mb-5(data-aos="fade-right") Algunas normas y reglas que debe tener en cuenta durante el mecanizado con máquinas CNC son:

    .tarjeta.tarjeta--verde2.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center.align-items-center(titulo="Paso 1")
          .col-md-7.mb-4.mb-md-0
            p 
              b Seguir todos los procedimientos 
              |al pie de la letra, “no trate de tomar atajos”.
            p En la mayoría de ocasiones en donde se pretende reducir tiempos o aumentar la productividad inadecuadamente, se presentan incidentes o accidentes.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-13.png', alt='Rueda dentada')
        .row.justify-content-center.align-items-center(titulo="Paso 2")
          .col-md-7.mb-4.mb-md-0
            p Las 
              b manos deben estar alejadas 
              |de los mecanismos y dispositivos rotacionales mientras estos estén en movimiento.
            p Generalmente, cuando el operador tiene exceso de confianza y ya no detiene la marcha de la máquina para hacer algunas tareas (como retirar la viruta o, incluso, cambiar la herramienta), es ahí donde el accidente se hace inminente. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-14.png', alt='Persona usando maquinaria')
        .row.justify-content-center.align-items-center(titulo="Paso 3")
          .col-md-7.mb-4.mb-md-0
            p 
              b Utilizar adecuadamente las herramientas y dispositivos 
              |para cada tarea, no cambiarlas ni modificarlas.
            p Una herramienta mal utilizada se convierte en un elevado riesgo de accidente, ya que puede pasar a ser un “arma” potencial, con la que se atenta la integridad del operario.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-15.png', alt='Herramientas')
        .row.justify-content-center.align-items-center(titulo="Paso 4")
          .col-md-7.mb-4.mb-md-0
            p 
              b No intervenir en la máquina mientras está en marcha
              |, para esto se deben accionar las paradas de emergencia o desconectarlas de las fuentes de energía.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-16.png', alt='Operario')
        .row.justify-content-center.align-items-center(titulo="Paso 5")
          .col-md-7.mb-4.mb-md-0
            p 
              b No medir o dimensionar 
              |los objetos o el material de trabajo mientras la máquina está en marcha.
            p Al realizar esta acción, no solo se obtiene una medida poco confiable, sino que también el instrumento se puede atrapar o atascar, generando accidentes como cortaduras en las manos o extremidades.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-17.png', alt='Operario')
        .row.justify-content-center.align-items-center(titulo="Paso 6")
          .col-md-7.mb-4.mb-md-0
            p 
              b Utilizar los materiales de trabajo indicados 
              |evitará que estos fallen durante el proceso.
            p En algunas ocasiones el material o materiales con los que están fabricadas las herramientas tienen restricciones de uso. Por ejemplo, teniendo en cuenta su dureza, el no hacerlo de acuerdo con las indicaciones, puede hacer que fallen durante el mecanizado y se despidan partes a gran velocidad o temperatura, siendo un gran riesgo para el operador.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-18.png', alt='Operario')
        .row.justify-content-center.align-items-center(titulo="Paso 7")
          .col-md-7.mb-4.mb-md-0
            p Si se escucha algún 
              b sonido o vibración inusual
              |, debe detenerse el proceso y asegurarse que todo está bien.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-19.png', alt='Manos usando control')


    h3.mb-5 Elementos de protección personal EPP

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-20.svg', alt='Operario usando maquinaria')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 De acuerdo con cada operación que se vaya a ejecutar en el mecanizado, 
          b se recomienda el uso de los elementos de protección personal
          |. Estos se deben utilizar adecuadamente; de lo contrario podrían ser generadores de riesgos de accidentes.
        
        .cajon.color-acento-botones.p-4(style="background-color: rgba(162, 230, 176, .25)")
          p.mb-0 Un ejemplo del uso inadecuado de los elementos de protección son los guantes, se deben usar estrictamente cuando las máquinas herramientas no estén en marcha, ya que pueden llegar a ser atrapados y con las altas velocidades con las que se trabaja, el riesgo de lesión es inminente.

    p.mb-5 A continuación, se observan los elementos de protección personal más usados:

    TabsC.color-acento-botones.mb-5(data-aos="zoom-in")
      .tarjeta.color-secundario--borde.p-4.mb-3(titulo="La ropa de trabajo")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            p Generalmente, la 
              b ropa de trabajo 
              |es el primer elemento de protección personal EPP que se debe portar o utilizar. Esta debe ser cómoda y debe estar correctamente abotonada y no debe presentar elementos colgantes, que puedan ser atrapados por los mecanismos de las máquinas herramientas. 
              b No se debe usar ningún tipo de 
              |joyería, relojes, pulseras, anillos etc. Tampoco elementos como 
              b corbatas, pañoletas o bufandas.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-21.png', alt='Operaria')
      .tarjeta.color-secundario--borde.p-4.mb-3(titulo="Artículos y accesorios  de cuidado")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            p Aunque las máquinas herramientas controladas numéricamente por computador CNC tengan guardas de seguridad, es muy importante que los operarios que tienen el cabello largo utilicen las cofias indicadas, para evitar que sean atrapados por los sistemas mecánicos de la máquina.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-22.png', alt='Operaria manipulando maquinaria')
      .tarjeta.color-secundario--borde.p-4.mb-3(titulo="Accesorios de protección ocular")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            p El operario de máquinas herramientas controladas numéricamente por computador CNC, debe portar en todo momento las 
              b gafas de protección visual
              |, ya que durante las operaciones de mecanizado se emiten partículas diminutas, cortantes y calientes que pueden alcanzar y lesionar los ojos.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-23.png', alt='Gafas de seguridad')
      .tarjeta.color-secundario--borde.p-4.mb-3(titulo="Calzado de seguridad")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            p El 
              b calzado de seguridad 
              |también es indispensable en el momento de mecanizar con máquinas CNC. Este protege al operario no solo en cuanto a la caída de elementos pesados sobre los pies, sino también de posibles electrocuciones y de caídas por deslizamiento, si el calzado es de buena calidad y certificado.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-24.png', alt='Botas de seguridad')
      .tarjeta.color-secundario--borde.p-4.mb-3(titulo="Dispositivos de protección auditiva")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            p Se debe evaluar si en el entorno de trabajo del mecanizado se presenta 
              b ruido considerable
              |, en cuanto a su magnitud o a su tiempo de exposición, para tomar la decisión de utilizar protección auditiva.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-25.png', alt='Protección auditiva')
      .tarjeta.color-secundario--borde.p-4.mb-3(titulo="Máscaras, barbijos o cubrebocas")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            p De ser necesario se debe utilizar 
              b tapabocas
              |, por ejemplo, si el material de trabajo emite gases tóxicos nocivos para la salud.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-26.png', alt='Operaria con tapabocas')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4.mb-3(style="background-color: rgba(207, 189, 176, .25)")
          p.mb-0 En todo caso, así se utilicen los EPP y se cumplan las normas de seguridad industrial establecidas, si no se tiene una 
            b actitud de gestores de riesgos 
            |los accidentes se presentarán en cualquier momento. 
            b La actitud es el principal factor que hace un trabajo seguro.

    h3.mb-4(data-aos="fade-right") Riesgos en el mecanizado CNC

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-27.svg', alt='Máquina')
      .col-lg-10(data-aos="fade-left")
        p En las labores del mecanizado con máquinas herramientas CNC, se presentan diferentes peligros que tienen niveles de riesgo y de severidad elevados. Por tanto, es importante que el operador y las personas relacionadas con los procesos con las máquinas herramientas de control numérico computarizado CNC, sean conscientes de esto y tengan conocimiento de cómo mitigarlos.
        p.mb-0 Detalle estos peligros y sus niveles de riesgo, según la clasificación que se presenta a continuación:



    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-11.col-sm-8
        ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-28-.svg', alt='Riesgos en mecanizado CNC')
          .tarjeta.color-secundario.p-3(x="2.9%" y="20.5%" numero="+")
            p Las máquinas herramientas controladas numéricamente por computador CNC, funcionan gracias a una cantidad de sistemas mecánicos que se mantienen en diferentes movimientos como lineales, rotacionales etc. Esto genera el peligro de lesiones graves en extremidades como: cortes o cizallamiento, aplastamiento, atrapamiento, punzonado, abrasión o fricción, lavado con fluido a presión.
          .tarjeta.color-secundario.p-3(x="3.3%" y="52.5%" numero="+")
            p Los componentes eléctricos de las máquinas herramientas controladas numéricamente por computador CNC, requieren que sean alimentados con una cantidad importante de energía eléctrica. Esto hace que el peligro de electrocución sea inminente provocando lesiones, quemaduras o hasta la muerte.
          .tarjeta.color-secundario.p-3(x="12.2%" y="80.7%" numero="+")
            p Las operaciones en las máquinas herramientas controladas numéricamente por computador CNC, generan elevadas temperaturas, gracias a la naturaleza de su funcionamiento, puede ser por el arranque de viruta o por el flujo del plasma para corte. Esto implica que el peligro de quemaduras esté presente, con un nivel de riesgo elevado por el contacto con estos elementos.
          .tarjeta.color-secundario.p-3(x="29.7%" y="93.7%" numero="+")
            p Aunque las máquinas herramientas controladas numéricamente por computador CNC, tengan sistemas o elementos de mitigación del ruido, este se presenta tan fuerte, que el riesgo de la pérdida de la audición, la fatiga, el estrés y otras perturbaciones, debido a la exposición prolongada o continua, estén presentes en todo momento. Hay que considerar que este peligro abarca, no solo a los operadores de las máquinas, sino también a su entorno de trabajo.
          .tarjeta.color-secundario.p-3(x="53.8%" y="93.7%" numero="+")
            p La fricción entre materiales de trabajo con alta dureza, con las herramientas de corte también duras, hace que las vibraciones, así como el ruido, sean constantes. Entonces el peligro de lesiones musculares, neurológicas y vasculares, se presenta al ejecutar las operaciones en estas máquinas herramientas controladas numéricamente por computador CNC.
          .tarjeta.color-secundario.p-3(x="71.3%" y="80.4%" numero="+")
            p Generalmente en los procesos con máquinas herramientas controladas numéricamente por computador CNC, debido a los componentes generadores de radioactividad, se presentan radiaciones ionizantes y no ionizantes. También por la exposición a procesos cercanos como soldaduras o impresión ultravioleta.
          .tarjeta.color-secundario.p-3(x="79.4%" y="52.5%" numero="+")
            p En ocasiones en el mecanizado con máquinas herramientas controladas numéricamente por computador CNC, se procesan o utilizan materiales que despiden o emiten gases o polvos con sustancias nocivas para la salud de los operarios. Esto hace que el riesgo de inhalación o de contacto con ellos esté presente.
          .tarjeta.color-secundario.p-3(x="79%" y="20.5%" numero="+")
            p El operador de las máquinas herramientas controladas numéricamente por computador CNC, puede adoptar posiciones incorrectas en el momento de ejecutar las diferentes tareas o actividades. Esto puede generar lesiones físicas graves o permanentes.

</template>

<script>
export default {
  name: 'Tema2',
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
