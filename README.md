# Plantilla React + Vite + Tailwind CSS v4

Esta es una plantilla limpia para iniciar proyectos con:
- React 19
- Vite 6
- Tailwind CSS v4
- TypeScript

## Estructura del proyecto

```
/src
  /components      # Componentes reutilizables
  App.tsx          # Componente principal
  App.css          # Estilos personalizados (mínimos)
  index.css        # Importación de Tailwind
  main.tsx         # Punto de entrada
```

## Comandos disponibles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

## Tailwind CSS v4

Esta plantilla usa Tailwind CSS v4 con PostCSS. La configuración se encuentra en:
- `tailwind.config.js`
- `postcss.config.js`

## Añadir nuevos componentes

Coloca tus componentes en la carpeta `/src/components` siguiendo el patrón del componente Button.tsx como ejemplo.

## Usar como plantilla en GitHub

### Configurar como plantilla

1. Ve a la página del repositorio en GitHub: https://github.com/Alenes1977/plantilla_ReactVite_Typescript_Tailwind
2. Haz clic en "Settings" (en la barra de navegación superior)
3. En la sección "General", desplázate hacia abajo hasta encontrar "Template repository"
4. Marca la casilla "Template repository"
5. Guarda los cambios

### Opción 1: Usar GitHub como plantilla (recomendado)

1. Ve a la página del repositorio en GitHub
2. Haz clic en el botón verde "Use this template"
3. Selecciona "Create a new repository"
4. Completa la información del nuevo repositorio
5. Haz clic en "Create repository from template"
6. Clona el nuevo repositorio creado:
   ```bash
   git clone https://github.com/TU_USUARIO/NUEVO_REPOSITORIO.git
   cd NUEVO_REPOSITORIO
   npm install
   npm run dev
   ```

### Opción 2: Clonar directamente y cambiar el origen

1. Clona la plantilla:
   ```bash
   git clone https://github.com/Alenes1977/plantilla_ReactVite_Typescript_Tailwind.git NOMBRE_NUEVO_PROYECTO
   cd NOMBRE_NUEVO_PROYECTO
   ```
   
2. Elimina la conexión al repositorio original:
   ```bash
   git remote remove origin
   ```
   
3. Crea un nuevo repositorio en GitHub y conecta tu proyecto:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/NUEVO_REPOSITORIO.git
   git push -u origin master
   ```
   
4. Instala las dependencias y ejecuta:
   ```bash
   npm install
   npm run dev
   ```
