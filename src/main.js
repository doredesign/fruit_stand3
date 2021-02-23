import '@babel/polyfill';
import App from './App.svelte';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css'

new App({
  target: document.getElementById('demo')
});
