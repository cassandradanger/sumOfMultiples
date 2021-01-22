//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (array, number) => {
  console.log(array, number);
  let finalNumer = 0;

  for(let i = 0; i < number; i++){
    if(i % array[0] == 0 || i % array[1] == 0){
      finalNumer += i;
    }
  }
  return finalNumer;
};
