import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'


// Register plugins
Alpine.plugin(persist)

// Make Alpine available globally
window.Alpine = Alpine

// Initialize Alpine immediately
Alpine.start()

console.log("Hello from alpine.js");