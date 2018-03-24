if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
     .then((registration) => {
      // Registrado com sucesso
      console.log('Service Worker registrado com sucesso');
     }).catch((err) => {
       // Registro falhou :(
       console.log('Registro do Service Worker falhou: ', err);
     })
  })
}