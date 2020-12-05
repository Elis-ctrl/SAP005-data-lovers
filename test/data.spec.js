    import data from './mock.js';
    import { ordenarAaZ, buscarTipo, porNome, resultado } from '../src/data.js';

    

        describe('porNome', () => {
        it('Esperamos que seja uma função', () => {
            expect(typeof porNome).toBe('function');
        });
        
        it('Irá dar erro se colocar número', () => {
            expect(() => porNome(28)).toThrow(TypeError)
            
        });
       
        it('Esperamos que retorne os pokemons com "own"', () => {
            const resultado = porNome(data, "own");
            expect(resultado).toBe([
                {
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
        
        /*it('Esperamos que retorne os pokemons com "own"', () => {
            expect(porNome(data, "own")).toBe('function').toStrictEqual([
                {
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
    });*/

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
        });
        });
