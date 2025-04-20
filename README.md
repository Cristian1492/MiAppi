# MiAppi - Taller React + vite con tailwindcss

## Realizado por:
**Cristian Camilo Vanegas Gonzales**

## Descripción del Dashboard
MiAppi es una aplicación en React que se utilizó Context API para manejar el estado global de los usuarios. Permite consumir una API externa de usuarios y mostrarlos dinámicamente en una interfaz básico con una barra de búsqueda.

## Características
- Uso de Context API para manejar el estado global.
- Consumo de API externa (`https://jsonplaceholder.typicode.com/users`).
- Filtro dinámico de usuarios.
- Interfaz construida con React Router.
- Estilos aplicados con Tailwind CSS.
- 
## Link de ingreso a netlify 
cristian1492-miappi.netlify.app

## Estructura del Proyecto
src/
├-- components/
│   |--- SearchBar.jsx         # Es el que hace la función de búsquedad.
│
├-- contexts/
│   |--- GlobalContext.jsx     # Contexto global que gestiona los datos de los usuarios
│
├-- pages/
│   |--- Dashboard.jsx         # Página principal que muestra todos los datos de los usuarios
│
|---services/
│   |--- api.js                # Archivo para escribir los datos de los usuarios
│
|--- App.jsx                   # Enrutador principal envuelto con el Provider
|--- index.css                 # Estilos globales
|--- main.jsx                  # Punto de entrada de la app
```

## Instalación y Ejecución
1. Clona este repositorio:
git clone https://github.com/Cristian1492/MiAppi.git

2. Instala las dependencias:
npm install

3. Ejecuta el proyecto:
npm run dev

Este es el taller con el fin de realizar un dashboard interactivo.
