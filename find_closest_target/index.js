// NOTE: You can use the following input values to test this function.
a1 = [-1, 3, 8, 2, 9, 5];
a2 = [4, 1, 2, 10, 5, 20];
aTarget = 24;
// closestSumPair(a1, a2, aTarget) should return [5, 20] or [3, 20]

b1 = [7, 4, 1, 10];
b2 = [4, 5, 8, 7];
bTarget = 13;
// closestSumPair(b1, b2, bTarget) should return [4, 8], [7, 7], [7, 5], or [10, 4]

c1 = [6, 8, -1, -8, -3];
c2 = [4, -6, 2, 9, -3];
cTarget = 3;
// closestSumPair(c1, c2, cTarget) should return [-1, 4] or [6, -3]

d1 = [19, 14, 6, 11, -16, 14, -16, -9, 16, 13];
d2 = [13, 9, -15, -2, -18, 16, 17, 2, -11, -7];
dTarget = -15;
// closestSumPair(d1, d2, dTarget) should return {-16, 2}, {-9, -7}


function pickClosestToTarget(arr1, arr2, targetNum) {
    const arr1_sort = [...arr1].sort((a,b) => a-b);
    const arr2_sort = [...arr2].sort((a,b) => a-b);

    let i = arr1_sort.length - 1;
    let j = 0;
    let smallestDiff = Math.abs(targetNum - arr1_sort[0] + arr2_sort[0]);
    let closestPair = [arr1_sort[0], arr2_sort[0]];

    while(i>=0 && j<arr2_sort.length) {
        let currentDiff = arr1_sort[i] + arr2_sort[j] - targetNum;

        if(Math.abs(currentDiff) < smallestDiff) {
            smallestDiff = Math.abs(currentDiff);
            closestPair[0] = arr1_sort[i];
            closestPair[1] = arr2_sort[j];
        } 

        if(currentDiff > 0) {
            i--;
        }

        if(currentDiff < 0) {
            j++;
        }

        if(currentDiff == 0) {
            return closestPair;
        } 
    }

    return closestPair;

}
