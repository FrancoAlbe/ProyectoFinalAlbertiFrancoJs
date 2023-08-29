const gridContainer = document.querySelector('.grid-item-boxs');

const url_dolar = "https://api.bluelytics.com.ar/v2/latest";
let dolar_blue = 0;

// Define los datos de los planes
const plans = [
  {
    title: 'Minimo',
    description: 'Este plan te ayuda a tener las bases de un sitio!',
    features: [
      'Diseño de sitios web atractivos y responsivos.',
      'Integración con redes sociales para aumentar la visibilidad.',
      'Optimización básica de SEO para mejorar el posicionamiento en buscadores.',
      'Formulario de contacto para recibir consultas de los visitantes.',
    ],
    precio: 200,
  },
  {
    title: 'Basico',
    description: 'Un plan que te ayuda a iniciar en la creacion basica de tu sitio!',
    features: [
      'Diseño de sitios web atractivos y responsivos.',
      'Integración con redes sociales para aumentar la visibilidad.',
      'Optimización básica de SEO para mejorar el posicionamiento en buscadores.',
      'Formulario de contacto para recibir consultas de los visitantes.',
      'Alojamiento web confiable y seguro.',
      'Integración con herramientas de análisis para medir el tráfico del sitio.',
      'Galería de imágenes para mostrar productos o trabajos realizados.',
      'Blog básico para compartir contenido relevante y generar engagement.',
    ],
    precio: 350,
  },
  {
    title: 'Avanzado',
    description: 'Este es el plan que te va a permitir tener el tu sitio soñado!',
    features: [
      'Diseño de sitios web atractivos y responsivos.',
      'Integración con redes sociales para aumentar la visibilidad.',
      'Optimización básica de SEO para mejorar el posicionamiento en buscadores.',
      'Formulario de contacto para recibir consultas de los visitantes.',
      'Alojamiento web confiable y seguro.',
      'Integración con herramientas de análisis para medir el tráfico del sitio.',
      'Galería de imágenes para mostrar productos o trabajos realizados.',
      'Blog básico para compartir contenido relevante y generar engagement.',
      'Diseño personalizado con múltiples opciones de estilo y colores.',
      'Integración con plataformas de comercio electrónico para vender productos en línea.',
      'Sistema de gestión de contenido para actualizar y mantener el sitio fácilmente.',
      'Optimización avanzada de SEO para aumentar la visibilidad en buscadores.',
    ],
    precio: 500,
  },
];



// Itera sobre los datos de los planes y crea las tarjetas
plans.forEach((plan) => {
  // Crea un elemento de tarjeta
  const card = document.createElement('div');
  card.classList.add('plan-box');

  // Crea el título de la tarjeta
  const title = document.createElement('h2');
  title.textContent = plan.title;
  card.appendChild(title);

  // Crea la descripción de la tarjeta
  const description = document.createElement('p');
  description.textContent = plan.description;
  card.appendChild(description);

  // Crea la lista de características de la tarjeta
  const featuresList = document.createElement('ul');
  plan.features.forEach((feature) => {
    const featureItem = document.createElement('li');
    featureItem.textContent = feature;
    featuresList.appendChild(featureItem);
  });
  card.appendChild(featuresList);

  // Agregar el precio a la tarjeta
  const precio = document.createElement('h2');
  precio.textContent = `$${plan.precio} USD`;
  card.appendChild(precio);

  // Crea el enlace de selección de la tarjeta
  const link = document.createElement('a');
  link.href = '#';
  link.classList.add('btn', 'btn-primary');
  link.textContent = 'Seleccionar';
  card.appendChild(link);

  // Agrega el evento de clic al enlace "Seleccionar"
  link.addEventListener('click', () => {

    // Muestra la alerta con SweetAlert
    Swal.fire({
      title: 'Precio en ARS',
      text: `El precio en ARS es: ${ plan.precio * dolar_blue} ARS`,
      icon: 'info',
      confirmButtonText: 'Aceptar',
    });
  });

  // Agrega la tarjeta al contenedor
  gridContainer.appendChild(card);
});

//funcion asincrona + fetch con funciones "flecha"
const obtenerDatos = async (url_dolar) => {
  try {
    const response = await fetch(url_dolar);
    if (!response.ok) {
      throw new Error('No se pudo obtener la información de la URL especficada');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener los datos:', error.message);
    return null;
  }
};

obtenerDatos(url_dolar)
  .then((datos) => {
    dolar_blue = datos.blue.value_sell;
  })
  .catch((error) => {
    console.error('Error al obtener los datos:', error.message);
  });