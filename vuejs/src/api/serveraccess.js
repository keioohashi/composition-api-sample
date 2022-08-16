import * as axios from 'axios'

//商品全権取得
let fetchGoods = ( ) => {
  
  return new Promise((resolve, reject) => {
      axios
        .get('/goods/list')
        .then(response => {
           resolve(response.data)
         }).catch(error => {
            reject(error)
         })
    }).catch(() => {
      throw 'サーバアクセスエラー'
    })
}

//商品をID指定で取得
let fetchGoodsById = (id) => {
    

  return new Promise((resolve, reject) => {
      axios
        .get('/goods/byId?id=' + id)
        .then(response => {
           resolve(response.data)
         }).catch(error => {
            reject(error)
         })
    }).catch(() => {
      throw 'サーバアクセスエラー'
    })


}

//商品登録、更新
let sendGoods = (goods) => {
    
  return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:8080/goods/regist', goods )
        .then(response => {
           resolve(response.data)
         }).catch(error => {
            reject(error)
         })
    }).catch(() => {
      throw 'サーバアクセスエラー'
    })
    
}

export{ fetchGoods, fetchGoodsById, sendGoods }
