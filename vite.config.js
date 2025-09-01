import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Auto-sync blog files plugin
const blogSyncPlugin = () => {
  return {
    name: 'blog-sync',
    buildStart() {
      // Sync blog files on startup
      try {
        const srcDir = path.resolve('Docs/blogs')
        const destDir = path.resolve('public/blog')
        
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true })
        }
        
        const files = fs.readdirSync(srcDir)
        files.forEach(file => {
          if (file.endsWith('.md') || file.endsWith('.json')) {
            fs.copyFileSync(
              path.join(srcDir, file),
              path.join(destDir, file)
            )
          }
        })
        console.log('📝 Blog files synced automatically!')
      } catch (error) {
        console.warn('Blog sync failed:', error.message)
      }
    },
    handleHotUpdate({ file, server }) {
      // Auto-sync when blog files change
      if (file.includes('Docs/blogs/') && (file.endsWith('.md') || file.endsWith('.json'))) {
        try {
          const filename = path.basename(file)
          const destPath = path.resolve('public/blog', filename)
          fs.copyFileSync(file, destPath)
          console.log(`🔄 Auto-synced: ${filename}`)
          
          // Trigger page reload
          server.ws.send({
            type: 'full-reload'
          })
        } catch (error) {
          console.warn('Auto-sync failed:', error.message)
        }
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    blogSyncPlugin(),
  ],
})
