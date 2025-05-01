import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    
    // çalışmıyor ! (yapamadım)
    // Normal weights
    'Rubik-Thin': require('../assets/fonts/Rubik-Light.ttf'), // 100 (Light ile temsil ediliyor)
    'Rubik-ExtraLight': require('../assets/fonts/Rubik-Light.ttf'), // 200 (Light ile temsil ediliyor)
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'), // 300
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'), // 400
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'), // 500
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'), // 600
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'), // 700
    'Rubik-ExtraBold': require('../assets/fonts/Rubik-ExtraBold.ttf'), // 800
    'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'), // 900
    
    // Italic weights
    'Rubik-ThinItalic': require('../assets/fonts/Rubik-LightItalic.ttf'), // 100
    'Rubik-ExtraLightItalic': require('../assets/fonts/Rubik-LightItalic.ttf'), // 200 
    'Rubik-LightItalic': require('../assets/fonts/Rubik-LightItalic.ttf'), // 300
    'Rubik-Italic': require('../assets/fonts/Rubik-Italic.ttf'), // 400
    'Rubik-MediumItalic': require('../assets/fonts/Rubik-MediumItalic.ttf'), // 500
    'Rubik-SemiBoldItalic': require('../assets/fonts/Rubik-SemiBoldItalic.ttf'), // 600
    'Rubik-BoldItalic': require('../assets/fonts/Rubik-BoldItalic.ttf'), // 700
    'Rubik-ExtraBoldItalic': require('../assets/fonts/Rubik-ExtraBoldItalic.ttf'), // 800
    'Rubik-BlackItalic': require('../assets/fonts/Rubik-BlackItalic.ttf'), // 900
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
