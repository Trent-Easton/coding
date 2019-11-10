'use strict';

        function starteBerechnung() {
            // let klasse =  'aquarium';
            // let hoehe = document.querySelector('.' + klasse + 'inpur[name=hoehe]');
            let hoehe = document.querySelector('input[name=hoehe]').value;
            let breite = document.querySelector('input[name=breite]').value;
            let tiefe = document.querySelector('input[name=tiefe]').value;
            let fuellstand = document.querySelector('input[name=fuellstand]').value;
            let bodengrund = document.querySelector('input[name=bodengrund]').value;
            let glasdicke = document.querySelector('input[name=glasdicke]').value;
            // let hoeheTrapez = document.querySelector('aquariumTrapez input[name=hoehe]');

            console.log(hoehe);
            console.log(typeof hoehe);

            let bereinigteHoehe = hoehe - glasdicke - bodengrund - fuellstand;
            let bereinigteBreite = breite - (2 * glasdicke);
            let bereinigteTiefe = tiefe - (2 * glasdicke);

            let volumen = bereinigteHoehe * bereinigteBreite * bereinigteTiefe;
            let liter = volumen / 1000;
            console.log(liter);

            document.querySelector('#wasserinhalt').innerHTML  = liter.toFixed(2) + ' Liter'; 
            /*
            wasserinhalt auf 2 Stellen limitiert + Maßangabe zb.: jetzte berechnen --> 145 Liter - innerHtml ist zwischen den tags
            */
        }
