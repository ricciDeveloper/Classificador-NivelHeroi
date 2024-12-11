//Adicionado o valor randomicamente de XP aos heróis. 
const campeoesXP = {
    "Phoenix": 19149,
    "Jett": 16558,
    "Viper": 7234,
    "Sova": 16349,
    "Cypher": 11689,
    "Brimstone": 4913,
    "Sage": 11856,
    "Omen": 18846,
    "Raze": 9601,
    "Breach": 19624,
    "Killjoy": 9120,
    "Reyna": 19287,
    "Yoru": 1287,
    "Astra": 17437,
    "KAY/O": 1031,
    "Skye": 7080,
    "Chamber": 4093,
    "Neon": 17292,
    "Fade": 7431,
    "Harbor": 12514
};

console.log("Classificador de agentes Valorant: ")




//Mostrando as opções de agentes para o usuário. 
    /**Object.keys() é um método em JavaScript que retorna um array contendo as chaves (ou propriedades) enumeráveis de um objeto. Ou seja, ele coleta todas as "propriedades" de um objeto e as coloca em um array, permitindo que você itere ou acesse essas chaves de forma mais fácil. */
console.log(Object.keys(campeoesXP).join(", "));
//Aqui requisitamos a lib externa 'prompt-sync', para input de usuário.
const prompt = require('prompt-sync');
let herois = prompt('Qual herói deseja visualizar?');


//Aqui verificamos se o Agente inputado pelo usuário existe na lista de heróis
if(campeoesXP[herois]){
    //Se existir, acessamos o valor da chave heróis
    let xp = campeoesXP[herois];
    //Output do heróis e seu XP
    console.log(`${herois} tem ${xp} de XP.`);
    //Verificação condicional, para ranquearmos o heróis baseado em seu XP
    if (xp <= 1000) {
        console.log(`O agente de nome: ${herois} esta no nível FERRO.`);
    } else if (xp <= 2000) {
        console.log(`O agente de nome: ${herois} esta no nível PRATA.`);
    } else if (xp <= 3000) {
        console.log(`O agente de nome: ${herois} esta no nívelOURO.`);
    } else if (xp <= 4000) {
        console.log(`O agente de nome: ${herois} esta no nível PLATINA.`);
    } else if (xp <= 5000) {
        console.log(`O agente de nome: ${herois} esta no nívelDIAMANTE.`);
    } else if (xp <= 6000) {
        console.log(`O agente de nome: ${herois} esta no nívelASCENDENTE.`);
    } else if (xp <= 7000) {
        console.log(`O agente de nome: ${herois} esta no nívelIMORTAL.`);
    } else if (xp <= 8000) {
        console.log(`O agente de nome: ${herois} esta no nível RADIANTE.`);
    }    

}else{
    console.log("Agente não encontrado. Tente novamente com o nome correto.");
}