#!/usr/bin/env node

/**
 * Blog Management Utility for SecureCloudX
 * 
 * This utility helps you create, list, and manage blog posts in markdown format.
 * 
 * Usage:
 *   node scripts/blog-manager.js create "My New Post" --tags security,cloud
 *   node scripts/blog-manager.js list
 *   node scripts/blog-manager.js generate
 *   node scripts/blog-manager.js validate
 *   node scripts/blog-manager.js sync
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOGS_DIR = path.join(__dirname, '..', 'Docs', 'blogs');
const PUBLIC_BLOG_DIR = path.join(__dirname, '..', 'public', 'blog');
const CONFIG_FILE = path.join(BLOGS_DIR, 'blog-config.json');
const REACT_COMPONENT_FILE = path.join(__dirname, '..', 'src', 'pages', 'OpenSourceBlog.jsx');

// Ensure directories exist
if (!fs.existsSync(BLOGS_DIR)) {
  fs.mkdirSync(BLOGS_DIR, { recursive: true });
}
if (!fs.existsSync(PUBLIC_BLOG_DIR)) {
  fs.mkdirSync(PUBLIC_BLOG_DIR, { recursive: true });
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

// Helper function to read blog config
function readBlogConfig() {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    }
  } catch (error) {
    console.warn('Error reading blog config:', error.message);
  }
  
  // Return default config
  return {
    posts: [],
    author: "SecureCloudX Team",
    baseUrl: "/blog/",
    siteConfig: {
      title: "SecureCloudX Blog",
      description: "Insights, tutorials, and thoughts on cloud security, DevSecOps, and modern development practices.",
      social: {
        github: "https://github.com/securecloudx",
        twitter: "https://twitter.com/securecloudX",
        email: "securecloudx.learn@gmail.com"
      }
    }
  };
}

// Helper function to write blog config
function writeBlogConfig(config) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}

// Sync blog files from Docs/blogs to public/blog
function syncBlogFiles() {
  console.log('🔄 Syncing blog files to public directory...');
  
  try {
    // Copy all markdown files
    const files = fs.readdirSync(BLOGS_DIR);
    const mdFiles = files.filter(file => file.endsWith('.md') && file !== 'README.md');
    
    for (const file of mdFiles) {
      const srcPath = path.join(BLOGS_DIR, file);
      const destPath = path.join(PUBLIC_BLOG_DIR, file);
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ Synced: ${file}`);
    }
    
    // Copy config file
    const configSrc = path.join(BLOGS_DIR, 'blog-config.json');
    const configDest = path.join(PUBLIC_BLOG_DIR, 'blog-config.json');
    if (fs.existsSync(configSrc)) {
      fs.copyFileSync(configSrc, configDest);
      console.log('✅ Synced: blog-config.json');
    }
    
    console.log('✨ Blog sync completed!');
    return true;
  } catch (error) {
    console.error('❌ Error syncing blog files:', error.message);
    return false;
  }
}

// Create a new blog post
async function createPost(title, tags = [], isOctoberChallenge = false) {
  if (!title) {
    console.log('📝 Creating a new blog post...\n');
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    title = await new Promise(resolve => {
      rl.question('Enter post title: ', resolve);
    });
    
    const tagsInput = await new Promise(resolve => {
      rl.question('Enter tags (comma-separated): ', resolve);
    });
    
    tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : [];
    
    rl.close();
  }
  
  const filename = createFilename(title);
  const filePath = path.join(BLOGS_DIR, filename);
  
  if (fs.existsSync(filePath)) {
    console.error(`❌ Post already exists: ${filename}`);
    return;
  }
  
  const date = formatDate();
  const content = `# ${title}

Welcome to this new blog post! This is your introduction paragraph that will be used as the excerpt.

## Getting Started

Write your main content here. You can use all the standard markdown features:

- **Bold text** and _italic text_
- \`Inline code\`
- [Links](https://example.com)

### Code Examples

\`\`\`javascript
// Example code block
function secureFunction() {
  console.log("Security first!");
}
\`\`\`

### Lists and More

1. Ordered lists work great
2. For step-by-step instructions
3. And procedures

> Use blockquotes for important notes or highlights

## Conclusion

Wrap up your post with key takeaways and next steps.

---

_Learn more at [SecureCloudX](https://securecloudx.com)._
`;
  
  // Write the file
  fs.writeFileSync(filePath, content);
  
  // Update config
  const config = readBlogConfig();
  const newPost = {
    filename,
    title,
    date,
    tags,
    author: config.author
  };
  
  config.posts.push(newPost);
  writeBlogConfig(config);
  
  // Sync files to public directory
  syncBlogFiles();
  
  console.log(`✅ Created new blog post: ${filename}`);
  console.log(`📂 Location: ${filePath}`);
  console.log(`🏷️  Tags: ${tags.join(', ') || 'none'}`);
  console.log('\n🎉 Your blog post is ready to edit!');
}

// List all blog posts
function listPosts() {
  const config = readBlogConfig();
  
  if (config.posts.length === 0) {
    console.log('📝 No blog posts found. Create your first post with:');
    console.log('   node scripts/blog-manager.js create');
    return;
  }
  
  console.log(`📚 Found ${config.posts.length} blog post(s):\n`);
  
  config.posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   📅 ${post.date}`);
      console.log(`   📄 ${post.filename}`);
      console.log(`   🏷️  ${post.tags?.join(', ') || 'no tags'}`);
      console.log();
    });
}

// Generate blog files array for React component
function generateBlogFilesArray() {
  const config = readBlogConfig();
  
  const blogFilesArray = config.posts.map(post => ({
    filename: post.filename,
    date: post.date,
    tags: post.tags || []
  }));
  
  const arrayString = `const blogFiles = ${JSON.stringify(blogFilesArray, null, 2)};`;
  
  console.log('📋 Blog files array for OpenSourceBlog.jsx:\n');
  console.log(arrayString);
  console.log('\n💡 Copy this array to replace the blogFiles constant in your React component.');
  
  return blogFilesArray;
}

// Validate all blog posts
function validatePosts() {
  console.log('🔍 Validating blog posts...\n');
  
  const config = readBlogConfig();
  let errors = 0;
  
  for (const post of config.posts) {
    const filePath = path.join(BLOGS_DIR, post.filename);
    
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing file: ${post.filename}`);
      errors++;
      continue;
    }
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has title
      if (!content.includes('# ')) {
        console.warn(`⚠️  ${post.filename}: No title found (missing # heading)`);
      }
      
      // Check if file has content
      if (content.trim().length < 100) {
        console.warn(`⚠️  ${post.filename}: Very short content (${content.length} chars)`);
      }
      
      console.log(`✅ ${post.filename}: Valid`);
    } catch (error) {
      console.error(`❌ ${post.filename}: Error reading file - ${error.message}`);
      errors++;
    }
  }
  
  console.log(`\n🎯 Validation complete: ${config.posts.length - errors}/${config.posts.length} posts valid`);
  
  if (errors === 0) {
    console.log('🎉 All blog posts are valid!');
  } else {
    console.log(`⚠️  Found ${errors} error(s). Please fix them before deploying.`);
  }
  
  return errors === 0;
}

// Main CLI function
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'create':
      const title = args[1];
      const tagsArg = args.find(arg => arg.startsWith('--tags='));
      const challengeArg = args.find(arg => arg === '--october-challenge');
      const tags = tagsArg ? tagsArg.split('=')[1].split(',').map(t => t.trim()) : [];
      
      if (challengeArg) {
        tags.push('OctoberChallenge', 'Community');
      }
      
      await createPost(title, tags, challengeArg);
      break;
      
    case 'list':
      listPosts();
      break;
      
    case 'generate':
      generateBlogFilesArray();
      break;
      
    case 'validate':
      validatePosts();
      break;
      
    case 'sync':
      syncBlogFiles();
      break;
      
    default:
      console.log('🚀 SecureCloudX Blog Manager\n');
      console.log('Usage:');
      console.log('  create [title] [--tags=tag1,tag2]  Create a new blog post');
      console.log('  list                               List all blog posts');
      console.log('  generate                          Generate blog files array');
      console.log('  validate                          Validate all blog posts');
      console.log('  sync                              Sync blog files to public directory');
      console.log('\nExamples:');
      console.log('  node scripts/blog-manager.js create "My New Post" --tags=security,cloud');
      console.log('  node scripts/blog-manager.js list');
      console.log('  node scripts/blog-manager.js sync');
  }
}

// Run the CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { createPost, listPosts, generateBlogFilesArray, validatePosts, syncBlogFiles };
