import DragZone from 'DragZone';
import DragAvatar from 'DragAvatar';
import DropTarget from 'DropTarget';

let dragManager = new function(){

    /**
     * param {}
     * param {}
     * param {}
     * param {}
     * param {}
     */

    let dragZone;
        avatar, 
        dropTarget, 
        downX,
        downY;

    let self = this;

    function onMouseDown(event){
        if(event.which != 1){ //если нажали не левой кнопкой
            return false;
        }

        
        dragZone = elem.dragZone; // сохраняем в переменную объект dragZone, чтобы иметь доступ к его свойствам и методам 

        if(!dragZone){
            return false;
        }
        
        //запомним ,что элемент нажат на текущих координатах pageX/pageY
        downX = event.pageX;
        downY = event.pageY;

        return false;
    }

    function onMouseMove(event){

    }

    
    
}