# Create ADN App

Create-adn-app, es un template de REACT NATIVE que contiene las instrucciones arquitecturales usadas en el desarrollo Frontend Cross Platform.

Una Arquitectura Basada en Components con Diseño Atómico y con él Patron Arquitectural Flux  usando la Lógica de Flujo de datos unidireccional con Redux.

También es responsable de las Pruebas, Documentation y Despliegue a diferentes entornos como Quality, Develop y Production en Web, iOS y Android con CI/CD.

## Why

Porque puedes crear aplicaciones bajo un stack de desarrollo profesional y robusto que permite al proyecto ser escalable y optimizado para entornos de producción (Manejo de Errores, Notificaciones, Estados, Versiones, Feedback, Seguimiento y Control) y a un equipo Frontend ser eficiente bajo un stack de trabajo optimo para crear aplicaciones de alta calidad para Web con PWA, iOS y Android, asegurando mediante patrones los procesos de Desarrollo, Test y Documentación como Los Despliegues a cada entorno.

Crear un proyecto con Create-adn-app te asegurara Mejores practicas Actuales como un desarrollo con estandares de calidad. 

## Limitaciones

- Desarrollo Web con un Lenguaje Movil, React native.
- Usamos Expo en nuestro Core, por lo tanto si usted desea incluir alguna funcionalidad no soportada por expo, no le recomendamos usar Create-adn-app, sin embargo estamos trabajando en esto.
- Para asegurar la calidad de su proyecto, debe usar los patrones que proponemos.
- Estamos enfocados a proyectos corporativos con equipos de trabajos de mas de 3 personas, sin embargo puede usarlo en su proyecto personal aunque le requerira mas tiempo por sus patrones de Test y Documentación que acostumbramos a omitir en ellos.
- Usamos dos librerias de UI para optimizar y soportar los componentes en Web y Movil. Estamos trabajando en lograr tener solo una libreria.
- Usamos dos librerias de Router para los Componentes Web y Movil, aunque estan basadas en el mismo codigo. Estamos trabajando en lograr tener solo una libreria.

## Librerias de UI

- [Evergreen](https://evergreen.segment.com/): Evergreen is a React UI Framework for building ambitious products on the web. Brought to you by Segment.
- [Material-UI](https://material-ui.com/): React components for faster and easier web development. Build your own design system, or start with Material Design.
- [React Native Elements](https://react-native-elements.github.io/react-native-elements/): Cross Platform React Native UI Toolkit

## Librerias de Router
En realidad los paquetes usan misma base de código de [React Router](https://github.com/ReactTraining/react-router#readme).
- [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom): DOM bindings for React Router.
- [React Router Native](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-native): React Native bindings for React Router.

## Librerias Arquitecturales
- [Redux](https://es.redux.js.org/): Redux es un contenedor predecible del estado de aplicaciones JavaScript.
- [Redux Saga](https://redux-saga.js.org/); 