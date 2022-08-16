import { ref } from 'vue'
import { fetchGoods, fetchGoodsById, sendGoods } from '../api/serveraccess'

//商品情報の取得、登録、編集などの機能を提供する
export default function (){
  //商品一覧用変数の宣言、ref(リアクティブな値)として宣言
  let goodsList = ref([])

  //商品登録、編集用変数の宣言、refとして宣言
  let goods = ref({code:'',name:'',category:'001',price:''})

  //カテゴリのマスタを宣言、refとして宣言
  const categoryDatas = ref([])
  categoryDatas.value.push({id:'001', name:'本'})
  categoryDatas.value.push({id:'002', name:'ゲーム'})

  //商品取得メソッド宣言、非同期メソッドとして宣言
  //sereraccess.jsのメソッドをコール
  const getGoods = async( callback ) => {
    try{
      goodsList.value = await fetchGoods()
      callback("success")
    }catch(e){
      callback(e)
    }
  }

  //商品をIDで指定して取得するメソッド宣言、非同期メソッドとして宣言
  //sereraccess.jsのメソッドをコール
  const getGoodsById = async( id, callback ) =>{
    try{
      goods.value = await fetchGoodsById(id)
      callback("success")
    }catch(e){
      callback(e)
    }
  }
  
  //商品登録、更新メソッド宣言、非同期メソッドとして宣言
  //sereraccess.jsのメソッドをコール
  const registGoods = async( regGoods, callback  ) => {
    try{
      await sendGoods( regGoods )
      callback("success")
    }catch(e){
      callback(e)
    }
  }
 
  //当該ライブラリが提供する変数、メソッドを宣言
  return{
    goodsList,
    goods,
    getGoods,
    getGoodsById,
    registGoods,
    categoryDatas
  }
}