//�����`�F�b�N
let validLength = (min, max, value) => {
  if( value.length >= min && value.length <= max ){
    return true
  }
  return false
}

//���l�����`�F�b�N
let validInteger = (minLength, maxLength, value) => {
    var pattern = '^[0-9]{' + minLength + ',' + maxLength + '}$'; 
    console.log( pattern )
    return value.match( pattern )
}

//�K�{�`�F�b�N
let validRequire = ( value) => {
    if( value == null || value.length == 0 ) return false
    return true
}

export{ validLength, validInteger, validRequire }