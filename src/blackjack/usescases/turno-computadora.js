import { pedirCarta,valorCarta, crearCartaHtml} from "./";





/**
 * 
 * @param {Number} puntosMinimos PUNTOS MININMOS QUE LA CPU NECESITA PARA GANAR 
 * @param {HTMLElement} puntosHTML  html para mostrar los puntos
 * @param {Array<string>} deck 
 * @param {HTMLElement}divCartasComputadora 
 */

// turno de la computadora


export const turnoComputadora = ( puntosMinimos,puntosHTML, divCartasComputadora ,deck = [] ) => {
    if(!puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if(!deck ) throw new Error('Deck es necesario');
    if(!puntosHTML ) throw new Error(' argumento htmles necesario');
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = crearCartaHtml( carta)
        divCartasComputadora.append( imgCarta );
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}