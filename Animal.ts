export abstract class Animal{
    private nome: string;
    private idade: number;

    constructor(n: string, i: number){
        this.nome = n;
        this.idade = i;
    }
    //Mostra o nome do animal
    mostrarNome(): string{
        return this.nome
    }
    //Mostra a idade do animal
    mostrarIdade(): number{
        return this.idade;
    }

    //Emite o som do animal
    abstract emitirSom(): void;

    setNome(novoNome: string): void{
        this.nome =novoNome;
    }

    setIdade(novaIDade: number): void{
        this.idade = novaIDade;
    }

}