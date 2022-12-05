/**
 * Given a list of integers, create a function that returns the nth-rarest item. 
 * The function, should be called nth_most_rarest_item(list,n) 
 * and its signature should look like this nth_most_rarest_item(list,n); 
 * where list is the array of integers and n is the nth rarest term. 
 * For example in ([5,4,5,4,5,4,4,5,3,3,3,2,2,1,5], 2), 
 * if 2 is supplied as n, the answer is 2 as 2 is the 2nd rarest item.
 */




// 1. identify how many times each items appear in the array.
// 2. sort the value from 'step 1' in ascending order using the number of occurence of each item.
// 3. nth rarest item is now sorted value (n-1)[0].

list = [5,4,5,4,5,4,4,5,3,3,3,2,2,1,5];
n = 2;

const nth_most_rarest_item = (list,n) => {
    let newList = {};
    // Count the number of times each item appears in the list
    for (let item of list) {
        newList[item] = newList[item] ? newList[item] + 1 : 1;
    }//{ '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }
    
    // Change the values into an array format and sort using the number of occurence 
    const sort=Object.entries(newList).sort((a, b) => a[1] - b[1]);
    //[ [ '1', 1 ], [ '2', 2 ], [ '3', 3 ], [ '4', 4 ], [ '5', 5 ] ]
    // return console.log(sort);

    
    //nth raraest item now is sort[n-1][0]
     
    // To make sure that the nthRarestItem, n is not out of the scope
    // if n is greater than the total number of items in the sort array,
    // total number of items in the sorted list is used instead of n
    // if n is less than or equal to 0, 0 is used instead of n if not n is used.
    
    let totalItems=sort.length;

    
    let nthRarestItem = n > totalItems ? sort[totalItems - 1][0] : n <= 0 ? sort[0][0] : sort[n - 1][0];
    return nthRarestItem; 
}

nth_most_rarest_item(list,n);
