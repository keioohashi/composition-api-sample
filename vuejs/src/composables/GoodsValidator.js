import { computed } from 'vue'
import { validLength, validInteger } from '../api/checker'

export default function ( goods ){

  //商品名用チェック
  const nameValidator = () =>{
	return validLength(1, 10, goods.value.name)
  }

  //価格用チェック
  const priceValidator = () =>{    
    return validInteger(1,7, goods.value.price)
  }	
  
  //全てのチェック
  const allValidator = () =>{
    var res = ( computed( nameValidator ).value && computed( priceValidator ).value ) 
    console.log( res )
    if( res ){
      return false
    }else{
      return true
    }
  }
  
  

  //computedに設定
  //商品名、価格の入力が変化した際に処理が起動
  //全チェックは登録ボタン押下可否に使用する
  const resNameVal = computed( nameValidator )
  const resPriceVal = computed( priceValidator )
  const resAllVal = computed( allValidator )

  //当該モジュールが提供する変数、メソッドを宣言
  return{
	resNameVal,
	resPriceVal,
	resAllVal
  }
}