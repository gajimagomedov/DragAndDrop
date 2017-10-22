

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

    function onMouseDown(e){
        if(e.which != 1){ //не левой кнопкой
            return false;
        }

        dragZone = elem.dragZone;

        if(!dragZone){
            return false;
        }
        
        //запомним ,что элемент нажат на текущих координатах pageX/pageY
        downX = pageX;
        downY = pageY;

        return false;
    }
    
}