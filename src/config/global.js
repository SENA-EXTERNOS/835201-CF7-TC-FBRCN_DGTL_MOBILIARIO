export default {
  global: {
    componenteFormativo:
      'Fundamentos para fabricación de piezas en máquinas CNC',
    descripcionCurso:
      'El presente componente formativo aborda aspectos claves de la fabricación de piezas con máquinas de control numérico CNC, comenzando por la normatividad en las actividades propias de las funciones de los operarios, hasta el conocimiento y alistamiento de las máquinas de control numérico CNC.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal-2.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normativa de seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Protocolos de seguridad en operaciones de mecanizado CNC',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Preparación para el mecanizado CNC',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Interpretación de planos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tipos de máquinas CNC',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Protocolos de seguridad en operaciones de mecanizado CNC',
      referencia:
        'Giraldo, A. (2019). <em>Seguridad Industrial.</em> Ecoe Ediciones.',
      tipo: 'E-Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_elibroELB126454',
    },

    {
      tema: 'Preparación para el mecanizado CNC',
      referencia:
        'Serrano, D., Mejías, F. & Rodríguez, F. (2018).<em> Comprobación y optimización del programa CNC para el mecanizado por arranque de viruta.</em> Ic Editorial.',
      tipo: 'E-Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/42599',
    },
    {
      tema: 'Protocolos de seguridad en operaciones de mecanizado CNC',
      referencia:
        'Tenaris Argentina. (2017). <em>12 reglas básicas de seguridad</em> [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3Sk6PqEa0ZA',
    },
    {
      tema: 'Protocolos de seguridad en operaciones de mecanizado CNC',
      referencia:
        'Yorka, J. (2017). <em>Típicas excusas de seguridad</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dEDHPnHoqmo',
    },
  ],
  glosario: [
    {
      termino: 'ARL',
      significado: 'sigla de Administradora de Riesgos Laborales.',
    },
    {
      termino: 'Buril',
      significado: 'herramienta de corte con la que trabaja un torno.',
    },
    {
      termino: 'CAD',
      significado:
        'del inglés <em>Computer Aided Design</em>, o diseño asistido por el computador.',
    },
    {
      termino: 'CAE',
      significado:
        'del inglés <em>Computer Aided Enginnering</em>, o ingeniería asistida por computador.',
    },
    {
      termino: 'CAM',
      significado:
        'del inglés <em>Computer Aided Manufacture</em>, o fabricación asistida por computador.',
    },
    {
      termino: 'CNC',
      significado: 'control numérico computarizado.',
    },
    {
      termino: 'EPP',
      significado: 'elementos de protección personal.',
    },
    {
      termino: 'Fresa',
      significado:
        'herramienta de corte con la que trabaja una fresadora o un centro de mecanizado.',
    },
    {
      termino: 'Máquina NC',
      significado: 'se refiere a una máquina con control numérico.',
    },
    {
      termino: 'PLM',
      significado:
        'del inglés <em>Product Life Cycle</em>, o gestión del ciclo de vida del producto.',
    },
    {
      termino: 'SGC',
      significado: 'sigla de Sistema de Gestión de Calidad.',
    },
    {
      termino: 'SST',
      significado: 'sigla de Sistema de Seguridad y Salud en el Trabajo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Autycom (2020). <em>¿Qué es el control numérico computarizado o CNC?</em> Autycom.',
      link:
        'https://www.autycom.com/que-es-el-control-numerico-computarizado-o-cnc/',
    },
    {
      referencia:
        'Biguri, I. (2018). <em>Los ocho errores de acotación.</em> Dibujo técnico.',
      link: 'https://ibiguridt.wordpress.com/2017/01/23/los-ocho-errores/',
    },
    {
      referencia:
        'Inoxform (2022). <em>Descubre los diferentes tipos de máquinas CNC.</em> Inoxform.',
      link: 'https://inoxform.eu/es/tipos-de-maquinas-cnc/',
    },
    {
      referencia:
        'Martín, S. (2014). <em>Interpretación de Planos.</em> Fc Editorial.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_vitalsource9788415781141&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
