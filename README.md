# Springfield - Los Simpsons App

Una aplicación interactiva construida con **React + Vite** y **Tailwind CSS** que permite explorar el universo de Los Simpsons utilizando su API oficial.

## Características

- **Explorador de Personajes**: Listado completo con imágenes de alta resolución desde el CDN oficial.
- **Paginación Inteligente**: Navegación fluida a través de las 42 páginas de contenido (20 ítems por página).
- **Efectos Visuales**: Lluvia de rosquillas animada y diseño estilo cómic.
- **Hook Personalizado**: Implementación de `useFetch` para un consumo de datos optimizado y estable.

## Tecnologías

- **React 18**
- **Vite** 
- **Tailwind CSS** 
- **The Simpsons API** 

## 📖 Sobre la API

Esta aplicación consume [The Simpsons API](https://thesimpsonsapi.com/api).
- **Base URL**: `https://thesimpsonsapi.com/api`
- **Imágenes**: Se utiliza el patrón de CDN `/500/` para optimizar la carga de portraits de personajes.
- **Sin Autenticación**: La API es abierta y gratuita para desarrolladores.
