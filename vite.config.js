import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { syncBlogsAndManifest } from './scripts/blog-pipeline.js'

// Auto-sync blog files plugin
const blogSyncPlugin = () => {
  return {
    name: 'blog-sync',
    buildStart() {
      // Sync blog files and regenerate manifest on startup
      try {
        const srcDir = path.resolve('Docs/blogs')
        const destDir = path.resolve('public/blog')

        syncBlogsAndManifest({
          blogsDir: srcDir,
          publicBlogDir: destDir,
          log: console,
        })
      } catch (error) {
        console.warn('Blog sync failed:', error.message)
      }
    },
    handleHotUpdate({ file, server }) {
      // Auto-sync and regenerate manifest when blog markdown changes
      if (file.includes('Docs/blogs/') && file.endsWith('.md')) {
        try {
          syncBlogsAndManifest({
            blogsDir: path.resolve('Docs/blogs'),
            publicBlogDir: path.resolve('public/blog'),
            log: console,
          })

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
  server: {
    fs: {
      allow: ['..']
    }
  },
  assetsInclude: ['**/*.md'],
})
