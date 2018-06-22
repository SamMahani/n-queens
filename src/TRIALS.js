//FIRST TRY
  //for loop to traverse each COLUMN
    //create a temporary array for storing only column (i or index) dontUseArr

    //for loop to traverse each ROW
      //start at COLUMN s, ROW 3
      //add column value to dontUseArr ::: [0, 1]
      //if column value is not found in "dontUseArray" ::: != [0, ]
        //toggle at above    
    //
    
    //create function 
    
//SECOND TRY

 storageArr[0]; //fixme

  var storageArr = [];
  //create storage array for all results
  //create function with row and n as parameters
  function recurse(startingColNum, n) {
    //if condition row < n 
    if (startingColNum < n) {
      //create a blank nxn block
      var board = new Board({n:n});
      //create doNotUse array
      var doNotUseCol = [];
      var doNotUseRow = [];
        
      for (var row = 0; row < n; row++) {
        //start for loop using column variable
        for (var col = 0; col < n; col++) {
          var column;
          if (row === 0) {
            column = startingColNum;
          } else {
            column = col;
          }

          //if doNotUse array does not "contain" current column, else do nothing
          if (!doNotUseCol.includes(column) && !doNotUseRow.includes(row)) {
            //toggle [row, column]
            board.togglePiece(row, column);
            //push column into doNotUse array
            doNotUseCol.push(column);
            doNotUseRow.push(row);
          }//if
        }//for column
      }//for row
      //push current solution
      storageArr.push(board);


      //recurse
      recurse(startingColNum + 1, n);
    }//if
  }//recurse function

  recurse(0, n);

// /////////////////////////////////////////////////////////////////////////////

window.findNRooksSolution = function(n) {
  var solution = [];
  var storageArr = [];
  //create a blank nxn block
  var board = new Board({n:n});
// console.log('base attr')
// console.table(board.attributes);
  
  // for (var i = 0; i < n; n++)
  //   var key = 0;
    for (var l0 = 0; l0 < n; l0++) {

      board.togglePiece(0,l0);
// console.log('l0', l0)
// console.table(board.attributes);
      if(board.hasAnyRooksConflicts()) {board.togglePiece(0,l0);} 
      else {
        for (var l1 = 0; l1 < n; l1++) {
          board.togglePiece(1,l1);
// console.log('l1', l1)
// console.table(board.attributes);
          if(board.hasAnyRooksConflicts()) {board.togglePiece(1,l1);} 
          else {
            for (var l2 = 0; l2 < n; l2++) {
              board.togglePiece(2,l2);
// console.log('l2', l2)
// console.table(board.attributes);
              if(board.hasAnyRooksConflicts()) {board.togglePiece(2,l2);} 
              else {
                for (var l3 = 0; l3 < n; l3++) {
// console.log('l3', l3) 
// console.table(board.attributes);
                  board.togglePiece(3,l3);
                  if(board.hasAnyRooksConflicts()) {board.togglePiece(3,l3);}
                  else { 
                    
                    //push into
                    // console.log('final answer');
                    // console.log(board.changes);
                    console.table(board.get(0));
                    let tempArr = [];
                    tempArr.push(board.get(0).slice(0));
                    tempArr.push(board.get(1).slice(0));
                    tempArr.push(board.get(2).slice(0));
                    tempArr.push(board.get(3).slice(0));
                    console.log('temp', tempArr); 
                    storageArr.push(tempArr);
                    
                    board.togglePiece(3,l3)}//else
                }//l3
              board.togglePiece(2,l2)}//else
            }//l2
            board.togglePiece(1,l1);}//else
        }//l3
        board.togglePiece(0,l0);}//else
    }//l0


  solution = storageArr[0];
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

