package edu.umass.ckc.servlet.servbase;


import java.io.File;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


/**
 * <p>Title: </p>
 * <p>Description: </p>
 * <p>Copyright: Copyright (c) 2002</p>
 * <p>Company: </p>
 * @author unascribed
 * @version 1.0
 * Frank 5-24-2020 issue #130 change mailServer="mailsrv.cs.umass.edu"
 * Frank 06-18-2020 issue #135 added method getString()
 */

public class Settings {


    // These are the default selectors.  They will get overwritten if the servlet is called with
  // an initialization-param for a mode. (see TutorBrainHandler.setMode)

  public static final int duplicateRowError = 2627;
  public static final int keyConstraintViolation = 1062;
 

  public static String dbhost = "localhost";
  public static String webContentPath = "should be URI of path to mathspring under apache webroot";  // has trailing slash: root of apache content read from web.xml as context param webContentPath
  public static String webContentPath2 = "should be URI of path to mathspring under apache webroot";  // has trailing slash: root of apache content read from web.xml as context param webContentPath
  public static String tomcatDatasourceURL;
  public static final int sessionIdleTimeout = 30 * 1000; // every 24 hours

    public static boolean useAdminServletSession = true; // controls whether servlet sessions are used in the WoAdminServlet
                                                // They should be on in normal use.   For debugging the servlet I turn off
    public static int adminServletSessionTimeoutSeconds= 60 * 60; // default is 60 min.

    public static String problemContentPath;


    public static String getString (Connection conn, String column) throws SQLException {
        ResultSet rs=null;
        PreparedStatement stmt=null;
    	String result = null;        
        try {
            String q = "select " + column + " from globalsettings";
            stmt = conn.prepareStatement(q);
            rs = stmt.executeQuery();
            if (rs.next()) {
                result = rs.getString(1);
            }
        }
        finally {
            if (stmt != null)
                stmt.close();
            if (rs != null)
                rs.close();
        }
        return result;
    }
    
    
}