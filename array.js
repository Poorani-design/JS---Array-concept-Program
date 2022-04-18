console.log("============== multiple array into flatten array and print single value by line by line ============");

var arrays = [
    [1,2,1,24],
    [8,11,9,4],
    [7,0,7,27],
    [3,10,26,7]
  ];
  var merged = [].concat.apply([], arrays);
  // first merged into single array 
  console.log(merged);
 // single array prints array value using for loop
    var iterator = merged.values();
    for(let elements of iterator){
        console.log(elements);
    }
