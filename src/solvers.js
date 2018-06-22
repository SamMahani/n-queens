/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  var storageArr = [];
  var board = new Board({n:n});

  
  var recurse = function(row) {
    for (var column = 0; column < n; column++) {
      board.togglePiece(row,column);
      if(board.hasAnyRooksConflicts()) {board.togglePiece(row,column);} 
      else if(row < n - 1) {
        recurse(row + 1);
        board.togglePiece(row, column);
      }//else if
      else { 
        console.table(board.get(0));
        let tempArr = [];
        for (var i = 0; i < n; i++) {
          tempArr.push(board.get(i).slice(0));
        }
        storageArr.push(tempArr);
      }//else
    }//for
  }//recurse function

  recurse(0);


  solution = storageArr[0];
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solutionCount;
  
  if ( n === 0) {
    return 1;
  }
  return n* countNRooksSolutions(n-1);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
//debugger;
  var solution = [];
  var storageArr = [];
  var board = new Board({'n':n});
  
  if (n === 0 || n === 1) {
      return 1;
    }
  if (n === 2 || n === 3) {
   return board.rows();
  }

  var recurse = function(row) {
    for (var column = 0; column < n; column++) {
      board.togglePiece(row,column);
      if(board.hasAnyQueenConflictsOn()) {board.togglePiece(row,column);} 
      else if(row < n - 1) {
        recurse(row + 1);
        board.togglePiece(row, column);
      }//else if
      else { 
        console.table(board.get(0));
        let tempArr = [];
        for (var i = 0; i < n; i++) {
          tempArr.push(board.get(i).slice(0));
        }
        storageArr.push(tempArr);
      }//else
    }//for
  }//recurse function

  recurse(0);

  solution = storageArr[0];
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
