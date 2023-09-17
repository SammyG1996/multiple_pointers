
function countUniqueValues(arr : number[] = []) :number { /**This will ensure only an array of numbers can be passed and ensures that it only return an numebr*/
    let first = 0; 
    let last = arr.length-1;
    let counter = 0;

    /** This will check if the first num in arr is different from the last and increment counter
     * however it will only be done if the array is greater than 2 as the code below can catch that*/
    if(arr[first] !== arr[last] && arr.length > 2){
        counter++;
    }
    /**This will then start on the beggining and end of the array to make comparisons and count the unique numbers */
    while(first < last){
        if(arr[first] === arr[last]){
            return counter
        }
        if(arr[first] !== arr[first + 1]){
            counter++;
        } 
        if(arr[last] !== arr[last - 1]){
            counter++;
        }
        first = first+1;
        last = last-1;
    }
    return counter
}


console.log(countUniqueValues([1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]));