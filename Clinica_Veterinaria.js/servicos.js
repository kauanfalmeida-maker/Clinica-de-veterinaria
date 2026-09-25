const servicos = [
    { id: 1, nome: "Consulta completa", preco: 200.00},
    { id: 2, nome: "Vacina", preco: 120.00},
    { id: 3, nome: "Exames", preco: 150.00},
];

async function buscarServico(servicoId) { 
    return new Promise ((resolve, reject) => {
        setTimeout(() => { 
            const servico = servicos.find(s => s.id === servicoId);
            if (servico) {
                resolve(servico);
            } else {
            
                reject(new Error(`Serviço com ID ${servicoId} não encontrado`));
            }
        }, 1000);
    });
}

module.exports = { buscarServico };
