import { db } from "./db.js";
import readline from "readline/promises";
import { rl } from "./menu.js";
import { stdin as input, stdout as output } from "node:process";
import { cidade, noticia, uf } from "./schema.js";
import { eq } from "drizzle-orm";
const ufs = await db.select().from(uf);
const cidades = await db.select().from(cidade);
export async function deleta() {
    console.log("Deletado ");
    await db.delete(uf).where(eq(uf.id, 7));
}
//# sourceMappingURL=deleta_coisas.js.map