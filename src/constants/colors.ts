// Constantes de colores para toda la aplicación
// Estos colores se pueden importar y usar en cualquier componente

export const COLORS = {
  // Color principal
  PRIMARY_BLUE: '#5391cc',
  
  // Colores para actividades (azul)
  BLUE_LIGHT: '#3182ce',
  BLUE_DARK: '#2c5282',
  
  // Colores para metodologías (verde)
  GREEN_LIGHT: '#38a169',
  GREEN_DARK: '#276749',
  
  // Colores para evaluación (rojo)
  RED_LIGHT: '#e53e3e',
  RED_DARK: '#9b2c2c',
};

// También exportamos individualmente para facilitar el uso
export const PRIMARY_BLUE = COLORS.PRIMARY_BLUE;

// Azules
export const BLUE_LIGHT = COLORS.BLUE_LIGHT;
export const BLUE_DARK = COLORS.BLUE_DARK;

// Verdes
export const GREEN_LIGHT = COLORS.GREEN_LIGHT;
export const GREEN_DARK = COLORS.GREEN_DARK;

// Rojos
export const RED_LIGHT = COLORS.RED_LIGHT;
export const RED_DARK = COLORS.RED_DARK;

// Exportamos como default para poder importarlo como "import Colors from './constants/colors'"
export default COLORS; 