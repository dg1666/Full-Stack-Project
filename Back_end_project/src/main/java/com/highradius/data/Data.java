package com.highradius.data;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



import com.google.gson.Gson;



/**
 * Servlet implementation class Data
 */
@WebServlet("/Data")
public class Data extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Data() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		 try {
             Class.forName("com.mysql.jdbc.Driver");
              Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose", "root", "root");
             // here sonoo is database name, root is username and password
             Statement st = conn.createStatement();
             //QUERY 
             
             String query = "SELECT * FROM winter_internship";
             ResultSet result = st.executeQuery(query);
             ArrayList<Pojo> data = new ArrayList<Pojo>();
             while(result.next())
             {
             
             
             
             
             
          
             Pojo pojo = new Pojo();
             pojo.setSl_no(result.getInt("sl_no"));
             pojo.setBusiness_code(result.getString("business_code"));
             pojo.setCust_number(result.getInt("cust_number"));
             pojo.setClear_date(result.getString("clear_date"));
             pojo.setBuisness_year(result.getInt("buisness_year"));
             pojo.setDoc_id(result.getLong("doc_id"));
             pojo.setPosting_date(result.getString("posting_date"));
             pojo.setDocument_create_date(result.getString("document_create_date"));
             pojo.setDocument_create_date1(result.getString("document_create_date1"));
             pojo.setDue_in_date(result.getString("due_in_date"));
             pojo.setInvoice_currency(result.getString("invoice_currency"));
             pojo.setDocument_type(result.getString("document_type"));
             pojo.setPosting_id(result.getInt("posting_id"));
             pojo.setArea_business(result.getInt("area_business"));
             pojo.setTotal_open_amount(result.getFloat("total_open_amount"));
             pojo.setBaseline_create_date(result.getString("baseline_create_date"));
		     pojo.setCust_payment_terms(result.getString("cust_payment_terms"));
             pojo.setInvoice_id(result.getLong("invoice_id"));
             pojo.setIsOpen(result.getInt("isOpen"));
             pojo.setAging_bucket(result.getString("aging_bucket"));
             pojo.setIs_deleted(result.getInt("is_deleted"));
             
             
            
				
				data.add(pojo);
             }
           
             
             String resJson = new Gson().toJson(data);

  			// setting up the content-type header
  			response.setContentType("application/json");

  			// setting up status code 200 - OK
  			response.setStatus(200);

  			// sending response
  			response.getWriter().write(resJson);

  			// connection close
  			conn.close();

  			// statement close
  			st.close();
 			
 			
     } catch (Exception e) {
             e.printStackTrace();
             System.out.println("DB Connection Error");
            
     }
		 
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}