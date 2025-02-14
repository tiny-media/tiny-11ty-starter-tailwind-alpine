import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

// Register plugins
Alpine.plugin(persist)

// Make Alpine available globally
window.Alpine = Alpine

// Initialize Alpine immediately
Alpine.start()

// Handle view transitions
document.addEventListener('click', (e) => {
  const link = e.target.closest('a')
  if (!link || !link.href.startsWith(window.location.origin)) return

  const currentPath = window.location.pathname
  const targetPath = new URL(link.href).pathname
  
  // Prevent navigation to the same page
  if (currentPath === targetPath) {
    e.preventDefault()
    return
  }

  // Handle view transitions
  if (!document.startViewTransition) return

  e.preventDefault()
  document.startViewTransition(() => {
    window.location.href = link.href
  })
})