
# Acelerómetro y Contador de Pasos con React Native 🚶‍♂️📱

Esta es una aplicación de React Native que utiliza el sensor de acelerómetro proporcionado por `expo-sensors` para detectar y contar los pasos del usuario. La aplicación también muestra los valores en tiempo real del acelerómetro en los ejes X, Y y Z.

## 🚀 Características

- Monitorea el acelerómetro del dispositivo en tiempo real.
- Calcula la magnitud de la aceleración para detectar pasos.
- Muestra el número de pasos realizados.
- Utiliza íconos de `@expo/vector-icons` para mejorar la visualización de la interfaz.

## 📋 Requisitos

Para ejecutar esta aplicación, necesitas tener instalados los siguientes componentes:

- Node.js (versión recomendada: 14.x o superior)
- Expo CLI (instalable con `npm install -g expo-cli`)
- Un dispositivo o emulador compatible con sensores de acelerómetro.

## ⚙️ Instalación

Sigue estos pasos para descargar e instalar el proyecto:

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/ramiroec/Acelerometro.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd Acelerometro
    ```

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

4. Inicia la aplicación en tu dispositivo o emulador:

    ```bash
    expo start
    ```

## 📲 Uso

1. Abre la aplicación en tu dispositivo físico o simulador que soporte el uso del acelerómetro.
2. La aplicación mostrará en tiempo real los valores de aceleración en los ejes X, Y y Z.
3. A medida que el usuario camina, el contador de pasos irá aumentando con base en un umbral de detección de movimiento.

## 📂 Archivos Principales

- **App.js**: Este archivo contiene la lógica principal para el manejo del acelerómetro y la interfaz de usuario de la aplicación.
  
## 📦 Dependencias

- `expo-sensors`: Utilizado para acceder a los sensores del dispositivo, en este caso el acelerómetro.
- `@expo/vector-icons`: Para añadir íconos visualmente atractivos a la interfaz de usuario.
- `react`, `react-native`, `expo`: Base del desarrollo de la aplicación.

## 🗂️ Estructura del Proyecto

```
/nombre-del-repo
│
├── App.js
├── package.json
├── node_modules/
├── assets/
└── README.md
```

## 🎨 Personalización

Si deseas ajustar el umbral de detección de pasos, puedes modificar el código dentro de la función de cálculo de la magnitud en `App.js`. El umbral predeterminado está entre 1.1 y 1.5, lo que puede cambiarse para mejorar la precisión según las características del dispositivo.

## 👨‍💻 Créditos

Desarrollado por [Tu Nombre](https://github.com/tuusuario).
