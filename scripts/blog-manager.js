#!/usr/bin/env node

/**
 * Blog Management Utility for SecureCloudX
 *
 * New flow: a markdown file with frontmatter is enough to publish.
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';
import {
  buildBlogManifest,
  createFrontmatterTemplate,
  syncBlogsAndManifest,
} from './blog-pipeline.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOGS_DIR = path.join(__dirname, '..', 'Docs', 'blogs');
const PUBLIC_BLOG_DIR = path.join(__dirname, '..', 'public', 'blog');

// Ensure directories exist
if (!fs.existsSync(BLOGS_DIR)) {
  fs.mkdirSync(BLOGS_DIR, { recursive: true });
}
if (!fs.existsSync(PUBLIC_BLOG_DIR)) {
  fs.mkdirSync(PUBLIC_BLOG_DIR, { recursive: true });
}

function createFilename(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim() + '.md';
}

function syncBlogFiles() {
  try {
    const manifest = syncBlogsAndManifest({
      blogsDir: BLOGS_DIR,
      publicBlogDir: PUBLIC_BLOG_DIR,
      log: console,
    });
    console.log(`✨ Blog sync completed (${manifest.posts.length} posts)!`);
    return true;
  } catch (error) {
    console.error('❌ Error syncing blog files:', error.message);
    return false;
  }
}

function getNowWithOffset() {
  const now = new Date();
  const offsetMinutes = -now.getTimezoneOffset();
  const sign = offsetMinutes >= 0 ? '+' : '-';
  const abs = Math.abs(offsetMinutes);
  const hours = String(Math.floor(abs / 60)).padStart(2, '0');
  const minutes = String(abs % 60).padStart(2, '0');
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .replace('T', ' ')
    .slice(0, 19);

  return `${local} ${sign}${hours}${minutes}`;
}

async function createPost(title, categories = []) {
  if (!title) {
    console.log('📝 Creating a new blog post...\n');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    title = await new Promise(resolve => {
      rl.question('Enter post title: ', resolve);
    });

    const categoriesInput = await new Promise(resolve => {
      rl.question('Enter categories (comma-separated): ', resolve);
    });

    categories = categoriesInput
      ? categoriesInput.split(',').map(category => category.trim())
      : [];

    rl.close();
  }

  const filename = createFilename(title);
  const filePath = path.join(BLOGS_DIR, filename);

  if (fs.existsSync(filePath)) {
    console.error(`❌ Post already exists: ${filename}`);
    return;
  }

  const frontmatter = createFrontmatterTemplate({
    title,
    date: getNowWithOffset(),
    categories,
  });
  const content = `${frontmatter}Write your post content here.\n`;

  fs.writeFileSync(filePath, content);
  syncBlogFiles();

  console.log(`✅ Created new blog post: ${filename}`);
  console.log(`📂 Location: ${filePath}`);
  console.log(`🏷️  Categories: ${categories.join(', ') || 'General'}`);
  console.log('\n🎉 Publish flow is automatic: edit the markdown file and save.');
}

function listPosts() {
  const manifest = buildBlogManifest(BLOGS_DIR);

  if (manifest.posts.length === 0) {
    console.log('📝 No blog posts found. Create your first post with:');
    console.log('   node scripts/blog-manager.js create');
    return;
  }

  console.log(`📚 Found ${manifest.posts.length} blog post(s):\n`);

  manifest.posts
    .forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   📅 ${post.date}`);
      console.log(`   📄 ${post.filename}`);
      console.log(`   🏷️  ${post.categories?.join(', ') || 'General'}`);
      console.log();
    });
}

function validatePosts() {
  console.log('🔍 Validating blog posts...\n');

  const manifest = buildBlogManifest(BLOGS_DIR);
  let errors = 0;

  for (const post of manifest.posts) {
    const filePath = path.join(BLOGS_DIR, post.filename);

    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing file: ${post.filename}`);
      errors++;
      continue;
    }

    try {
      const content = fs.readFileSync(filePath, 'utf8');

      if (!content.startsWith('---')) {
        console.warn(`⚠️  ${post.filename}: Missing frontmatter header`);
      }

      if (content.trim().length < 100) {
        console.warn(`⚠️  ${post.filename}: Very short content (${content.length} chars)`);
      }

      console.log(`✅ ${post.filename}: Valid`);
    } catch (error) {
      console.error(`❌ ${post.filename}: Error reading file - ${error.message}`);
      errors++;
    }
  }

  console.log(`\n🎯 Validation complete: ${manifest.posts.length - errors}/${manifest.posts.length} posts valid`);

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
    case 'create': {
      const title = args[1];
      const categoriesArg = args.find(arg => arg.startsWith('--categories='));
      const categories = categoriesArg
        ? categoriesArg.split('=')[1].split(',').map(c => c.trim())
        : [];

      await createPost(title, categories);
      break;
    }

    case 'list':
      listPosts();
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
      console.log('  create [title] [--categories=cat1,cat2]  Create a new frontmatter post');
      console.log('  list                               List all blog posts');
      console.log('  validate                          Validate all blog posts');
      console.log('  sync                              Sync markdown and regenerate manifest');
      console.log('\nExamples:');
      console.log('  node scripts/blog-manager.js create "My New Post" --categories=security,cloud');
      console.log('  node scripts/blog-manager.js list');
      console.log('  node scripts/blog-manager.js sync');
  }
}

// Run the CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { createPost, listPosts, validatePosts, syncBlogFiles };
