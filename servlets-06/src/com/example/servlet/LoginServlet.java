package com.example.servlet;

import java.io.IOException;
import java.util.Date;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Simple validation - in real app, check against database
        if (username != null && !username.trim().isEmpty() && password != null && !password.trim().isEmpty()) {
            request.setAttribute("username", username);
            request.setAttribute("currentDateTime", new Date().toString());
            request.getRequestDispatcher("welcome.jsp").forward(request, response);
        } else {
            response.sendRedirect("index.html");
        }
    }
}