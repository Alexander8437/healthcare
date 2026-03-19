export const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission()
  console.log("Notification Permission:", permission)
}