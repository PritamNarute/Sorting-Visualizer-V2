
export const newRandomArray = (min, max, length) => {
        const arr = [];
      
        for (let i = 0; i < length; i++) {
          arr.push({
            value: Math.floor(Math.random() * (max - min + 1) + min),
            color: "gray"
          }
          );
        }
      
        return arr;
}

export const newCustomArray = (str) => {
    const arr = str.trim().split(' ');
    const arr2  = [];
    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);
        if(!num) {continue;}
        const obj = {
          value: num,
          color: "gray"
        }
        arr2.push(obj);
    }
    return arr2;
}