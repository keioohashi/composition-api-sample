
//���i���X�g��n���Ă��炤
export default function ( goodsList ){

  let orderColumn = ''
  let orderBy = ''

  //�\�[�g���\�b�h��錾
  //�����̃J�����̃\�[�g�������s���B
  //���݂������̏ꍇ�͍~���ɁA�~���̏ꍇ�͏����Ƀ\�[�g
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

  //���Y���W���[�����񋟂���ϐ��A���\�b�h��錾
  return{
    sort
  }
}