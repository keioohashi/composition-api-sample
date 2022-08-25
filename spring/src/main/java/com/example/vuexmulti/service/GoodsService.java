package com.example.vuexmulti.service;

import java.util.*;

import org.springframework.context.annotation.Scope;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import javax.annotation.*;


/**
* 商品の取得、追加を行うサービス
**/
@Scope("singleton")
@Service
public class GoodsService {
	
	private List<Goods> goodsList = new ArrayList<Goods>();
	private int codeCount;
	
	
	public GoodsService(){
		//初期データとして5件用意
		Goods goods1 = new Goods("001", "データモデリング", "001", "2000");
		Goods goods2 = new Goods("002", "プロジェクトマネージャ", "001", "3000");
		Goods goods3 = new Goods("003", "多変量分析", "001", "2000");
		Goods goods4 = new Goods("004", "Javascript入門", "001", "2500");
		Goods goods5 = new Goods("005", "エルデンリング", "002", "7000");

		goodsList.add( goods1 );
		goodsList.add( goods2 );
		goodsList.add( goods3 );
		goodsList.add( goods4 );
		goodsList.add( goods5 );
		
		codeCount = 5;
		
	}
	
	/**
	 * 商品情報を取得するメソッド
	**/
	public Goods[] getGoods(){
		return goodsList.toArray( new Goods[]{} );
	}

	/**
	* 該当するIDの商品情報取得
	**/
	public Goods getGoodsById( String id ){
		return goodsList.stream().filter(goods -> goods.getCode().equals( id ) ).toArray( Goods[]::new)[0];
	}
	
	/**
	 * 商品情報を登録するメソッド
	**/
	public void registGoods( Goods regGoods ){
		
		if( regGoods.getCode() != null && regGoods.getCode().length() != 0) {
			Goods[] goodsArr = goodsList.stream().filter(goods -> goods.getCode().equals( regGoods.getCode() ) ).toArray( Goods[]::new);
			if( goodsArr.length != 0 ){
				goodsArr[0].setName( regGoods.getName() );
				goodsArr[0].setCategory( regGoods.getCategory() );
				goodsArr[0].setPrice( regGoods.getPrice() );
			}
		}else{
			codeCount++;
			String code = String.format("%03d", codeCount);
			regGoods.setCode( code );
			goodsList.add( regGoods );
		}
	}
	
}