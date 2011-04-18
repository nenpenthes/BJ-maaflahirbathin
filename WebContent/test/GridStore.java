package com.bigjava.jsf;

public class GridStore extends JSObject {

	public String toString() {
		return "new Ext.data.ArrayStore(" + super.toString() + ")";
	}
	
	public void addField(String name) {
		JSObject field = new JSObject();
		field.setAttribute("name", name);
		setArrayAttribute("fields", field);
	}
	
	public void setUrl(String url) {
		setAttribute("url",url);
	}
}
