# 🚀 Rastreador de la ISS - Ubicación en Tiempo Real

Una aplicación web que rastrea la ubicación de la Estación Espacial Internacional (ISS) en tiempo real y muestra imágenes del lugar donde se encuentra.

## ✨ Características

- 📍 Rastreo en tiempo real de la posición de la ISS
- 🌍 Geocodificación inversa para obtener nombres de ubicaciones
- 📸 Imágenes del lugar desde Pixabay
- 🛰️ Información detallada sobre la ISS
- 📱 Diseño responsive y moderno
- 🔄 Actualización automática cada 10 segundos

## 🛠️ Tecnologías Utilizadas

- React 17
- Axios para peticiones HTTP
- CSS3 con gradientes y efectos modernos
- APIs: Open Notify (ISS), Geoapify (geocodificación), Pixabay (imágenes)

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <tu-repositorio>
cd isslocation
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto:

```env
# Clave de API para Geoapify (geocodificación inversa)
REACT_APP_POSITION_KEY=tu_clave_de_geoapify_aqui

# Clave de API para Pixabay (imágenes)
REACT_APP_PIXABAY_KEY=tu_clave_de_pixabay_aqui
```

### 4. Obtener claves de API

#### Geoapify (Gratis - 3000 requests/mes)
1. Ve a [https://www.geoapify.com/](https://www.geoapify.com/)
2. Regístrate para obtener una cuenta gratuita
3. Copia tu API key

#### Pixabay (Gratis - 5000 requests/hora)
1. Ve a [https://pixabay.com/api/docs/](https://pixabay.com/api/docs/)
2. Regístrate para obtener una cuenta gratuita
3. Copia tu API key

### 5. Ejecutar en desarrollo
```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

### 6. Construir para producción
```bash
npm run build
```

## 🌐 Despliegue en Vercel

### Opción 1: Despliegue automático desde GitHub

1. **Conecta tu repositorio a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Selecciona tu repositorio `isslocation`

2. **Configura las variables de entorno:**
   - En la configuración del proyecto, ve a "Environment Variables"
   - Agrega:
     - `REACT_APP_POSITION_KEY` = tu clave de Geoapify
     - `REACT_APP_PIXABAY_KEY` = tu clave de Pixabay

3. **Despliega:**
   - Haz clic en "Deploy"
   - Vercel construirá y desplegará automáticamente

### Opción 2: Despliegue manual con Vercel CLI

1. **Instalar Vercel CLI:**
```bash
npm i -g vercel
```

2. **Iniciar sesión:**
```bash
vercel login
```

3. **Desplegar:**
```bash
vercel
```

4. **Configurar variables de entorno:**
```bash
vercel env add REACT_APP_POSITION_KEY
vercel env add REACT_APP_PIXABAY_KEY
```

5. **Desplegar a producción:**
```bash
vercel --prod
```

## 📁 Estructura del Proyecto

```
isslocation/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js          # Componente principal
│   ├── App.css         # Estilos principales
│   ├── Images.js       # Componente de imágenes
│   ├── index.js        # Punto de entrada
│   ├── index.css       # Estilos globales
│   └── images/
│       └── satelite.jpg
├── package.json
├── vercel.json         # Configuración de Vercel
└── README.md
```

## 🔧 Solución de Problemas

### Error: "Error obteniendo posición de la ISS"
- Verifica tu conexión a internet
- La API de Open Notify puede tener limitaciones

### Error: "Error obteniendo nombre de ubicación"
- Verifica que `REACT_APP_POSITION_KEY` esté configurado
- Asegúrate de que tu clave de Geoapify sea válida

### Error: "Error al obtener imágenes"
- Verifica que `REACT_APP_PIXABAY_KEY` esté configurado
- Asegúrate de que tu clave de Pixabay sea válida

### Problemas de despliegue en Vercel
- Verifica que las variables de entorno estén configuradas
- Asegúrate de que el build sea exitoso localmente

## 🌟 Características de la Aplicación

- **Rastreo en tiempo real:** La posición de la ISS se actualiza cada 10 segundos
- **Geocodificación:** Convierte coordenadas en nombres de lugares legibles
- **Galería de imágenes:** Muestra fotos del lugar donde está la ISS
- **Información detallada:** Datos sobre la ISS, estadísticas de imágenes
- **Diseño responsive:** Funciona perfectamente en móviles y escritorio
- **Interfaz moderna:** Gradientes, sombras y efectos visuales atractivos

## 📱 Uso

1. **Ver posición actual:** La aplicación muestra automáticamente la posición de la ISS
2. **Obtener ubicación:** Haz clic en "Ver imágenes del lugar" para ver fotos
3. **Ver ISS:** Haz clic en "Ver ISS" para información detallada
4. **Explorar imágenes:** Haz clic en cualquier imagen para verla en tamaño completo

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

**Creado por Tana** 🚀

**ultima actualizacion** 2024-12-19 15:30

## 🔄 **Hacer commit y push:**

### **1. Agregar el archivo:**
```bash
git add README.md
```

### **2. Hacer commit:**
```bash
git commit -m "Actualización para trigger de Vercel"
```

### **3. Hacer push:**
```bash
git push origin master
```

## 🎯 **¿Qué pasará después?**

1. **GitHub se actualizará** con el nuevo README
2. **Vercel detectará el cambio** automáticamente
3. **Comenzará un nuevo deploy** en tu proyecto
4. **Tu aplicación estará disponible** en la URL de Vercel

## ❓ **¿Quieres que ejecute estos comandos?**

Puedo ejecutar los comandos de git paso a paso para ti, o si prefieres hacerlo tú mismo, dime cuando esté listo.

**Una vez que hagas el push, Vercel debería empezar a construir tu aplicación automáticamente.** 

¿Quieres que ejecute los comandos o prefieres hacerlo tú?