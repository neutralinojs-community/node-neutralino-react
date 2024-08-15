import NeutralinoApp from "node-neutralino"

async function main() {
  const app = new NeutralinoApp({
    url: "/",
    windowOptions: {
      enableInspector: false,
      frontendLibrary: {
        patchFile: "/react-src/public/index.html",
        devUrl: "http://localhost:3000",
        projectPath: "/react-src/",
        resourcesPath: "/react-src/build/",
        devCommand: "npm run start",
      }
    }
  });

  app.init();
  
  app.events.on("backend:minimize", (_ev) => {
    app.window.minimize()
  });
}

main();