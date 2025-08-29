# 🚀 Guía de Despliegue en Vercel - Paso a Paso

## 📋 Prerrequisitos

1. **Cuenta de GitHub** con tu repositorio `isslocation`
2. **Cuenta de Vercel** (gratuita)
3. **Claves de API** para Geoapify y Pixabay

## 🔑 Paso 1: Obtener Claves de API

### Geoapify (Geocodificación)
1. Ve a [https://www.geoapify.com/](https://www.geoapify.com/)
2. Haz clic en "Get Started Free"
3. Regístrate con tu email
4. Ve a "API Keys" en tu dashboard
5. Copia tu API key

### Pixabay (Imágenes)
1. Ve a [https://pixabay.com/api/docs/](https://pixabay.com/api/docs/)
2. Haz clic en "Get API Key"
3. Regístrate con tu email
4. Copia tu API key

## 🌐 Paso 2: Desplegar en Vercel

### Opción A: Despliegue Automático (Recomendado)

1. **Ve a Vercel:**
   - Abre [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub

2. **Crea un nuevo proyecto:**
   - Haz clic en "New Project"
   - Selecciona tu repositorio `isslocation`
   - Haz clic en "Import"

3. **Configura el proyecto:**
   - **Framework Preset:** React
   - **Root Directory:** `./` (dejar por defecto)
   - **Build Command:** `npm run build` (dejar por defecto)
   - **Output Directory:** `build` (dejar por defecto)
   - **Install Command:** `npm install` (dejar por defecto)

4. **Configura las variables de entorno:**
   - Haz clic en "Environment Variables"
   - Agrega:
     ```
     Name: REACT_APP_POSITION_KEY
     Value: tu_clave_de_geoapify_aqui
     Environment: Production, Preview, Development
     ```
     ```
     Name: REACT_APP_PIXABAY_KEY
     Value: tu_clave_de_pixabay_aqui
     Environment: Production, Preview, Development
     ```

5. **Despliega:**
   - Haz clic en "Deploy"
   - Espera a que termine la construcción
   - ¡Tu app estará disponible en la URL que te proporcione Vercel!

### Opción B: Despliegue con CLI

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Inicia sesión:**
   ```bash
   vercel login
   ```

3. **Despliega:**
   ```bash
   vercel
   ```

4. **Configura variables de entorno:**
   ```bash
   vercel env add REACT_APP_POSITION_KEY
   vercel env add REACT_APP_PIXABAY_KEY
   ```

5. **Despliega a producción:**
   ```bash
   vercel --prod
   ```

## ✅ Paso 3: Verificar el Despliegue

1. **Revisa la URL de tu app** (ej: `https://tu-app.vercel.app`)
2. **Verifica que funcione:**
   - La posición de la ISS se muestra correctamente
   - Las imágenes se cargan sin errores
   - No hay errores en la consola del navegador

## 🔧 Paso 4: Solución de Problemas Comunes

### Error: "Build Failed"
- Verifica que `npm run build` funcione localmente
- Revisa los logs de construcción en Vercel

### Error: "Environment Variables Missing"
- Asegúrate de que las variables estén configuradas en Vercel
- Verifica que los nombres sean exactos: `REACT_APP_POSITION_KEY` y `REACT_APP_PIXABAY_KEY`

### Error: "API Key Invalid"
- Verifica que las claves de API sean correctas
- Asegúrate de que las cuentas de API estén activas

### Error: "CORS Issues"
- Las APIs utilizadas no tienen problemas de CORS
- Si persiste, verifica la configuración de Vercel

## 📱 Paso 5: Personalización (Opcional)

### Cambiar el dominio
1. Ve a tu proyecto en Vercel
2. Haz clic en "Settings" → "Domains"
3. Agrega tu dominio personalizado

### Configurar autodespliegue
- Cada vez que hagas push a tu rama principal, Vercel desplegará automáticamente
- Puedes configurar ramas específicas en "Settings" → "Git"

## 🎉 ¡Listo!

Tu aplicación de rastreo de la ISS está ahora desplegada y funcionando en Vercel. 

**URL de tu app:** `https://tu-app.vercel.app`

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en Vercel Dashboard
2. Verifica la consola del navegador
3. Asegúrate de que las APIs estén funcionando
4. Consulta la documentación de Vercel

---

**¡Disfruta tu aplicación desplegada! 🚀**
