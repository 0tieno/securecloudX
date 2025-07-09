const { app } = require('@azure/functions');

// Import and register all functions
require('./functions/trackView');
require('./functions/getViews');
