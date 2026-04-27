# Servlet Login Application

A simple web application using Java Servlets that allows users to login with username and password, and displays a welcome message with the current date and time.

## Project Structure

- `src/com/example/servlet/LoginServlet.java` - The servlet that handles login
- `webapp/index.html` - The login form
- `webapp/welcome.jsp` - The welcome page
- `webapp/WEB-INF/web.xml` - Servlet configuration
- `pom.xml` - Maven build configuration

## How to Run

1. **Prerequisites:**
   - Java 8 or higher
   - Apache Tomcat 9 or higher
   - Maven (optional, for building)

2. **Build the project:**
   - The WAR file `servlet-login-app.war` has been pre-built for you
   - If you need to rebuild: Run the build script or manually compile as described below

   **Manual Build Steps (if needed):**
   - Download servlet-api.jar and jsp-api.jar
   - Compile: `javac -cp "servlet-api.jar:jsp-api.jar" -d classes src/com/example/servlet/*.java`
   - Create WAR: `jar -cvf servlet-login-app.war index.html welcome.jsp WEB-INF/`

3. **Deploy to Tomcat:**
   - Copy the `servlet-login-app.war` file to Tomcat's `webapps` directory
   - Tomcat will automatically deploy it
   - Access the application at `http://localhost:8080/servlet-login-app/`

4. **Alternative - Using IDE:**
   - Import the project into Eclipse/IntelliJ IDEA with Tomcat support
   - Run on server

## Usage

1. Open the application in a browser
2. Enter any username and password (basic validation - just checks if not empty)
3. Click Login
4. See the welcome message with current date and time

## Notes

- This is a basic example without proper authentication or security
- In a real application, you would validate credentials against a database
- The date/time is displayed using Java's `Date.toString()` method