<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h1>Welcome, <%= request.getAttribute("username") %>!</h1>
    <p>Current Date and Time: <%= request.getAttribute("currentDateTime") %></p>
    <a href="index.html">Logout</a>
</body>
</html>