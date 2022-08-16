<template>
	<div>
		<div class="inputItemDiv"><div class="inputTitleDiv">コード</div><input readonly class="inputread" type="text" v-model="goods.code"></div>

		<div class="inputItemDiv"><div class="inputTitleDiv">商品名</div><input class="input" type="text" v-model="goods.name"></div>
		<div class="inputItemDiv" v-show="!resNameVal"><div class="inputTitleDiv"></div><span class="validateError">入力必須。50桁以内で入力して下さい。</span></div>
		
		<div class="inputItemDiv"><div class="inputTitleDiv">カテゴリ</div>
			<select class="select" name="category" v-model="goods.category">
				<option v-for="categoryData in categoryDatas" :value="categoryData.id" :key="categoryData.id">
					{{ categoryData.name }}
				</option>
			</select>
		</div>
		<div class="inputItemDiv"><div class="inputTitleDiv">価格</div><input class="input" type="text" v-model="goods.price"></div>
		
		<div class="inputItemDiv" v-show="!resPriceVal"><div class="inputTitleDiv"></div><span class="validateError">入力必須。半角数字7桁以内で入力して下さい。</span></div>
		
		
		<div class="inputItemDiv" style="text-align:right">
			<button  type="button" class="button" @click='cancel'>ｷｬﾝｾﾙ</button>
			<button :disabled="resAllVal"  type="button" class="button" @click='regist'>登録</button>
		</div>
		

	</div>

</template>

<script>
import goodsValidator from '../composables/GoodsValidator'
import goodsRepository from '../composables/GoodsRepository'
import { useRoute, useRouter  } from 'vue-router'

export default ({
  name: 'GoodsList',
  
  setup(){
    //GoodsRepositoryモジュールからの変数、メソッドを宣言
    const { categoryDatas, goods, getGoodsById, registGoods } = goodsRepository()

    //ルータ使用変数宣言
    const route = useRoute()
    const router = useRouter()
    
    //パラメータでIDが渡された際は、商品情報を取得する
    if( route.params.id != null ){
      getGoodsById( route.params.id, getCallback  )
    }
    
    //データ取得時のコールバック( GoodsRepositoryのgetGoodsByIdメソッドに渡す)
    const getCallback = ( result ) =>{
      if( result != "success"){
        alert( result );
      }
    }

    //GoodsValidatorモジュールからの変数、メソッドを宣言
    //resName:名称入力チェック結果
    //resPricceVal:価格入力チェック結果
    //resAllVal:全ての項目の入力チェック結果
    const{ resNameVal, resPriceVal, resAllVal } = goodsValidator( goods )


    //登録ボタン押下時の処理
    const regist = () => {
      registGoods( goods.value, regCallback )
    }
    
    //登録ボタン押下時のコールバック( GoodsRepositoryのregistGoodsメソッドに渡す)
    const regCallback = ( result ) =>{
      if( result == "success"){
        alert("登録完了");
        router.push("/")
      }else{
        alert( result );
      }
    }
    
    //ｷｬﾝｾﾙ処理 商品一覧画面へ戻る
    const cancel = () => {
      router.push("/")
    }
    
    //template上で使用する変数を宣言
    return{
      categoryDatas,
      goods,
      regist,
      cancel,
      resNameVal,
      resPriceVal,
      resAllVal,     
    }
  }

})

</script>


<style>
	
	.inputItemDiv{
		width:360px;
		overflow: hidden;
		margin:2px;
	}
	
	.inputTitleDiv{
		float: left;
		width:100px;
		height:25px;

	}

	.inputDiv{
		float: left;
		width:250px;
		height:25px;
	}
	
	.input{
		width:250px;
		height:20px;
	}
	
	.inputread{
		width:250px;
		height:20px;
		background-color: #ccc;
	}
	
	.select{
		width:257px;
		height:25px;
	}
	
	.button{
		width:100px;
	}
	
	.validateError{
		color:red;
		width:250px;
		font-size:12px;
	}

</style>