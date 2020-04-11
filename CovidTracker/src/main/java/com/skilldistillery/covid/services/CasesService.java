package com.skilldistillery.covid.services;

import java.util.List;

import com.skilldistillery.covid.entities.Cases;

public interface CasesService {
	
	List<Cases> findAll();
	Cases findById(int id);
	Cases create(Cases cases);
	Cases replace(int id, Cases cases);
	Boolean deleteById(int id);
	
	List<Cases> findByState(String keyword);
	

}
