#!/usr/bin/env node
// Gera o "codigoHash" de um evento para colar em .github/eventos.json.
//
//   node .github/scripts/gerar-codigo-evento.js NUVEM42
//
// O código em si (NUVEM42) você anuncia só no encontro. No repositório fica
// apenas o hash — quem lê o arquivo não descobre o código.
const { hashCodigo } = require('./perfis');

const codigo = process.argv.slice(2).join('');
if (!codigo) {
  console.error('Uso: node .github/scripts/gerar-codigo-evento.js <CÓDIGO>');
  process.exit(1);
}
console.log(`Código anunciado no encontro: ${codigo.toUpperCase().replace(/\s+/g, '')}`);
console.log(`"codigoHash": "${hashCodigo(codigo)}"`);
