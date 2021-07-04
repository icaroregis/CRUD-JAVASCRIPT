import { clienteService } from '../service/cliente-service';

const formulario = document.querySelector('[data-form]');

addEventListener('submit', (event) => {
  const nome = event.target.querySelector('[data-nome]').value;
  const email = event.target.querySelector('[data-email]').value;
  clienteService.criaCliente(nome, email);
});
