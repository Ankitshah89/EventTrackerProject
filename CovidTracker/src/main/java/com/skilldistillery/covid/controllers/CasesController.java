package com.skilldistillery.covid.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.covid.entities.Cases;
import com.skilldistillery.covid.services.CasesService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4202"})
public class CasesController {

	@Autowired
	private CasesService casesSvc;

	@GetMapping("ping")
	public String ping() {
		return "pong";
	}

	@GetMapping("cases")
	public List<Cases> listCases() {
		return casesSvc.findAll();
	}

	@GetMapping("cases/{id}")
	public Cases getCase(@PathVariable Integer id, HttpServletResponse response) {
		Cases cases = casesSvc.findById(id);
		if (cases == null) {
			response.setStatus(404);
		} else {
			response.setStatus(200);
		}
		return cases;
	}

	@GetMapping("cases/search/{keyword}")
	public List<Cases> getCasesByKeyword(@PathVariable String keyword, HttpServletResponse response) { 
			 return casesSvc.findByState(keyword); 
		
	}

	@PostMapping("cases")
	public Cases postCases(@RequestBody Cases cases, HttpServletResponse response) {
		try {
			cases = casesSvc.create(cases);
			if (cases == null) {
				response.setStatus(400);
				return null;
			} else {
				response.setStatus(201);
				return cases;
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			return null;
		}

	}

	@PutMapping("cases/{id}")
	public Cases putCases(@PathVariable Integer id, @RequestBody Cases cases, HttpServletResponse response,
			HttpServletRequest request) {

		try {
			cases = casesSvc.replace(id, cases);
			StringBuffer reqUrl = request.getRequestURL();
			reqUrl.append("/").append(cases.getId());
			response.setHeader("Location", reqUrl.toString());
			return cases;

		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			return null;
		}

	}

	@DeleteMapping("cases/{id}")
	public void delete(@PathVariable Integer id, HttpServletResponse response, HttpServletRequest request) {
		boolean isDeleted = casesSvc.deleteById(id);
		if (isDeleted) {
			StringBuffer reqUrl = request.getRequestURL();
			reqUrl.append("/").append(id);
			response.setStatus(200);
			response.setHeader("Location", reqUrl.toString());

		} else {
			response.setStatus(404);
		}
	}

}
