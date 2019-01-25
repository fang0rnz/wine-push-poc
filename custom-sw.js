importScripts("/wine-push-poc/precache-manifest.b17fafa6ff82dc63005bc9b0b3e4310b.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
const urlB64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

self.addEventListener('activate', async () => {
  // This will be called only once when the service worker is activated.
  try {
    const applicationServerKey = urlB64ToUint8Array(
      'BLzuHmRezss1OAHSkTxNy2jOK7lIQlftGkH_zyZ_Vp3_MYcAne3l62jiGyYZX0pyHqLdJrX_A2semWAJbLVTTb0'
    );
    const options = { applicationServerKey, userVisibleOnly: true };
    const subscription = await self.registration.pushManager.subscribe(options);
    await fetch('https://journal-9fa6s1jwq.now.sh', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(subscription)
    });
  } catch (err) {
    console.log('Error', err);
  }
});

self.addEventListener('push', function(event) {
  if (event.data) {
    showLocalNotification('🍷', event.data.text(), self.registration);
  } else {
    console.log('Push event but no data');
  }
});

function showLocalNotification(title, body, swRegistration) {
  const options = {
    body
    // here you can add more properties like icon, image, vibrate, etc.
  };
  swRegistration.showNotification(title, options);
}

