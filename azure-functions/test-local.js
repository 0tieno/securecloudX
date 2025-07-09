// Quick test to verify function structure
const fs = require('fs');

console.log('=== Azure Functions Structure Test ===');

// Check if index.js exists and has the right content
if (fs.existsSync('./index.js')) {
    const content = fs.readFileSync('./index.js', 'utf8');
    
    if (content.includes('trackView') && content.includes('getViews')) {
        console.log('✅ index.js contains both functions');
    } else {
        console.log('❌ index.js missing functions');
    }
    
    if (content.includes("app.http('trackView'") && content.includes("app.http('getViews'")) {
        console.log('✅ Functions properly registered with app.http');
    } else {
        console.log('❌ Functions not properly registered');
    }
} else {
    console.log('❌ index.js not found');
}

// Check package.json
if (fs.existsSync('./package.json')) {
    const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    console.log('✅ package.json found');
    console.log('   Main entry:', pkg.main);
    console.log('   Dependencies:', Object.keys(pkg.dependencies || {}));
} else {
    console.log('❌ package.json not found');
}

// Check host.json
if (fs.existsSync('./host.json')) {
    console.log('✅ host.json found');
} else {
    console.log('❌ host.json not found');
}

console.log('\n=== Next Steps ===');
console.log('1. Use VS Code Azure Functions extension to deploy');
console.log('2. Or use Azure Portal Deployment Center');
console.log('3. Functions should appear as: trackView and getViews');
