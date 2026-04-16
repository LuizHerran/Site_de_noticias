import { initDb } from "./initDB.js";
import { mostrarMenu } from "./menu.js";
import { cadastrarUf } from "./ufs.js";
import { cadastrarCidade } from "./cidades.js";
import { cadastra_noticia } from "./cadastra_noticia.js";
import { deleta } from "./deleta_coisas.js";
initDb();
async function main() {
    let sair = false;
    while (!sair) {
        const opcao = await mostrarMenu();
        switch (opcao) {
            case "0":
                await cadastra_noticia();
                break;
            case "1":
                console.log("Listar notícias mais recentes ainda não implementado.");
                break;
            case "2":
                console.log("Listar notícias mais antigas ainda não implementado.");
                break;
            case "3":
                console.log("Listar notícias por estado ainda não implementado.");
                break;
            case "4":
                console.log("Listar notícias agrupadas por estado ainda não implementado.");
                break;
            case "5":
                await cadastrarUf();
                break;
            case "6":
                await cadastrarCidade();
                break;
            case "7":
                console.log("Encerrando o programa...");
                process.exit(0);
            case "8":
                deleta();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}
main().catch((erro) => {
    console.error("Erro ao executar o programa:", erro);
});
//# sourceMappingURL=index.js.map