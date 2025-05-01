// çalışmıyor, çözülemedi

export const colors = {
  primary: '#28AF6E',
  primaryDark: '#219653',
  primaryLight: '#E5F6EF',
  secondary: '#FF975C',
  textDark: '#13231B',
  textLight: '#979798',
  background: '#FFFFFF',
  backgroundDark: '#F5F5F5',
  error: '#E53935',
  success: '#4CAF50',
  warning: '#FF9800',
};

export const typography = {
  fontFamily: {
    // Regular fonts
    thin: 'Rubik-Thin',           // weight 100
    extraLight: 'Rubik-ExtraLight', // weight 200
    light: 'Rubik-Light',         // weight 300
    regular: 'Rubik-Regular',     // weight 400
    medium: 'Rubik-Medium',       // weight 500
    semiBold: 'Rubik-SemiBold',   // weight 600
    bold: 'Rubik-Bold',           // weight 700
    extraBold: 'Rubik-ExtraBold', // weight 800
    black: 'Rubik-Black',         // weight 900
    
    // Italic fonts
    thinItalic: 'Rubik-ThinItalic',         // weight 100
    extraLightItalic: 'Rubik-ExtraLightItalic', // weight 200
    lightItalic: 'Rubik-LightItalic',       // weight 300
    italic: 'Rubik-Italic',               // weight 400
    mediumItalic: 'Rubik-MediumItalic',     // weight 500
    semiBoldItalic: 'Rubik-SemiBoldItalic', // weight 600
    boldItalic: 'Rubik-BoldItalic',         // weight 700
    extraBoldItalic: 'Rubik-ExtraBoldItalic', // weight 800
    blackItalic: 'Rubik-BlackItalic',       // weight 900
    
    // Special
    mono: 'SpaceMono',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 30,
  },
  // FontWeight gerekli olmayabilir çünkü yukarıdaki fontFamily'ler zaten
  // ilgili ağırlıkları içerir. Ama bazı durumlar için saklıyoruz.
  fontWeights: {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 999,
}; 