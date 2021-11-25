export interface IPokemonList {
    results : IPokemonListItem[]
}

interface IPokemonListItem{
    name:string;
    url:string;
}
