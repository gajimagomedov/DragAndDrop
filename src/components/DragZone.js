/**
 * @constructor
 * Зона из которой можно переносить объекты
 * Умеет обрабатывать начало переноса на себе и создавать "аватар"
 */
class DragZone {

    /**
     * @param {*Object} DOM-элемент, к которому привязана зона
     */

    constructor(elem){
        this._elem = elem;
        elem.dragZone = this;
    }

    _makeAvatar(){

    }

    /**
     * Обработать начало переноса.
     * @param {*number} downX - Координата изначального нажатия по X
     * @param {*number} downY - Кордината изначального нажатия по Y
     * @param {*Object} event - Текущее событие мыши
     */

    onDragStart(downX, downY, event){
        let avatar = this._makeAvatar;

        if(!avatar.initFromEvent(downX, downY, event)){
            return false;
        }

        return avatar;
    }

}


export default DragZone;