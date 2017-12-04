<%--
вопросы к борису:
как определить место вставки таблицы. я определил дивом, норм ли?
  Created by IntelliJ IDEA.
  User: Gosha
  Date: 28.11.2017
  Time: 15:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
      <title>Equantion Solver</title>
      <link rel="stylesheet" type="text/css" href="style.css">
      <script type="text/javascript" src="jquery.js"></script>
      <script type="text/javascript" src="jscript.js"></script>
  </head>
  <body>

  <form>
    <fieldset>
        <legend>Instruction</legend>
        <div>
            <p>Instruction text a lot of words how to use this sheet dont want to type em</p>
        </div>
    </fieldset>
  </form>

  <form>
    <fieldset>
      <legend>Solver</legend>
      <p>Enter coefficients:</p>
      <p><input type="text" name="A" id="A"> * x <sup>2</sup> + <input type="text" name="B" id="B" > * x + <input type="text" name="C" id="C"> = 0</p>
      <input value="Solve" onclick="solve()" type="button">
    </fieldset>
  </form>

  <form>
      <fieldset>
          <legend>Result Table</legend>
          <div class="myTablePlace"></div>
      </fieldset>
  </form>
  <div id="textfield">Debug</div>
  <table>
      <tr>
          <th>тестовая</th>
          <th>таблица</th>
          <th>чтобы</th>
      </tr>
      <tbody>
      <tr>
          <td>показать</td>
          <td>что</td>
          <td>две</td>
      </tr>
      <tr>
          <td>таблицы</td>
          <td>имеют</td>
          <td>различный</td>
      </tr>
      <tr>
          <td>стиль</td>
          <td>оформления</td>
          <td>css</td>
      </tr>
      </tbody>
  </table>
  </body>
</html>
