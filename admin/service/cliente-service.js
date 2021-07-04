const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((resposta) => {
    return resposta.json();
  });
};

const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json',
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  })
    .then((response) => {
      return response.body;
    })
    .then(() => {
      console.log(response.body);
    });
};

export const clienteService = {
  listaClientes,
  criaCliente,
};
