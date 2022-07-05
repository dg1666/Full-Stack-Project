package com.highradius.data;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.coyote.Response;

import com.google.gson.Gson;

/**
 * Servlet implementation class EditServlet
 */
@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try 
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose", "root", "root");
			Statement st=conn.createStatement();
			Pojo2 invoice=new Gson().fromJson(request.getReader(),Pojo2.class);
			String query = ("UPDATE winter_internship set invoice_currency=? , cust_payment_terms=? WHERE sl_no=?");
			PreparedStatement pst=conn.prepareStatement(query);
			
			pst.setString(1, invoice.getInvoice_currency());
			pst.setString(2, invoice.getCust_payment_terms());
			pst.setInt(3,invoice.getSl_no());
		
			int result=pst.executeUpdate();
			response.setContentType("application/json");
			if(result>0)
			{
				response.setStatus(201);
				Response SuccessResponse=new Response();
				SuccessResponse.setStatus(202);
				response.getWriter().write(new Gson().toJson(SuccessResponse));
			}
		}
		
		catch (Exception e) {
            e.printStackTrace();
            System.out.println("DB Connection Error");
		
	}
		doGet(request, response);

}
}