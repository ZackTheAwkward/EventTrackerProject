package com.skilldistillery.repository;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skilldistillery.entities.Beer;
import com.skilldistillery.repositories.BeerRepository;

@SpringBootTest
class BeerRepositoryTest {
	
	@Autowired
	private BeerRepository beerRepo;

	@Test
	void test_for_search_by_beer_type() {
		List<Beer> b = beerRepo.findByTypeLike("IPA - New England - Hazy");
		assertNotNull(b);
		assertTrue(b.size() > 0);
	}
	
	@Test
	void test_for_search_by_beer_name_and_company() {
		List<Beer> b = beerRepo.findByNameOrCompanyLike("Voodoo Ranger Juicy Haze IPA", "New Belgium");
		assertNotNull(b);
		assertTrue(b.size() > 0);
		
	}
	
	@Test
	void test_for_search_by_beer_abv_range() {
		List<Beer> b = beerRepo.findByAbvBetween(6.0, 7.5);
		assertNotNull(b);
		assertTrue(b.size() > 0);
	}

}
