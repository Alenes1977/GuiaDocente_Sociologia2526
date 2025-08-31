// Constantes de fuentes para toda la aplicación
// Estas fuentes se pueden importar y usar en cualquier componente

export const FONT_FAMILIES = {
  POPPINS: "'Poppins', sans-serif",
  MONTSERRAT: "'Montserrat', sans-serif",
  ROBOTO: "'Roboto', sans-serif"
};

// Pesos de fuente
export const FONT_WEIGHTS = {
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700
};

// Estilos de texto predefinidos
export const TEXT_STYLES = {
  // Títulos
  H1: {
    fontFamily: FONT_FAMILIES.POPPINS,
    fontWeight: FONT_WEIGHTS.BOLD,
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    lineHeight: 1.1
  },
  
  H2: {
    fontFamily: FONT_FAMILIES.POPPINS,
    fontWeight: FONT_WEIGHTS.SEMIBOLD,
    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
    lineHeight: 1.2
  },
  
  H3: {
    fontFamily: FONT_FAMILIES.POPPINS,
    fontWeight: FONT_WEIGHTS.SEMIBOLD,
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    lineHeight: 1.3
  },
  
  // Textos
  SUBTITLE: {
    fontFamily: FONT_FAMILIES.ROBOTO,
    fontWeight: FONT_WEIGHTS.MEDIUM,
    fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
    lineHeight: 1.4
  },

  BODY: {
    fontFamily: FONT_FAMILIES.ROBOTO,
    fontWeight: FONT_WEIGHTS.REGULAR,
    fontSize: '1.05rem',
    lineHeight: 1.7
  },
  
  BODY_SMALL: {
    fontFamily: FONT_FAMILIES.ROBOTO,
    fontWeight: FONT_WEIGHTS.REGULAR,
    fontSize: '0.95rem',
    lineHeight: 1.6
  },
  
  TAG: {
    fontFamily: FONT_FAMILIES.ROBOTO,
    fontWeight: FONT_WEIGHTS.SEMIBOLD,
    fontSize: '0.85rem',
    lineHeight: 1.5
  },
  
  CAPTION: {
    fontFamily: FONT_FAMILIES.ROBOTO,
    fontWeight: FONT_WEIGHTS.MEDIUM,
    fontSize: '0.8rem',
    lineHeight: 1.4
  }
};

// Exportamos individuales para facilidad de uso
export const { POPPINS, MONTSERRAT, ROBOTO } = FONT_FAMILIES;
export const { REGULAR, MEDIUM, SEMIBOLD, BOLD } = FONT_WEIGHTS;
export const { H1, H2, H3, SUBTITLE, BODY, BODY_SMALL, TAG, CAPTION } = TEXT_STYLES;

// Exportamos como default
export default {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  TEXT_STYLES
}; 