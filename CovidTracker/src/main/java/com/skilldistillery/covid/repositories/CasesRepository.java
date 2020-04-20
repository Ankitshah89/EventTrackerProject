package com.skilldistillery.covid.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.covid.entities.Cases;

public interface CasesRepository extends JpaRepository<Cases, Integer> {
	
	List <Cases> findByState(String name);
	

	

}
