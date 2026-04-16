import { db } from "./db.js";
import readline from "readline/promises";
import {rl } from "./menu.js";
import { stdin as input, stdout as output } from "node:process";
import { cidade, noticia, uf } from "./schema.js";
const ufs = await db.select().from(uf);
const cidades = await db.select().from(cidade);

async function mostrar_cidades(){
    //gere um menu com todas cidades cadastradas:
    let opc: number = 1;
    for (const item of cidades) {
    console.log(`${opc} - ${item.nome} (${item.ufId})`); //Trocar o id por sigla
    opc++;
    }
    return opc
}

export async function cadastra_noticia(){
    const titulo = (await rl.question("Qual o Titulo da Noticia: ")).trim();
    const texto = (await rl.question("Digite a materia:\n")).trim();

    if (!titulo || !texto){
        console.log("Titulo e materia são obrigatorios para cadastro!");
        return;
    }

    let cidadeId;
    let sair = false;

    while (!sair){
        let opc: number = await mostrar_cidades();
        cidadeId = await (await rl.question("Escolha o id da cidade: ")).trim();

        cidadeId = parseInt(cidadeId);
        if (isNaN(cidadeId)){console.log("Digite um número valido!"); continue;}
        if (cidadeId < 1 || cidadeId > opc){console.log("Opção invalida!"); continue;}
        else if (cidadeId == 0){sair = true;}

        //Guardar as matérias no bd:
        await db.insert(noticia).values({ titulo, texto, cidadeId });
        console.log("Noticia cadastrada!")

        const resposta = (await rl.question("Cadastrar outra noticia? (s)-Sim, (n)-Não: ")).trim();
        if (resposta == "s"){cadastra_noticia();}
        else if(resposta == "n"){return;}
        else console.log("Resposta invalida, voltando para o MENU INICIAR."); return;
    }
    


}
