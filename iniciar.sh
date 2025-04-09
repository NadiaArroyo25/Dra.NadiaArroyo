#!/bin/bash

# Script para iniciar el servidor web local

echo "Iniciando servidor web para Sonreír Para la Vida..."

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "Error: Node.js no está instalado."
    echo "Por favor, instale Node.js desde https://nodejs.org/"
    exit 1
fi

# Iniciar el servidor
node servidor.js

# Este código nunca se ejecutará a menos que el servidor se detenga
echo "Servidor detenido." 