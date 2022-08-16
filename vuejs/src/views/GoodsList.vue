<template>
  <div style="text-align:left;">
		<input type="text" v-model="searchQuery">
		<div class="table">
			<table>
				<thead>
					<tr>
						<th @click="sort('code')">コード</th>
						<th @click="sort('name')">名前</th>
						<th @click="sort('category')">カテゴリ</th>
						<th @click="sort('price')">価格</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr  v-for="(data) in goods" :key="data.code">
						<td>{{ data.code }}</td>
						<td class="tdname">{{ data.name }}</td>
						<td>{{ categoryDatas.filter( function (value){ return value.id === data.category })[0].name }}</td>
						<td>{{ data.price }}</td>
						<td><router-link :to="{ name: 'editGoods', params:{id:data.code}}">編集</router-link></td>
					</tr>
				</tbody>
			</table>
		</div>
		<input type="button" @click="addGoods" value="新規登録">
  </div>
</template>

<script>
import { onUnmounted } from 'vue'
import goodsRepository from '../composables/GoodsRepository'
import goodsFilter from '../composables/GoodsFilter'
import goodsSort from '../composables/GoodsSort'
import { useRouter  } from 'vue-router'
import { useStore } from 'vuex'

export default ({
  name: 'GoodsList',

  setup(){
    //GoodsRepositoryモジュールからの変数、メソッドを宣言
    //カテゴリ用データ、商品リスト、商品取得メソッド
    const { categoryDatas, goodsList, getGoods} = goodsRepository()

    //GoodsFilterモジュールからの変数、メソッドを宣言
    //検索のマッチした商品リスト、検索文字列
    const { matchGoods, searchQuery } = goodsFilter( goodsList )

    //GoodsSortモジュールからの変数、メソッドを宣言
    //ソート用メソッド
    const { sort } = goodsSort( goodsList )
    
    //ルータ使用変数宣言
    const router = useRouter()

    //Vuex使用変数宣言
    const store = useStore()
    
    //新規作成ボタン押下時の処理
    const addGoods = () => {
      router.push("/editGoods")
    }

    //データ取得時のコールバック( GoodsRepositoryのgetCodesメソッドに渡す)
    const callback = ( result )=>{
      if( result != "success"){
        alert( result )
      }
    }
    
    //Vuexから検索文字列を取得
    searchQuery.value = store.state.searchQuery
    
    //商品情報取得
    getGoods( callback )
    
    //Unmounted時(別画面への遷移など)、Vuexに検索文字列設定
    onUnmounted(()=>{
      store.dispatch('setSearchQuery', searchQuery.value)
    })
    
    //template上で使用する変数を宣言
    return{
      goods:matchGoods,
      addGoods,
      searchQuery,
      getGoods,
      categoryDatas,
      sort
    }
  }
})

</script>


<style>
	.table{
		height: 380px;
		width:580px;
		overflow: auto; 
		border:solid 1px;
	}

	table thead th {
		border: 1px solid #CCC;
		text-align: center;
		background-color: #EFEFEF;
		border-top : 1px solid #CCC;
		border-left : 1px solid #CCC;
		border-right : 1px solid #CCC;
		border-bottom : 0px solid #CCC;
		cursor:pointer;
	}

	table tbody td{
		min-width:100px;
		max-width:auto;
		height:25px;
	}

	
	.tdname{
		min-width:200px;
	}

</style>