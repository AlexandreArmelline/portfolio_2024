const fs = require('fs');
const path = require('path');

// Função para listar subdiretórios
function listarSubdiretorios(diretorio) {
    return fs.readdirSync(diretorio).filter((item) => {
        return fs.statSync(path.join(diretorio, item)).isDirectory();
    });
}

// Função para atualizar o arquivo "output.txt" com os subdiretórios
function atualizarArquivo(diretorio) {
    const subdiretorios = listarSubdiretorios(diretorio);
    const conteudo = subdiretorios.join('\n');

    fs.writeFile('output.txt', conteudo, (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo:', err);
            return;
        }
        console.log('Conteúdo atualizado com sucesso no arquivo output.txt');
    });
}

// Diretório que será monitorado
const diretorio = 'projetos'; 

// Chama a função pela primeira vez para salvar o estado inicial
atualizarArquivo(diretorio);


// Monitorando o diretório para alterações
fs.watch(diretorio, (eventType, filename) => {
    if (eventType === 'rename') {
        // "rename" indica que um item foi adicionado ou removido no diretório
        atualizarArquivo(diretorio);
    }
});



console.log(`Monitorando mudanças no diretório: ${diretorio}`);
