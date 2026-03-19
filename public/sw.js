self.addEventListener("install", (event) => {
  console.log("Service Worker Installed")
})

self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated")
})

self.addEventListener("message", (event) => {
  if (event.data?.type === "SHOW_NOTIFICATION") {
    self.registration.showNotification("Healthcare SaaS", {
      body: event.data.payload,
      icon: "/vite.svg",
      badge: "/vite.svg"
    })
  }
})