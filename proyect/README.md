Selección Óptima de Elementos para Excursionistas
Descripción
Este proyecto es una aplicación web desarrollada en JavaScript puro, utilizando Bootstrap para el estilo. Permite a excursionistas seleccionar la combinación óptima de elementos basada en restricciones de peso máximo y calorías mínimas necesarias para una expedición de escalada.

Está orientado como una solución de prueba técnica, demostrando habilidades en persistencia de datos en cliente, manipulación de DOM, manejo de localStorage y combinatoria básica.

Características Principales:

Persistencia de datos mediante localStorage.

Agregar nuevos elementos dinámicamente.

Búsqueda óptima de combinaciones que cumplen requisitos de calorías mínimas y peso máximo.

Resetear (borrar todos los elementos) con confirmación.

Diseño responsivo usando Bootstrap.

Tecnologías Utilizadas:

HTML5

CSS3 (via Bootstrap 5)

JavaScript (vanilla)

Instalación y Uso:

Clona o descarga este repositorio.

Abre el archivo index.html en tu navegador preferido.

Usa el formulario para:

Agregar nuevos elementos indicando nombre, peso y calorías.

Buscar la mejor combinación posible de elementos según restricciones.

Borrar todos los elementos si quieres reiniciar el conjunto.

Nota: Los datos son persistentes gracias a localStorage. Si recargas el navegador, los elementos agregados seguirán disponibles.

Estructura del Proyecto
proyect/
       ├── index.html
       ├── script.js
       └── README.md

Funcionalidades Clave
Agregar elementos: Se añaden a localStorage automáticamente.

Buscar combinación: Utiliza generación de todas las combinaciones posibles y filtra aquellas que cumplen condiciones.

Resetear datos: Elimina todos los datos de localStorage para empezar de cero.

Ejemplo de Uso
Agrega varios elementos con peso y calorías.

Especifica las restricciones (por ejemplo: mínimo 15 calorías y máximo 10 kg de peso).

Presiona "Buscar Elementos Óptimos".

Verás una lista de elementos seleccionados, peso total y calorías totales.

Puedes borrar todos los datos usando el botón rojo "Borrar Todos los Elementos".

Autor
Desarrollado como parte de un ejercicio práctico de evaluación técnica.