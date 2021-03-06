package com.skilldistillery.covid.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.covid.entities.Cases;

class CasesTest {
	
	private static EntityManagerFactory emf;
	private static EntityManager em;
	private Cases cases;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("CovidTrackerPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
		
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		cases = em.find(Cases.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		cases = null;
	}

	@Test
	void test() {
		assertNotNull(cases);
		assertEquals("AK", cases.getState());
	}

}
