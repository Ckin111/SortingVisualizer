export const mergeSort = (arrayA: number[]) => {
    let len: number = arrayA.length;
    if (len <= 1 ){
        return arrayA;
    }

    let half: number = Math.floor(len/2);
    let arrayOne: number[] = arrayA.slice(0,half);
    let arrayTwo: number[] = arrayA.slice(half);

    arrayOne = mergeSort(arrayOne);
    arrayTwo = mergeSort(arrayTwo);

    return merge(arrayOne, arrayTwo);
}

const merge = (arrayOne: number[], arrayTwo: number[]) => {
    let arrayFinal: number[] = [];

    while (arrayOne.length > 0 && arrayTwo.length > 0 ) {
        if (arrayOne[0] < arrayTwo[0]){
            arrayFinal.push(arrayTwo[0]);
            arrayTwo.splice(0,1);
        } else{
            arrayFinal.push(arrayOne[0]);
            arrayOne.splice(0,1);
        }
    }

    while (arrayOne.length > 0) {
        arrayFinal.push(arrayOne[0]);
        arrayOne.splice(0,1);
    }

    while (arrayTwo.length > 0) {
        arrayFinal.push(arrayTwo[0]);
        arrayTwo.splice(0,1);
    }

    return arrayFinal;
}

export const quickSort = (arrayA: number[], start: number, end: number) => {
    let pivot,
        partitionIndex;

    if (start < end) {
        pivot = end;
        partitionIndex = partition(arrayA, pivot, start, end);

        // sort left
        quickSort(arrayA, start, partitionIndex - 1);
        // sort right
        quickSort(arrayA, partitionIndex + 1, end);
    }
    return arrayA;
}

const partition = (arrayA: number[], pivot:number,start: number, end: number) => {
    // const pivot = arrayA[end];
    // const piv = pivot(arrayA,start,end,end-start);
    var pivotValue = arrayA[pivot],
        partitionIndex = start;

    for (var i = start; i < end; i++) {
        if (arrayA[i] > pivotValue) {
            swap(arrayA, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arrayA, end, partitionIndex);
    return partitionIndex;
}

export const bubbleSort = (arrayA: number[]) => {
    let len:number = arrayA.length;

    for(let i = 1; i<len;i++) {
        for (let j = 0; j<len-1;j++){
            if(arrayA[j]<arrayA[j+1]){
                 swap(arrayA,j,j+1);
            }
        }
    }

    return arrayA;
}

export const heapSort = (arrayA: number[]) => {
    buildMaxHeap(arrayA);
}

const buildMaxHeap = (arrayA: number[]) => {
    let len: number = arrayA.length;
    for(let i = Math.floor(len/2);i>0;i--){
        heapify(arrayA,i);
    }
}

const heapify = (arrayA: number[], i: number) => {
    let left: number = 2 * i;
    let right: number = 2 * i + 1;

    // if (left <=)

}

// swap helper function

const swap = (arrayA: number[], a: number, b: number) => {
    const temp = arrayA[a];
    arrayA[a] = arrayA[b];
    arrayA[b] = temp;
}
