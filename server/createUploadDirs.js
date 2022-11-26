import fs from 'fs';

fs.mkdirSync('./public');
fs.mkdirSync('./public/uploads', { recursive: true });
fs.mkdirSync('./public/uploads/images', { recursive: true });
fs.mkdirSync('./public/uploads/videos', { recursive: true });
