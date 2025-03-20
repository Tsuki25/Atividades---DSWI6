export const quilogramaParaLibra = (quilograma) => { 
    const textResp = `Quilogramas para Libras: ${quilograma} kg = ${quilograma * 2.20462 } lb`
    return textResp
}

export const metroParaPe = (metros) => { 
    const textResp = `Metros para Pés: ${metros} m = ${ metros * 3.28084  } ft`
    return textResp
}

export const celsiusParaFahrenheit = (celsius) => { 
    const textResp = `Metros para Pés: ${celsius}ºC = ${ (celsius * 9/5) + 32  }ºF`
    return textResp
}