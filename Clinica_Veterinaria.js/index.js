const fs = require('fs');
// Importando buscarAtendimentos E a lista inicial de atendimentos
const { buscarAtendimentos, atendimentos } = require("./atendimento");
const { buscarServico } = require("./servicos");

async function fecharConta(tutor) {
    try {
        
        const atendimentoTutor = atendimentos.find(a => a.tutor === tutor);

        if (!atendimentoTutor) {
            console.log(`Nenhum atendimento inicial encontrado para o tutor: ${tutor}`);
            return;
        }

        const lista = await buscarAtendimentos(atendimentoTutor.id);
        const registro = lista[0];

        let total = 0;
        let linhasContas = [];

       
        for (const item of registro.itens) {
            const servico = await buscarServico(item.servicoId);

            const subtotal = servico.preco * item.quantidade;
            total += subtotal;

            const linha = `${item.quantidade} x ${servico.nome} = R$ ${subtotal.toFixed(2)}`;
            console.log(linha);
            linhasContas.push(linha);
        }

        console.log(`\nTotal do atendimento: R$ ${total.toFixed(2)}`);
       
        const dadosParaSalvar = {
            tutor: registro.tutor,
            animal: registro.pet, 
            total: `R$ ${total.toFixed(2)}`
        };

        fs.writeFileSync('conta.json', JSON.stringify(dadosParaSalvar, null, 2), 'utf-8');
        console.log("\n Arquivo 'conta.json' gerado com sucesso! ");

    } catch (erro) {
        console.error(erro); 
        console.log("\nErro no processamento");
    }
}

fecharConta("Kako");







