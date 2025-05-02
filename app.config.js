export default {
  expo: {
    name: "MobileLab4",
    slug: "MobileLab4",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.nedavasilisk.todoreminder",
      googleServicesFile: "./GoogleService-Info.plist",
    },
    android: {
      package: "com.nedavasilisk.todoreminder",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      googleServicesFile: "./google-services.json",
    },
    plugins: [["onesignal-expo-plugin", { mode: "development" }]],
    web: {
      favicon: "./assets/favicon.png",
    },
    experiments: {
      typedRoutes: true,
    },
    extra: {
      oneSignalAppId: "YOUR KEY",
      oneSignalAPIKey:
          "YOUR KEY",
    },
  },
};


