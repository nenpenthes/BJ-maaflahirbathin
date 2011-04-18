package com.bigjava.jsf;

import java.io.IOException;

public class LineChart extends Component {
	GridStore store = new GridStore();
	JSObject font = new JSObject();
	JSObject legend = new JSObject();
	JSObject xstyle = new JSObject();
	JSObject s1a = new JSObject();
	JSObject s1b = new JSObject();
	JSObject s1c = new JSObject();
	JSObject s1d = new JSObject();
	JSObject s1e = new JSObject();
	private DataEventListener callback=null;
	
	public LineChart(ObjectPool pool) {
		super(pool);
		
		setAttribute("store",store);
		//store.setUrl("line.store");
		store.setUrl("Dispatch?_evt=reqLoadContent&_obj=" + getId());
		store.setAttribute("autoLoad", true);
		
		setAttribute("xField", "time");
		setAttribute("yField", "data1");
		
		setAttribute("displayName", "HTTP");
		
		store.addField("time");
		store.addField("data1");
		
		font.setAttribute("family", "tahoma");
		font.setAttribute("size",13);
		
		legend.setAttribute("display", "none");
		legend.setAttribute("padding", 5);
		legend.setAttribute("font", font);
		
		xstyle.setAttribute("legend", legend);
		
		setAttribute("extraStyle", xstyle);
	}
	
	@Override
	public String getNamespace() {
		return "Ext.chart.LineChart";
	}

	@Override
	public String getXtype() {
		return "linechart";
	}
	
	public void reqLoadContent(AjaxEvent jxe) {
		if(callback!=null)
			try {
				callback.onLoadContent(jxe.getReponse().getWriter());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}
	
	public void setDataListener(DataEventListener cb) {
		callback = cb;
	}


}
