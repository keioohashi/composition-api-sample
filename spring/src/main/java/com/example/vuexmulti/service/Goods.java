package com.example.vuexmulti.service;

/**
 * 商品情報クラス
 */
public class Goods{
	private String code;
	private String name;
	private String category;
	private String price;
	
	public Goods(){
	}
	
	public Goods( String code, String name, String category, String price){
		this.code = code;
		this.name = name;
		this.category = category;
		this.price = price;
	}

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
	
	public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
	public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}