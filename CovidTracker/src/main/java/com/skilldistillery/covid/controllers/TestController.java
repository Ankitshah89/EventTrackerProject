package com.skilldistillery.covid.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.covid.entities.Cases;
import com.skilldistillery.covid.services.CasesService;

@RestController
@RequestMapping("api")
public class TestController {
	
	@Autowired
	private CasesService casesSvc;

	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
	
	@GetMapping("cases")
	public List <Cases> listCases(){
		return casesSvc.findAll();
	}
	
}
