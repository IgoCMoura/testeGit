export class Animal{
    private nome: string;
    private idade: number;

    constructor(n: string, i: number){
        this.nome = n;
        this.idade = i;
    }

    mostrarNome(): string{
        return this.nome
    }

    mostrarIdade(): number{
        return this.idade;
    }
    emitirSom(): void{
        console.log("Eu vou emitir meu this.setNome, se prepare")
    }

    setNome(novoNome: string): void{
        this.nome =novoNome;
    }

    setIdade(novaIDade: number): void{
        this.idade = novaIDade;
    }

}