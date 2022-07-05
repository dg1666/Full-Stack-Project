package com.internship;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/")
public class CrudServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private crud Crud;
	
	public void init() {
		Crud = new crud();
	}
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CrudServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getServletPath();

		try {
			switch (action) {
			case "/insert":
				insertUser(request, response);
				break;
				
			case "/search":
				searchUser(request,response);
				break;
			case "/advsearch":
				advSearch(request,response);
			default:
				break;
			}
		} catch (SQLException ex) {
			throw new ServletException(ex);
		}
	}
	
	private void insertUser(HttpServletRequest request, HttpServletResponse response) 
			throws SQLException, IOException {
		String business_code = request.getParameter("business_code");
		String cust_number = request.getParameter("cust_number");
		String clear_date = request.getParameter("clear_date");
		int buisness_year = Integer.parseInt(request.getParameter("buisness_year"));
		String doc_id = request.getParameter("doc_id");
		String posting_date = request.getParameter("posting_date");
		String document_create_date = request.getParameter("document_create_date");
		String document_create_date1 = request.getParameter("document_create_date1");
		String due_in_date = request.getParameter("due_in_date");
		String invoice_currency = request.getParameter("invoice_currency");
		String document_type = request.getParameter("document_type");
		int posting = Integer.parseInt(request.getParameter("posting_id"));
		String area_business = request.getParameter("area_business");
		Double total_open_amount = Double.parseDouble(request.getParameter("total_open_amount"));
		String baseline_create_date = request.getParameter("baseline_create_date");
		String cust_payment_terms = request.getParameter("cust_payment_terms");
		String invoice_id = request.getParameter("invoice_id");
		int isopen = Integer.parseInt(request.getParameter("isOpen"));
		String aging_bucket = request.getParameter("aging_bucket");
		Boolean is_deleted = Boolean.parseBoolean(request.getParameter("is_deleted"));
		H2H newUser = new H2H(0,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,posting,area_business,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,isopen,aging_bucket,is_deleted);
		boolean res = Crud.insertUser(newUser);
		if (res)
		{
		response.getWriter().append("Inserted");
		}
		else
		{
		response.getWriter().append("Error");
		}
	}
	protected void searchUser(HttpServletRequest request, HttpServletResponse response)
			throws SQLException, IOException {
			int id = Integer.parseInt(request.getParameter("cust_number"));
			ArrayList res = Crud.selectUser(id);
			Gson gson = new Gson();
			String jsonResponse = gson.toJson(res);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.setHeader("Access-Control-Allow-Credentials", "true");
			response.setHeader("Access-Control-Max-Age", "1800");
			response.setHeader("Access-Control-Allow-Headers", "content-type");
			response.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
			response.getWriter().append(jsonResponse);
			}
	
	private void advSearch(HttpServletRequest request, HttpServletResponse response) 
			throws SQLException, IOException {
		int bc = Integer.parseInt(request.getParameter("business_year"));
		String iid = request.getParameter("invoice_id");
		String di = request.getParameter("doc_id");
		String cust = request.getParameter("cust_number");
		ArrayList res = Crud.searchUser(bc,di,iid,cust);
		Gson gson = new Gson();
		String jsonResponse = gson.toJson(res);
		response.setHeader("Access-Control-Allow-Origin","*");
		response.getWriter().append(jsonResponse);
	}

	
	
	


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}