package edu.umass.ckc.mscontent.controller;


import edu.umass.ckc.mscontent.configuration.LCConfiguration;
import edu.umass.ckc.mscontent.impl.LCutilsImpl;
//import edu.umass.ckc.wo.ttmain.ttconfiguration.errorCodes.TTCustomException;
import edu.umass.ckc.mscontent.LCutils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Locale;
import java.util.ResourceBundle;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created by Frank on 08/05/2021.
 * 

 */
@Controller
public class LCController {

	
//    @Autowired
//    private LCConfiguration connection;

//    @Autowired
    private LCutils LC = new LCutilsImpl();

//    @Autowired
//    private TTCreateClassAssistService ccService;

//    @Autowired
//    private TeacherLogger tLogger;


    @RequestMapping(value = "/tt/contentServices", method = RequestMethod.POST)
    public @ResponseBody String tools(ModelMap map, @RequestParam("type") String type, @RequestParam("name") String name, @RequestParam("lang") String lang, HttpServletRequest request) throws Exception {

    	if (type.equals("LC")) {
   		
        	LC.LCtools(name, lang);
        	return "success";
    	}
    	else {
    		return "";
    	}

    }

//    @RequestMapping(value = "/tt/getCohorts", method = RequestMethod.POST)
//    public @ResponseBody String getCohorts(ModelMap map, @RequestParam("reportType") String reportType,  @RequestParam("lang") String lang, @RequestParam("filter") String filter, HttpServletRequest request) throws TTCustomException {

//    	return miscService.getCohorts(reportType, lang, filter);
//    }

    
    
}
