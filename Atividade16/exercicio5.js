let eventos = require('events');
let EmissorEventos = eventos.EventEmitter;

let ee = new EmissorEventos();

ee.on('dados', (fecha) => {
  console.log(fecha);
});

ee.emit('dados', 'primeira vez ' + Date.now());

setInterval(() => {
  ee.emit('dados', Date.now());
}, 500);
