import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: (name) =>
    import(`./pages/${name}`).then((module) => module.default),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})

