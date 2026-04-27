package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/welcome")
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String username = request.getParameter("username");
        if (username == null || username.trim().isEmpty()) {
            username = "Guest";
        }
        
        // Format the date and time nicely
        SimpleDateFormat formatter = new SimpleDateFormat("EEEE, MMMM d, yyyy 'at' hh:mm:ss a");
        String formattedDate = formatter.format(new Date());

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        out.println("<!DOCTYPE html>");
        out.println("<html lang=\"en\">");
        out.println("<head>");
        out.println("    <meta charset=\"UTF-8\">");
        out.println("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
        out.println("    <title>Welcome - " + username + "</title>");
        out.println("    <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap\" rel=\"stylesheet\">");
        out.println("    <style>");
        out.println("        * { margin: 0; padding: 0; box-sizing: border-box; }");
        out.println("        body {");
        out.println("            font-family: 'Inter', sans-serif;");
        out.println("            min-height: 100vh;");
        out.println("            display: flex;");
        out.println("            justify-content: center;");
        out.println("            align-items: center;");
        out.println("            background: linear-gradient(45deg, #0f2027, #203a43, #2c5364);");
        out.println("            background-size: 400% 400%;");
        out.println("            animation: gradientBG 15s ease infinite;");
        out.println("            color: #ffffff;");
        out.println("        }");
        out.println("        @keyframes gradientBG { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }");
        out.println("        .welcome-card {");
        out.println("            background: rgba(255, 255, 255, 0.05);");
        out.println("            backdrop-filter: blur(15px);");
        out.println("            -webkit-backdrop-filter: blur(15px);");
        out.println("            border: 1px solid rgba(255, 255, 255, 0.1);");
        out.println("            padding: 4rem;");
        out.println("            border-radius: 24px;");
        out.println("            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);");
        out.println("            text-align: center;");
        out.println("            animation: scaleIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);");
        out.println("            max-width: 600px;");
        out.println("            width: 90%;");
        out.println("        }");
        out.println("        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }");
        out.println("        h1 { font-size: 3rem; font-weight: 600; margin-bottom: 1rem; background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }");
        out.println("        .time-box { margin-top: 2rem; padding: 1.5rem; background: rgba(0, 0, 0, 0.2); border-radius: 12px; }");
        out.println("        .time-label { font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.6); margin-bottom: 0.5rem; }");
        out.println("        .time-value { font-size: 1.2rem; font-weight: 400; color: #e0e0e0; }");
        out.println("        .btn-back { display: inline-block; margin-top: 2.5rem; padding: 12px 30px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 30px; color: white; text-decoration: none; font-weight: 400; transition: all 0.3s ease; }");
        out.println("        .btn-back:hover { background: rgba(255,255,255,0.2); transform: translateY(-2px); }");
        out.println("    </style>");
        out.println("</head>");
        out.println("<body>");
        out.println("    <div class=\"welcome-card\">");
        out.println("        <h1>Welcome, " + username + "!</h1>");
        out.println("        <p style=\"font-size: 1.1rem; color: rgba(255,255,255,0.8); line-height: 1.5;\">You have successfully logged into the system.</p>");
        out.println("        <div class=\"time-box\">");
        out.println("            <div class=\"time-label\">Current Date & Time</div>");
        out.println("            <div class=\"time-value\">" + formattedDate + "</div>");
        out.println("        </div>");
        out.println("        <a href=\"index.html\" class=\"btn-back\">&larr; Back to Login</a>");
        out.println("    </div>");
        out.println("</body>");
        out.println("</html>");
    }
}
