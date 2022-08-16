
//商品リストを渡してもらう
export default function ( goodsList ){

  let orderColumn = ''
  let orderBy = ''

  //ソートメソッドを宣言
  //引数のカラムのソート処理を行う。
  //現在が昇順の場合は降順に、降順の場合は昇順にソート
  const sort = ( column ) =>{
  
    if( orderColumn != column ){
      orderColumn = column
      orderBy = "asc"
    }else{
      if( orderBy == "asc"){
        orderBy = "desc"
      }else{
        orderBy = "asc"
      }
    }
  
    goodsList.value.sort(
     (a, b)=>{
       let res1 = 1;
       let res2 = -1
       if( orderBy == "desc"){
         res1 = -1
         res2 = 1
       }
       if( a[column] > b[column] ){
         return res1
       }else{
         return res2
       }

     }
    )
  }

  //当該モジュールが提供する変数、メソッドを宣言
  return{
    sort
  }
}