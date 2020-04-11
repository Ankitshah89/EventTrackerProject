package com.skilldistillery.covid.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.covid.entities.Cases;
import com.skilldistillery.covid.repositories.CasesRepository;

@Service
public class CasesServiceImpl implements CasesService {

	@Autowired
	private CasesRepository casesRepo;

	@Override
	public List<Cases> findAll() {
		return casesRepo.findAll();
	}

	@Override
	public Cases findById(int id) {
		Optional<Cases> opt = casesRepo.findById(id);
		if (opt.isPresent()) {
			return opt.get();
		} else {
			return null;
		}
	}

	@Override
	public Cases create(Cases cases) {
		return casesRepo.saveAndFlush(cases);
	}

	@Override
	public Cases replace(int id, Cases cases) {
		Cases managedCases = null;
		Optional <Cases> opt = casesRepo.findById(id);
		if(opt.isPresent()) {
			managedCases = opt.get();
			managedCases.setDeath(cases.getDeath());
			managedCases.setHospitalized(cases.getHospitalized());
			managedCases.setInIcu(cases.getInIcu());
			managedCases.setNegative(cases.getNegative());
			managedCases.setOnVentilator(cases.getOnVentilator());
			managedCases.setPositive(cases.getPositive());
			managedCases.setRecovered(cases.getRecovered());
			managedCases.setState(cases.getState());
			managedCases.setTotalTestResult(cases.getTotalTestResult());
			return casesRepo.saveAndFlush(managedCases);
		}
		return managedCases;
	}

	@Override
	public Boolean deleteById(int id) {
		Optional <Cases> opt = casesRepo.findById(id);
		if(opt.isPresent()) {
			casesRepo.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public List<Cases> findByState(String keyword) {
		return casesRepo.findByState(keyword);
		
	}

}
