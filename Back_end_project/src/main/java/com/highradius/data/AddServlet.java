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
 * Servlet implementation class AddServlet
 */
@WebServlet("/AddServlet")
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddServlet() {
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
			String query = "INSERT IGNORE INTO winter_internship(sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,posting_id,area_business,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,isOpen,aging_bucket,is_deleted) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			PreparedStatement pst=conn.prepareStatement(query);
			pst.setInt(1,invoice.getSl_no());
			pst.setString(2,invoice.getBusiness_code());
			pst.setInt(3,invoice.getCust_number());
		    pst.setString(4, invoice.getClear_date());
			pst.setInt(5, invoice.getBuisness_year());
			pst.setLong(6, invoice.getDoc_id());
			pst.setString(7, invoice.getPosting_date());
			pst.setString(8, invoice.getDocument_create_date());
			pst.setString(9, invoice.getDocument_create_date1());
			pst.setString(10, invoice.getDue_in_date());
			pst.setString(11, invoice.getInvoice_currency());
			pst.setString(12, invoice.getDocument_type());
			pst.setLong(13, invoice.getPosting_id());
			pst.setInt(14,invoice.getArea_business());
			pst.setFloat(15, invoice.getTotal_open_amount());
			pst.setString(16, invoice.getBaseline_create_date());
			pst.setString(17, invoice.getCust_payment_terms());
			pst.setLong(18, invoice.getInvoice_id());
			pst.setInt(19,invoice.getIsOpen());
			pst.setString(20, invoice.getAging_bucket());
			pst.setInt(21,invoice.getIs_deleted());
			
			
			
			
			
			
			
			
			

			
			
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