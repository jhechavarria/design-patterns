import Door from '../interface/door';

export default class LabDoor implements Door {
    open() {
        console.log('Ouverture de la porte')
    }

    close() {
        console.log('Fermeture de la porte')
    }
}
