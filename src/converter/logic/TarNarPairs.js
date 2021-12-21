export const MYAKKI_ZNAK = () => {
  let MZ = ['с', 'ц', 'в', 'н', 'з', 'м', 'л'];
  let MG = ['е', 'ю', 'я', 'ё', 'ё'];
  let ZM = [...MG, 'ь'];
  let pairs = [];
  for (let firstZ = 0; firstZ < MZ.length; firstZ++) {
    for (let secondZ = 0; secondZ < MZ.length; secondZ++) {
      for (let zmyakchatel = 0; zmyakchatel < ZM.length; zmyakchatel++) {
        let pair = {
          tarask: MZ[firstZ] + 'ь' + MZ[secondZ] + ZM[zmyakchatel],
          narkam: MZ[firstZ] + MZ[secondZ] + ZM[zmyakchatel],
        };
        pairs.push(pair);
      }
    }
  }
  console.log(pairs);
  return pairs;

};
export const I_YI =[
  {tarask:'а й ',narkam:'а і '},
  {tarask:'я й ',narkam:'я і '}
] ;
export const LACINK_TAG = 'be-lacinka';