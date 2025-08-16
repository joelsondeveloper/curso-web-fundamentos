// test-connection.js
const mongoose = require("mongoose");
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

if (!dbUser || !dbPass) {
  console.error("ERRO: Variáveis DB_USER ou DB_PASS não encontradas no .env!");
  process.exit(1);
}

const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.xcoe4uw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log("--- INICIANDO TESTE DE CONEXÃO ---");
console.log("Tentando conectar ao MongoDB Atlas...");

async function runTest() {
  try {
    await mongoose.connect(uri);
    console.log("✅ SUCESSO! A conexão com o MongoDB foi estabelecida.");
  } catch (error) {
    console.error("❌ FALHA! Ocorreu um erro ao tentar conectar.");
    // Imprime o erro detalhado que recebemos
    console.error(error);
  } finally {
    await mongoose.connection.close();
    console.log("--- TESTE DE CONEXÃO FINALIZADO ---");
  }
}

runTest();