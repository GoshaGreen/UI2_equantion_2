<%--
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
            <p>Instruction text</p>
        </div>
    </fieldset>
  </form>

  <form action="Solver" method="Post">
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
          <div id="textfield">Debug</div>
          <div class="myTablePlace"></div>
          <table id="tablee">
              <tbody id="table">
              <tr id="tradel">
                  <th>Equantion</th>
                  <th>First root</th>
                  <th>Second root</th>
              </tr>
              </tbody>
          </table>
      </fieldset>
  </form>



  </body>
</html>
