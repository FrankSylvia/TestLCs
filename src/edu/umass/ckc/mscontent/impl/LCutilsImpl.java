package edu.umass.ckc.mscontent.impl;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Locale;
import java.util.MissingResourceException;
import java.util.ResourceBundle;

import org.apache.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;

import edu.umass.ckc.mscontent.LCutils;
import edu.umass.ckc.mscontent.configuration.LCConfiguration;



public class LCutilsImpl implements LCutils {
	
    private static Logger logger = Logger.getLogger(LCutilsImpl.class);

	private ResourceBundle rb = null;
	private ResourceBundle rwrb = null;
	private ResourceBundle rhrb = null;
	private Locale ploc;

    @Autowired
    private LCConfiguration connection;

    @Override
    public String LCtools(String name, String lang ) {

    	
    	String result = "List function Not implemented yet";
    	
    	System.out.println("test message is " + name);
    	logger.debug("test message is " + name);
    	
    	Locale loc = new Locale("en","US");	
    	if (lang.substring(0,2).equals("es")) {
    		loc = new Locale("es","US");	
    	}        	
		ploc = loc;
/*
		try {
    		rb = ResourceBundle.getBundle("MathSpring",loc);
			rwrb = ResourceBundle.getBundle("MSResearcherWorkbench",loc);
			rhrb = ResourceBundle.getBundle("MSResearcherHelp",loc);
		}
		catch (Exception e) {
			logger.error(e.getMessage());	
		}
		
*/
		try {
			result = listUtterances();
		}
		catch (SQLException se) {
			System.out.println(se.getMessage());
		}
		return result;
    }
		
		

		
		
		
    String listUtterances() throws SQLException {
    	
    	ResultSet rs=null;
        PreparedStatement stmt=null;
        String utterances = "";
        boolean first = true;
    	try {
        	Connection conn = connection.getConnection();
        	String q = "select name from lc_utterances order by id";

            stmt = conn.prepareStatement(q);
            rs = stmt.executeQuery();
            while (rs.next()) {
            	if (!first) {
            		utterances += ",";
            	}
            	else {
            		first = false;
            	}
            	String name = rs.getString("name");
            	utterances += name;
    		}
            return utterances;    	
        }
    	catch (Exception e) {
    		System.out.println(e.getMessage());
    	}
        finally {
            if (stmt != null)
                stmt.close();
            if (rs != null)
                rs.close();
        }
        return "";
    }    
		
}
    

    
    
