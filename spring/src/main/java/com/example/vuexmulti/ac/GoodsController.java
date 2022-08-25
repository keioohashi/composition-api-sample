package com.example.vuexmulti.ac;

import java.lang.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.vuexmulti.service.GoodsService;
import com.example.vuexmulti.service.Goods;

@RestController
@RequestMapping("/goods")
@CrossOrigin
public class GoodsController {

	@Autowired
	private GoodsService goodsService;
	
	
	/**
	* 商品情報リストを取得
	* @return
	*/
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public Goods[] getGoodsList() {
		return goodsService.getGoods();
	}
	
	/**
	* 商品情報をIDを指定して取得
	* @return
	*/
    @RequestMapping(value = "/byId", method = RequestMethod.GET)
	public Goods getGoodsById( String id ){
		return goodsService.getGoodsById( id );
	}

	/**
	* 商品情報登録
	* @return 結果
	*/
	@RequestMapping(value = "/regist", method = RequestMethod.POST)
	public String regist( @RequestBody Goods goods ){
		

		System.out.println( goods.getCode() );
		System.out.println( goods.getName() );
		System.out.println( goods.getCategory() );
		System.out.println( goods.getPrice() );
		
		goodsService.registGoods( goods );
		
		return "Success";
	}
	

}