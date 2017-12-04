import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.DoubleSummaryStatistics;

/**
 * Created by Gosha on 28.11.2017.
 */
public class Solver extends HttpServlet{
    public static String[] solve(double A, double B, double C){
        double D = B*B-4*A*C;
        String F;
        String E;
        if(A!=0){
            if ( D >= 0 ){
                F = Double.toString((-B+Math.sqrt(D))/2/A);
                E = Double.toString((-B-Math.sqrt(D))/2/A);
            }else{
                F = E = "No root";
            }
        }else{
            if(B!=0){
                F = E = Double.toString(-C/B);
            }else {
                F = E = "No root";
            }
        }

        return new String[]{F,E};
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        double A = Double.parseDouble(req.getParameter("A"));
        double B = Double.parseDouble(req.getParameter("B"));
        double C = Double.parseDouble(req.getParameter("C"));
        String[] answer = solve(A,B,C);
        System.out.println(""+A+" "+B+" "+C);
        System.out.println(answer[0]+" "+answer[1]);

        StringBuilder builder = new StringBuilder();

        PrintWriter pw = resp.getWriter();
        resp.setContentType("text/xml");
        pw.print("\n<root>");
        pw.print("\n   <FirstRoot>" + answer[0] + "</FirstRoot>");
        pw.print("\n   <SecondRoot>" + answer[1] + "</SecondRoot>");
        pw.print("\n</root>");


        /*PrintWriter pw = resp.getWriter();
        //pw.write("<td>"+answer[0]+"</td><td>"+answer[1]+"</td>");
        pw.write("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE roles SYSTEM \"roles.dtd\">\n<FirstRoot>\n"+answer[0]+"\n</FirstRoot\n<SecondRoot>\n"+answer[1]+"\n</SecondRoot>\n");
*/



    }
}
