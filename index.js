const { verificarAcesso } = require('./src/acessoSala');

const usuarioExemplo = { autorizado: false, cargo: 'user' };
console.log('Acesso permitido?', verificarAcesso(usuarioExemplo));
