/* //////////////////////// GAME 2, DRAG AND DROP ///////////////////////// */
/* EMPTY ARRAYS */
let myArraySafe = [];
let myArrayNotSafe = [];

/* CORRECT ARRAYS */
let arraySafe = ["safe1", "safe2", "safe3"];
let arrayNotSafe = ["notsafe1", "notsafe2", "notsafe3"];


/* ENABLES DRAGGABLE */
$( ".ui-draggable" ).draggable({
	zIndex:100,
});


/* DROP ZONE SAFE */
$( "#safeBox" ).droppable({
    
    /* when item is dropped in*/
	drop: function( event, ui ) {
        /* getting the name of the item */
        let itemDropped = $(ui.draggable).attr('id');
        /* checking if the item is already in the array */
        if (myArraySafe.includes(itemDropped)){
            /* if it is, send message to the console - for developer to know*/
            console.log(itemDropped+ " already in the drop box");
        } else { /* otherwise add item's name to array*/
            myArraySafe.push(itemDropped);
            console.log(myArraySafe);
        }
    },    
    /* when item is dropped out */
    out: function( event, ui){
        /* getting the name of the item */
        let itemOut = $(ui.draggable).attr('id');
        /* find index of item in the array */
        let index = myArraySafe.indexOf(itemOut);
        console.log(index);

        /* remove item based on its index number */
        if (index > -1){
            myArraySafe.splice(index, 1);
            console.log(myArraySafe);
        }
    } 
	});

/* DROP ZONE NOT SAFE */
$( "#notSafeBox" ).droppable({
    /* when item is dropped in */
	drop: function( event, ui ) {
        /* getting name of the item */
        let itemDropped = $(ui.draggable).attr('id');
        /* checking if item is already in the array */
        if (myArrayNotSafe.includes(itemDropped)) {
            /* if it is, send message to the console - for developer to know*/
            console.log(itemDropped+ " already in the drop box");
        } else { /* otherwise add item's name to array*/
            myArrayNotSafe.push(itemDropped);
            console.log(myArrayNotSafe); 
        }

    },
    /* when item is dropped out */
    out: function( event, ui){
        /* getting the item's name */
        let itemOut = $(ui.draggable).attr('id');
        /* finding index of the item in the array */
        let index = myArrayNotSafe.indexOf(itemOut);
        console.log(index);

        /* remove item based on its index number */
        if (index > -1){
            myArrayNotSafe.splice(index, 1);
            console.log(myArrayNotSafe);
        }
    }  
	});

    
/* DISPLAY RESULT ON CLICK */
$('#check').click(function(){

   /* empty counters*/
   /* always restart both counter at 0 on click */
    let countSafe = 0;
    let countNotSafe = 0;

    /* compares safe item */
    for (let i=0; i<arraySafe.length; i++){
        for (let j=0; j<myArraySafe.length; j++){
            /* if item in both arrays, add 1 to the counter */
            if ((arraySafe[i] == myArraySafe[j]) && countSafe < 3){
            countSafe++;
            } 
        }
    }

    /* compares not safe items */
    for (let i=0; i<arrayNotSafe.length; i++){
        for (let j=0; j<myArrayNotSafe.length; j++){ 
            /* if item in both arrays, add 1 to the counter */
            if ((arrayNotSafe[i] == myArrayNotSafe[j]) && countNotSafe < 3 ){
            countNotSafe++;
            } 
        }
    }

    /* conditions */
    /* checking if all items have been dropped */
    if ((myArraySafe.length + myArrayNotSafe.length) < 6){
        $("#final").html('Final score:');
        $("#feedback").html('Keep going!');
        $("#result").html("You haven't dropped all the items!");
    } else {
        /* checking if both arrays are correct */
        if (countSafe == 3 && countNotSafe == 3) {
            $("#final").html('Final score:');
            $("#feedback").html('Well done!');
            $("#result").html('You have <span class="red">6/6</span> correct answers!');
        }
        /* if mistakes made, message to tell the user how many correct answer they made */
        else { 
            if ((countSafe + countNotSafe)<=3 && (countSafe + countNotSafe)>1){
                $("#final").html('Final score:');
                $("#feedback").html('Not bad!')
                $("#result").html('You have <span class="red">' + (countSafe + countNotSafe) + '/6</span> correct answers!');
            } else if ((countSafe + countNotSafe) <=1) {
                $("#final").html('Final score:');
                $("#feedback").html('Are you sure?!')
                $("#result").html('You have <span class="red">' + (countSafe + countNotSafe) + '/6</span> correct answers! Remember that you can go back to the lesson by clicking the button below!');
            } else {
                $("#final").html('Final score:');
                $("#feedback").html('Almost there!')
                $("#result").html('You have <span class="red">' + (countSafe + countNotSafe) + '/6</span> correct answers!');
            }
            
        }
    }   
}); 

/* RESET ONCLICK */
$('#reset').click(function(){
    window.location='game2.html';
});



