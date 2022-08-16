import { ref, computed } from 'vue'

//���i���X�g��n���Ă��炤
export default function ( goodsList ){
  
  //�����������錾�Aref�Ƃ��Đ錾
  //GoodsList.vue��input���ڂƊ֘A�t���Ă���
  const searchQuery = ref('')

  //searchQuery�ύX���ɏ�ɓ��Y���W�b�N���N���AVue.js��computed�@�\���g�p����
  //�����ōi��ꂽ�l���i�[����ϐ���return�Ő錾���O���Ŏg�p���鎖���o����
  const matchGoods = computed(() => {
    return goodsList.value.filter(goods => {
      return goods.name.includes(searchQuery.value)
    })
  })

  //���Y���C�u�������񋟂���ϐ��A���\�b�h��錾
  return{
    searchQuery,
    matchGoods
  }
}