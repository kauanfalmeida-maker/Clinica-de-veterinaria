const atendimentos = [
    { id: 1, pet: "Ronaldo", tutor: "Kako", itens: [{ servicoId: 1, quantidade: 3 }] },
    { id: 2, pet: "Zamba", tutor: "Fabio", itens: [{ servicoId: 2, quantidade: 1 }] },
    { id: 3, pet: "Pé de Pano", tutor: "Vitoria", itens: [{ servicoId: 3, quantidade: 2 }] }
];


async function buscarAtendimentos(idAtendimento){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const listaFiltrada = atendimentos.filter((a) => a.id === idAtendimento);

            if (listaFiltrada.length > 0) {
                resolve(listaFiltrada);
            } else {
                reject("NÃO HÁ ATENDIMENTO PARA ESSE ID");
            }
        }, 1000);
    });
}

module.exports = { 
    buscarAtendimentos,
    atendimentos
};
