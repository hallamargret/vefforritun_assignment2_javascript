var input = document.getElementById("inputbox");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("myBtnCreate").click();
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
        delButton.id = "delButt";
        myBoard.appendChild(delButton);

        var header = document.createElement("h2");
        header.id="boardtitle"
        header.textContent = boards[i].name;

        myBoard.appendChild(header);
        container.appendChild(myBoard);
    }
};

drawBoard();




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
    delButton.id = "delButt";
    delButton.textContent = "X";
    myDiv.appendChild(delButton);


    var header = document.createElement("h2");
    header.id="boardtitle"
    header.textContent = myDiv.name;
    myDiv.appendChild(header);

    console.log(myDiv.id.substring(9));

    //Put the div into the board container
    var container = document.getElementById('boardcontainer');
    container.appendChild(myDiv);
};
