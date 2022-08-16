//桁数チェック
let validLength = (min, max, value) => {
  if( value.length >= min && value.length <= max ){
    return true
  }
  return false
}

//数値桁数チェック
let validInteger = (minLength, maxLength, value) => {
    var pattern = '^[0-9]{' + minLength + ',' + maxLength + '}$'; 
    console.log( pattern )
    return value.match( pattern )
}

//必須チェック
let validRequire = ( value) => {
    if( value == null || value.length == 0 ) return false
    return true
}

export{ validLength, validInteger, validRequire }