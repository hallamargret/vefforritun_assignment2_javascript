// Objects in javascript

var my_object = {
    "name": [{"firstName": "Halla"}, {"lastName":"jonsdottir"}],
    "phoneNumber": "321343",
    "email": "hallaj19@ru.is"
}


console.log("my name is: ", my_object.name);
console.log("firstname is: ", my_object.name[0].firstName);

const message = function(){
    console.log("Hi after 3 seconds")
}

function one(){
    console.log("1")
}

function two(){
    console.log("2")
}


setTimeout(message, 3000);
one();
two();

document.getElementById("myButton").addEventListener("click", function(){
    console.log("button clicked");
    document.getElementById("myText").innerText = "Click Event";
})

// Event listeners = get text when button is clicked


document.getElementById("myButton").addEventListener("mouseover", function(){
    document.getElementById("myText").innerText = "Mouseover Event";
})


function getDate(){
    document.getElementById("myText").innerText = new Date;
}

//document.getElementById("dateButton").addEventListener("click", getDate);


// ---------------------- Ajax Requests----------------------- 

const host = "https://veff-boards-h1.herokuapp.com";

// api: /api/v1/
getAllBoards();

// Ajax Get request = get data 

function getAllBoards(){
    console.log("inside getAllBoards");
    var url = host + '/api/v1/boards/';
    console.log(url);

    // GET request
    axios.get(url)
    //.then(function(response){

    //})
    //this to versions are the same
    .then(response =>{
        //Response
        console.log(response);
        //Data 
        data = response.data 
        console.log(data);
        // Get first board
        firstBoard = data[0];
        console.log(firstBoard);

        // Get first board id
        console.log(firstBoard.id);

    })
    .catch(error=>{
        console.log(error);
    })
}

//getAllBoards();

// Get board with specific ID
//function getBoardByID(boardID){
//    console.log("inside getBoardByID");
//    var url = host +'/api/v1/boards' + boardID + '/tasks';
//    console.log(url);
//}
//getBoardByID(1);


function getTasksFromBoardByID(boardID){
    console.log("inside getBoardByID");
    var url = host +'/api/v1/boards' + boardID + '/tasks';
    console.log(url);

    axios.get(url)
    .then(response =>{  //same as ".then(function(response){...}"
        console.log(response);
        data = response.data;
        console.log(data[0]);
        //Get task name
        console.log("taskName: ", data[0].taskName);
        // Get task id
        console.log("task id: ", data[0].id);
        //Get board id of task
        console.log("board id: ", data[0].boardID);
    })
    .catch(error =>{
        console.log(error);
    })
}
getBoardByID(1);




getTasksFromBoardById(1);

// Ajax POst request = post data


function createNewBoard(){
    console.log("inside create new board")
    var url = host + '/api/v1/boards';
    console.log(url);

    axios.post(url, {"name": "Heimavinna", "description": "Vefforritun"}) //Send data
    .then(response => {
        console.log(response)
    })
    .catch(error =>{
        console.log(error);
    })
}

//createNewBoard();


// AJAX DELETE request - Delete board by specific ID

function deleteBoard(id){
    console.log("inside delete");

    url = host + '/api/v1/boards/' + id;

    axios.delete(url)
    .then(response =>{
        console.log("Board with id " + id +" has been deleted");
    })
    .catch(error =>{
        console.log(error);
    })


}
//deleteBoard(12);


// Event Listener - get new box

function showNewBox(){
    document.getElementById("container").innerHTML += "<p class='box'> New box from button </p>";
}


document.getElementById("newBox").addEventListener("click", function(){
    console.log("get new box");
    showNewBox();
})

//Event Listener 

let input = document.getElementById("inputField");

// Find keycodes here: keycode.info/
input.addEventListener("keydown", event => {
    if (event.key == "n"){
        console.log("n was pressed in input field");
        document.getElementById("container").innerHTML += "<p class='box'> New box from input field </p>";
        
    }

})


// Delete deleteButton
//let deleteButton = document.getElementById("delete");
//deleteButton.addEventListener("click", function(){
//    console.log("Delete button clicked");
//    deleteButton.remove();
//})


// Delete one box
function deleteOneBox(){
    let allBoxes = document.getElementsByClassName("box");
    console.log(allBoxes);
    allBoxes[0].remove();
}

let deleteButton =document.getElementById("delete");
deleteButton.addEventListener("click", function(){
    console.log("delete button clicked");
    deleteOneBox();
})


deleteOneBox();