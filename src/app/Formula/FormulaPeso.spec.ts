import {FormulaPeso} from './FormulaPeso';

describe ('formulaEnergia', ()  => {

    let component : FormulaPeso;
    beforeEach( () => {
        component = new FormulaPeso();
    });


    it('should return 0 if input is 0', () =>{ 

        const e = component.calcularPeso(0);
        expect(e).toBe(0);

    })
    it('should return 9.8 if input is 1', () =>{ 

        const e = component.calcularPeso(1);
        expect(e).toBe(9.8);

    })
    it('should return 294 if input is 30', () =>{ 

        const e = component.calcularPeso(30);
        expect(e).toBe(294);

    })
    it('should return 127.4 if input is 13', () =>{ 

        const e = component.calcularPeso(13);
        expect(e).toBe(127.4);

    })
    it('should return 264.6 if input is 27', () =>{ 

        const e = component.calcularPeso(27);
        expect(e).toBe(264.6);

    })


})