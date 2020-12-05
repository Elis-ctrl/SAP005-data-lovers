import data from './mock.js'
import { ordenarAaZ, buscarTipo, porNome, resultado } from '../src/data.js'

describe('ordenarAaZ', () => {
    it('should be a function', () => {
        expect(typeof ordenarAaZ).toBe('function');
    });
});

describe('buscarTipo', () => {

    it('should be an object', () => {
        expect(typeof buscarTipo).toBe('function');
    });
});

describe('resultado', () => {

    it('should be a function', () => {
        expect(typeof resultado).toBe('function');
    });
})

describe('porNome', () => {
    it('should be a function', () => {
        expect(typeof porNome).toBe('function')

    });
    it('Irá dar erro se colocar número', () => {
        expect(() => (28).toThrow(TypeError))

    });
    it('Esperamos que retorne os pokemons com "uno"', () => {
        expect(porNome("uno", data.pokemon)).toStrictEqual([{
            "name": "unown",
            "type": [
                "psychic"
            ],
            "weaknesses": [
                "bug",
                "ghost",
                "dark"
            ],
        }])
    });

    it('Esperamos que retorne os pokemons com "mis"', () => {
        expect(porNome("mis", data.pokemon)).toStrictEqual([{
            "name": "misdreavus",
            "type": [
                "ghost"
            ],
            "weaknesses": [
                "ghost",
                "dark"
            ],
        }])
    });

    it('Esperamos que retorne os pokemons com "ste"', () => {
        expect(porNome("ste", data.pokemon)).toStrictEqual([{
            "name": "steelix",
            "type": [
                "steel",
                "ground"
            ],
            "weaknesses": [
                "fire",
                "water",
                "fighting",
                "ground"
            ],
        }])
    });
})