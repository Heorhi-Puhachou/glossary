import * as constants from './TarNarPairs';

function narTarConvert(narkamaukaText) {
  constants.MYAKKI_ZNAK().forEach(value => {
    narkamaukaText = narkamaukaText.replace(value.narkam, value.tarask);
  });

  constants.I_YI.forEach(value => {
    narkamaukaText = narkamaukaText.replace(value.narkam, value.tarask);
  });

  return narkamaukaText;
}

export default narTarConvert;