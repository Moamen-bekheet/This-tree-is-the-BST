function Node(data=null, left=null, right=null){
    return {data, left, right};
}
function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    else{
        let middleIndex = parseInt(arr.length/2);
        let leftArr = mergeSort(arr.slice(0,middleIndex));
        let rightArr = mergeSort(arr.slice(middleIndex));
        return mergeArrs(leftArr, rightArr);
    }
}

    function mergeArrs(leftArr, rightArr){
        let [i,j] = [0,0];
        let sortedArr = [];
        while((i<leftArr.length)&&(j<rightArr.length)){
            if(leftArr[i]<=rightArr[j]){
                sortedArr.push(leftArr[i]);
                i++;
            }
            else{
                sortedArr.push(rightArr[j]);
                j++;
            }
        }
        while((i>=leftArr.length)&&(j<rightArr.length)){
            sortedArr.push(rightArr[j]);
            j++;
        }
        while((i<leftArr.length)&&(j>=rightArr.length)){
            sortedArr.push(leftArr[i]);
            i++;
        }
        return sortedArr;
}

}
function Tree(arr){
    sortedArr = mergeSort(arr);
    let noDuplicateArr = [];
    for(let i=0; i<sortedArr.length; i++){
        if(!noDuplicateArr.includes(sortedArr[i])){
            noDuplicateArr.push(sortedArr[i]);
        }
    }
    let root = buildTree(noDuplicateArr);
    return {root};
}
