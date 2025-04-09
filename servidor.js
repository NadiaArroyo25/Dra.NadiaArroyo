// servidor.js - Un servidor simple para probar el sitio web

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.ttf': 'font/ttf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf'
};

// Creamos el servidor HTTP
const server = http.createServer((req, res) => {
    console.log(`Solicitud recibida: ${req.url}`);

    // Obtenemos la ruta de la URL
    let filePath = '.' + req.url;
    
    // Si la ruta es la raíz, servimos index.html
    if (filePath === './') {
        filePath = './index.html';
    }

    // Obtenemos la extensión del archivo
    const extname = path.extname(filePath);
    let contentType = MIME_TYPES[extname] || 'application/octet-stream';

    // Leemos el archivo
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Página no encontrada
                fs.readFile('./404.html', (error, content) => {
                    if (error) {
                        // No existe página 404
                        res.writeHead(404);
                        res.end('Página no encontrada');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    }
                });
            } else {
                // Error del servidor
                res.writeHead(500);
                res.end(`Error del servidor: ${error.code}`);
            }
        } else {
            // Éxito
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Iniciamos el servidor en el puerto especificado
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}/`);
    console.log(`Para ver el sitio, abre tu navegador y accede a: http://localhost:${PORT}/`);
    console.log('Presiona Ctrl+C para detener el servidor.');
}); 