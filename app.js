
var templateBoard = document.getElementById("templateboard");
var templateTask = document.getElementById("templateTask");



var input = document.getElementById("inputbox");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("boardCreateBtn").click();
            console.log("enter pressed")
        }
    });

var input = document.getElementById("taskInputBox");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("CreateTaskBtn").click();
            console.log("enter pressed")
  }
});





var boards = [
    {id: "id1", name: "Board 1", description: "..."},
    {id: "idasd", name: "Board 2", description: "..."},
    {id: "id3", name: "Board 3", description: "..."}
];

function drawBoard () {
    var container = document.getElementById("boardcontainer");
    for (var i=0; i< boards.length; i++) {
        var myBoard = document.createElement("div");
        myBoard.id = boards[i].id;
        myBoard.className = "boardClass";
        

        //making the delete button
        var delButton = document.createElement("button");
        delButton.textContent = "X";
        delButton.id = "delButt"+ i;
        delButton.className="delButt";
        myBoard.appendChild(delButton);

        var header = document.createElement("h2");
        header.id="boardtitle"+ i;
        header.textContent = boards[i].name;


        var taskInput = document.createElement("input");
        taskInput.id = "taskInputBox"+ i;
        taskInput.placeholder = "Create new task";
        

        myBoard.appendChild(header);
        myBoard.appendChild(taskInput);
        container.appendChild(myBoard);
    }
};

drawBoard();


function CreateNewBoard(){
    var boardNew = templateBoard.cloneNode(true);
    boardNew.id = document.getElementsByClassName('boardClass').length;
    //boardNew.children[2].innerHTML = document.getElementById
    var inputField = document.getElementById('inputbox');
    var inputValue = inputField.value;
    boardNew.name = inputValue;

};



var divCounter = 0;

function createBoard () {
    //get the value from the input field
    var inputField = document.getElementById('inputbox');
    var inputValue = inputField.value;

    //create div with id equal to whatever is in the input field
    var myDiv = document.createElement("div");
    myDiv.id = "newBoard" + divCounter;
    myDiv.name = inputValue;
    divCounter++;
    myDiv.className = "boardClass";


    //making the delete button
    var delButton = document.createElement("button");
    delButton.id = "delButt"+ divCounter;
    delButton.textContent = "X";
    myDiv.appendChild(delButton);

    //making the board title
    var header = document.createElement("h2");
    header.id="boardtitle"+ divCounter;
    header.textContent = myDiv.name;
    myDiv.appendChild(header);


    //making the create new task input

    var taskInput = document.createElement("input");
    taskInput.id = "taskInputBox" + divCounter;
    taskInput.placeholder = "Create new task"
    myDiv.appendChild(taskInput);

    console.log(myDiv.id.substring(9));

    //Put the div into the board container
    var container = document.getElementById('boardcontainer');
    container.appendChild(myDiv);
};


function createTask(){
    var newCreatedTask = templateTask.cloneNode(true);
    //var boardOfTask= 
};


function delBoard(btn){
    var board = btn.parentElement;
    console.log(board)
    //if board has no tasks then we may delete
    board.remove()
};