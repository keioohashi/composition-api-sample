import { ref, computed } from 'vue'

//商品リストを渡してもらう
export default function ( goodsList ){
  
  //検索文字列を宣言、refとして宣言
  //GoodsList.vueのinput項目と関連付けている
  const searchQuery = ref('')

  //searchQuery変更時に常に当該ロジックが起動、Vue.jsのcomputed機能を使用する
  //検索で絞られた値を格納する変数をreturnで宣言し外部で使用する事が出来る
  const matchGoods = computed(() => {
    return goodsList.value.filter(goods => {
      return goods.name.includes(searchQuery.value)
    })
  })

  //当該ライブラリが提供する変数、メソッドを宣言
  return{
    searchQuery,
    matchGoods
  }
}