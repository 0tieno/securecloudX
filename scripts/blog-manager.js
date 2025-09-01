#!/usr/bin/env node

/**
 * Blog Management Utility for SecureCloudX
 * 
 * This utility helps you create, list, and manage blog posts in markdown format.
 * 
 * Usage:
 *   node scripts/blog-manager.js create "My New Post" --tags security,cloud
 *   node scripts/blog-manager.js list
 *   node scripts/blog-manager.js serve
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOGS_DIR = path.join(path.dirname(__dirname), 'Docs', 'blogs');
const BLOG_CONFIG_FILE = path.join(BLOGS_DIR, 'blog-config.json');

// Ensure blogs directory exists
if (!fs.existsSync(BLOGS_DIR)) {
  fs.mkdirSync(BLOGS_DIR, { recursive: true });
}

// Helper function to create filename from title
function createFilename(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim() + '.md';
}

// Helper function to format date
function formatDate(date = new Date()) {
  return date.toISOString().split('T')[0];
}

// Load blog configuration
function loadBlogConfig() {
  try {
    if (fs.existsSync(BLOG_CONFIG_FILE)) {
      return JSON.parse(fs.readFileSync(BLOG_CONFIG_FILE, 'utf8'));
    }
  } catch (error) {
    console.warn('Could not load blog config, using defaults');
  }
  
  return {
    posts: [],
    author: 'SecureCloudX Team',
    baseUrl: '/Docs/blogs/'
  };
}

// Save blog configuration
function saveBlogConfig(config) {
  fs.writeFileSync(BLOG_CONFIG_FILE, JSON.stringify(config, null, 2));
}

// Create a new blog post
async function createBlogPost(title, options = {}) {
  const filename = createFilename(title);
  const filePath = path.join(BLOGS_DIR, filename);
  
  if (fs.existsSync(filePath)) {
    console.error(`❌ Blog post "${filename}" already exists!`);
    return;
  }
  
  const date = formatDate();
  const tags = options.tags ? options.tags.split(',').map(t => t.trim()) : ['general'];
  
  const content = `# ${title}

Write your blog post content here using Markdown syntax.

## Introduction

Start with an engaging introduction that hooks your readers.

## Main Content

Add your main content here. You can use:

- **Bold text** and *italic text*
- \`inline code\` and code blocks
- Lists and numbered lists
- Links: [SecureCloudX](https://securecloudx.com)
- Images: ![Alt text](image-url.jpg)

### Code Examples

\`\`\`bash
# Example bash command
echo "Hello, SecureCloudX!"
\`\`\`

\`\`\`javascript
// Example JavaScript code
function secureFunction() {
  console.log("Security first!");
}
\`\`\`

## Best Practices

Share key takeaways and best practices:

1. Always validate input
2. Use encryption for sensitive data
3. Implement proper authentication
4. Keep dependencies updated

## Conclusion

Summarize your key points and provide actionable next steps.

---

_Learn more about cloud security through hands-on challenges at [SecureCloudX](https://securecloudx.com)._
`;

  // Write the blog post file
  fs.writeFileSync(filePath, content);
  
  // Update blog configuration
  const config = loadBlogConfig();
  config.posts.push({
    filename,
    title,
    date,
    tags,
    author: config.author
  });
  saveBlogConfig(config);
  
  console.log(`✅ Created new blog post: ${filename}`);
  console.log(`📝 Edit the file at: ${filePath}`);
  console.log(`🏷️  Tags: ${tags.join(', ')}`);
  
  return filePath;
}

// List all blog posts
function listBlogPosts() {
  const config = loadBlogConfig();
  
  if (config.posts.length === 0) {
    console.log('📝 No blog posts found. Create one with: node scripts/blog-manager.js create "My First Post"');
    return;
  }
  
  console.log('\n📚 Blog Posts:\n');
  
  config.posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   📅 ${post.date}`);
      console.log(`   🏷️  ${post.tags.join(', ')}`);
      console.log(`   📄 ${post.filename}`);
      console.log('');
    });
}

// Generate updated blog files list for the React component
function generateBlogFilesArray() {
  const config = loadBlogConfig();
  
  const blogFilesArray = config.posts.map(post => ({
    filename: post.filename,
    date: post.date,
    tags: post.tags || ['general']
  }));
  
  console.log('\n🔧 Copy this array to your OpenSourceBlog.jsx file:');
  console.log('\nconst blogFiles = ' + JSON.stringify(blogFilesArray, null, 2) + ';');
}

// Interactive blog creation
async function interactiveCreate() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const askQuestion = (question) => {
    return new Promise((resolve) => {
      rl.question(question, resolve);
    });
  };
  
  try {
    console.log('\n📝 Create a New Blog Post\n');
    
    const title = await askQuestion('📌 Enter blog post title: ');
    if (!title.trim()) {
      console.log('❌ Title cannot be empty!');
      return;
    }
    
    const tagsInput = await askQuestion('🏷️  Enter tags (comma-separated, optional): ');
    const tags = tagsInput.trim() || 'general';
    
    await createBlogPost(title.trim(), { tags });
    
  } finally {
    rl.close();
  }
}

// Validate all blog posts
function validateBlogPosts() {
  const config = loadBlogConfig();
  let issues = 0;
  
  console.log('🔍 Validating blog posts...\n');
  
  config.posts.forEach(post => {
    const filePath = path.join(BLOGS_DIR, post.filename);
    
    if (!fs.existsSync(filePath)) {
      console.log(`❌ Missing file: ${post.filename}`);
      issues++;
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has proper title
    if (!content.startsWith(`# ${post.title}`)) {
      console.log(`⚠️  Title mismatch in ${post.filename}`);
      issues++;
    }
    
    // Check if file has content
    if (content.trim().length < 100) {
      console.log(`⚠️  ${post.filename} seems too short`);
      issues++;
    }
    
    console.log(`✅ ${post.filename} looks good`);
  });
  
  if (issues === 0) {
    console.log('\n🎉 All blog posts are valid!');
  } else {
    console.log(`\n⚠️  Found ${issues} issues that need attention.`);
  }
}

// Main CLI handler
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'create':
      if (args[1]) {
        const tagsIndex = args.indexOf('--tags');
        const tags = tagsIndex !== -1 ? args[tagsIndex + 1] : undefined;
        await createBlogPost(args[1], { tags });
      } else {
        await interactiveCreate();
      }
      break;
      
    case 'list':
      listBlogPosts();
      break;
      
    case 'generate':
      generateBlogFilesArray();
      break;
      
    case 'validate':
      validateBlogPosts();
      break;
      
    default:
      console.log(`
📚 SecureCloudX Blog Manager

Usage:
  node scripts/blog-manager.js create "Post Title" [--tags tag1,tag2]
  node scripts/blog-manager.js create                    # Interactive mode
  node scripts/blog-manager.js list                      # List all posts
  node scripts/blog-manager.js generate                  # Generate blog files array
  node scripts/blog-manager.js validate                  # Validate all posts

Examples:
  node scripts/blog-manager.js create "Cloud Security 101" --tags security,cloud,beginner
  node scripts/blog-manager.js list
      `);
  }
}

// Run the CLI
main().catch(console.error);

export {
  createBlogPost,
  listBlogPosts,
  generateBlogFilesArray,
  validateBlogPosts
};
