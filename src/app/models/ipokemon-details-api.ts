export interface IPokemonDetailsAPI {
    name : string;
    sprites:IPokemonSpritesAPI;
    types : IPokemonTypesAPI[];
}


interface IPokemonSpritesAPI{
    front_default: string;
}

interface IPokemonTypesAPI{
    type:IPokemonTypeAPI;
}

interface IPokemonTypeAPI{
    name:string;
}