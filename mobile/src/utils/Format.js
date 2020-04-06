import React from 'react';

function numberFormat(value){
  return Intl.NumberFormat(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    }
  ).format(value);

}

const format = {numberFormat};

export default format;