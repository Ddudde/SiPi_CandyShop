import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Perfection-chat',
  webDir: 'build',
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
  },
};

export default config;