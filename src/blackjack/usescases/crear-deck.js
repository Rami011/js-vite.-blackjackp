import _ from 'underscore';

// const miNombre = 'Ramiro'
// Esta función crea un nuevo deck
/**
 * 
 * @param {array<string>} tiposDeCarta ejemplov : ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ejemplo ['A','J','Q','K']
 * @returns {Array<string>} retorna un deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if(!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('TipoDeCarta es obligatorio como un arreglo');

    if(!tiposEspeciales || tiposDeCarta.length === 0)
        throw new Error('TipoEspeciales es obligatorio como un arreglo');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}

