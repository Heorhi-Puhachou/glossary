import * as constants from './TarNarPairs';

function tarNarConvert(tarashkevicaText) {
  constants.MYAKKI_ZNAK().forEach(value => {
    tarashkevicaText = tarashkevicaText.replace(value.tarask, value.narkam);
  });

  constants.I_YI.forEach(value => {
    tarashkevicaText = tarashkevicaText.replace(value.tarask, value.narkam);
  });

  return tarashkevicaText;
}

export default tarNarConvert;