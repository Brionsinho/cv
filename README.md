# 🚀 Currículum Web
Currículum web interactivo con diseño moderno estilo "hacker" en tonos verdes.

## Estructura de Archivos

```
curriculum-web/
├── index.html       # Página web principal
├── data.json        # Datos personales (EDITA ESTE ARCHIVO)
└── README.md        # Este archivo
```

## Cómo Editar tu Información

### **IMPORTANTE: Solo necesitas editar `data.json`**

Abre el archivo `data.json` con cualquier editor de texto (Notepad, VS Code, etc.) y modifica tus datos:

```json
{
  "personal": {
    "nombre": "Tu Nombre",
    "titulo": "Tu Título",
    "subtitulo": "Tu Especialización",
    "emoji": "🛡️",
    "acercaDeMi": "Tu descripción..."
  },
  "contacto": {
    "email": "tuemail@ejemplo.com",
    "telefono": "+34 XXX XXX XXX",
    "linkedin": "https://linkedin.com/in/tu-perfil",
    "disponible": true
  }
  // ... resto de secciones
}
```

### Secciones Editables:

- **personal**: Nombre, título, descripción
- **contacto**: Email, teléfono, LinkedIn
- **experiencia**: Trabajos anteriores
- **educacion**: Estudios realizados
- **idiomas**: Idiomas que hablas
- **certificaciones**: Certificados obtenidos
- **habilidades**: Skills técnicas

---

## Desplegar en Vercel + GitHub

### **PASO 1: Crear cuenta en GitHub**

1. Ve a [github.com](https://github.com)
2. Haz clic en **"Sign up"**
3. Completa el registro:
   - Username: `tuusuario` (ejemplo: `rubenbrion`)
   - Email: tu email
   - Password: tu contraseña
4. Verifica tu email

---

### **PASO 2: Crear un repositorio**

1. Una vez dentro de GitHub, haz clic en el botón **"+"** (arriba a la derecha)
2. Selecciona **"New repository"**
3. Configura:
   - **Repository name**: `curriculum-web` (o el nombre que prefieras)
   - **Description**: "Mi currículum web profesional"
   - Marca como **Public** ✅
   - NO marques "Add a README file"
4. Haz clic en **"Create repository"**

---

### **PASO 3: Subir archivos a GitHub**

#### **Opción A: Interfaz Web (Más Fácil)**

1. En la página de tu repositorio recién creado, verás un botón **"uploading an existing file"**
2. Haz clic en ese enlace
3. Arrastra los 3 archivos:
   - `index.html`
   - `data.json`
   - `README.md`
4. Escribe un mensaje: "Primer commit - Currículum inicial"
5. Haz clic en **"Commit changes"**

#### **Opción B: GitHub Desktop (Recomendada para futuras actualizaciones)**

1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Instala y abre la aplicación
3. Inicia sesión con tu cuenta de GitHub
4. Haz clic en **"Clone a repository"**
5. Selecciona tu repositorio `curriculum-web`
6. Elige dónde guardarlo en tu PC
7. Copia los 3 archivos a esa carpeta
8. En GitHub Desktop verás los cambios
9. Escribe un mensaje: "Primer commit"
10. Haz clic en **"Commit to main"**
11. Haz clic en **"Push origin"**

---

### **PASO 4: Crear cuenta en Vercel**

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tu GitHub
5. ¡Listo! Ya tienes cuenta en Vercel

---

### **PASO 5: Desplegar tu sitio en Vercel**

1. En el dashboard de Vercel, haz clic en **"Add New..."**
2. Selecciona **"Project"**
3. Haz clic en **"Import Git Repository"**
4. Busca tu repositorio `curriculum-web`
5. Haz clic en **"Import"**
6. Configuración (déjalo todo por defecto):
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: (déjalo vacío)
   - Output Directory: (déjalo vacío)
7. Haz clic en **"Deploy"**
8. ¡Espera 30-60 segundos! ⏳

---

### ** ¡LISTO! Tu sitio está en línea**

Vercel te dará una URL como:
```
https://curriculum-web-tuusuario.vercel.app
```

**Comparte este enlace en tu currículum PDF, LinkedIn, etc.**

---

##  Cómo Actualizar tu Currículum

### **Método 1: GitHub Web (Rápido)**

1. Ve a tu repositorio en GitHub
2. Haz clic en `data.json`
3. Haz clic en el icono del lápiz ✏️ (Edit)
4. Modifica lo que necesites
5. Haz clic en **"Commit changes"**
6. Vercel actualizará automáticamente en 30 segundos

### **Método 2: GitHub Desktop (Recomendado)**

1. Abre la carpeta de tu proyecto en tu PC
2. Edita `data.json` con tu editor favorito
3. Guarda los cambios
4. Abre GitHub Desktop
5. Verás los cambios detectados
6. Escribe un mensaje: "Actualización de experiencia"
7. Haz clic en **"Commit to main"**
8. Haz clic en **"Push origin"**
9. Vercel actualizará automáticamente

---

## Dominio Personalizado (Opcional)

Si quieres usar tu propio dominio como `rubenbrion.com`:

### **PASO 1: Comprar dominio**

1. Ve a [Namecheap](https://www.namecheap.com) o [Google Domains](https://domains.google)
2. Busca tu dominio: `tudominio.com`
3. Cómpralo (~€10/año)

### **PASO 2: Conectar con Vercel**

1. En Vercel, ve a tu proyecto
2. Haz clic en **"Settings"**
3. Haz clic en **"Domains"**
4. Escribe tu dominio: `tudominio.com`
5. Haz clic en **"Add"**
6. Vercel te dará instrucciones DNS
7. Ve a tu proveedor de dominio (Namecheap, etc.)
8. Añade los registros DNS que Vercel te indica
9. Espera 24-48 horas para propagación
10. ¡Listo! Tu sitio estará en `tudominio.com`

---

## Solución de Problemas

### **El sitio no carga los datos**

- Verifica que `data.json` esté en la misma carpeta que `index.html`
- Revisa que el JSON sea válido (sin comas extras, comillas correctas)
- Usa [JSONLint](https://jsonlint.com/) para validar tu JSON

### **Los colores no se ven bien**

- Los colores dinámicos de Tailwind pueden no funcionar perfectamente
- Si ves problemas, edita `index.html` y reemplaza las clases dinámicas

### **Quiero cambiar el diseño**

- Edita `index.html` directamente
- Busca las secciones que quieres modificar
- Guarda y sube los cambios a GitHub

---

## Soporte

Si tienes problemas:
1. Revisa este README completo
2. Verifica que todos los archivos estén subidos correctamente
3. Consulta la documentación de [Vercel](https://vercel.com/docs)
4. Consulta la documentación de [GitHub](https://docs.github.com)

---

## Licencia

Este proyecto es de uso personal. Pongo a disposición el itinerario realizado. Puedes modificarlo como quieras.

---
