package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.Beer;

public interface BeerService {

		List<Beer> index();
		Beer findById(int id);
		Beer addBeer(Beer beer);
		Beer updateBeer(Beer beer, int id);
		boolean removeBeer(int id);
		List<Beer> listAllBeerByType(String keyword);
		List<Beer> listBeerByKeyword(String keyword);
		List<Beer> searchByAbvRange(double low, double high);
}
