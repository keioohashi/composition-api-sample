import { computed } from 'vue'
import { validLength, validInteger } from '../api/checker'

export default function ( goods ){

  //���i���p�`�F�b�N
  const nameValidator = () =>{
	return validLength(1, 10, goods.value.name)
  }

  //���i�p�`�F�b�N
  const priceValidator = () =>{    
    return validInteger(1,7, goods.value.price)
  }	
  
  //�S�Ẵ`�F�b�N
  const allValidator = () =>{
    var res = ( computed( nameValidator ).value && computed( priceValidator ).value ) 
    console.log( res )
    if( res ){
      return false
    }else{
      return true
    }
  }
  
  

  //computed�ɐݒ�
  //���i���A���i�̓��͂��ω������ۂɏ������N��
  //�S�`�F�b�N�͓o�^�{�^�������ۂɎg�p����
  const resNameVal = computed( nameValidator )
  const resPriceVal = computed( priceValidator )
  const resAllVal = computed( allValidator )

  //���Y���W���[�����񋟂���ϐ��A���\�b�h��錾
  return{
	resNameVal,
	resPriceVal,
	resAllVal
  }
}