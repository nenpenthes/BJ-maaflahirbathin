<%@ page language="java" pageEncoding="UTF-8"%>
<%
 String result;
 String loginUsername = request.getParameter("loginUsername");
 String loginPassword = request.getParameter("loginPassword");
 
 if (null != loginUsername && loginUsername.length() > 0) {
 if (null != loginPassword && loginPassword.length() > 0) {
 if (loginUsername.equals("jonan") && loginPassword.equals("qwe"))
 result = "{success:true}";
 else
 result = "{success:false,errors:{reason:'Login failed.Try again'}}";
 } else {
 result = "{success:false,errors:{reason:'Login failed.Try again'}}";
 }
 } else {
 result = "{success:false,errors:{reason:'Login failed.Try again'}}";
 }
%>
<%=result %>
