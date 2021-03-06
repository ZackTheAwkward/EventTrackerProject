package com.skilldistillery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Beer;
import com.skilldistillery.repositories.BeerRepository;

@Service
public class BeerServiceImpl implements BeerService {

	@Autowired
	private BeerRepository beerRepo;
	
	@Override
	public List<Beer> index() {
		return beerRepo.findAll();
	}

	@Override
	public Beer findById(int id) {
		return beerRepo.findById(id).get();
	}

	@Override
	public Beer addBeer(Beer beer) {
		beer = beerRepo.saveAndFlush(beer);
		return beer;
	}

	@Override
	public Beer updateBeer(Beer beer, int id) {
		Beer managed = beerRepo.findById(id).get();
		if(managed != null) {
			managed.setName(beer.getName());
			managed.setCompany(beer.getCompany());
			managed.setAbv(beer.getAbv());
			managed.setType(beer.getType());
			managed.setDescription(beer.getDescription());
			managed.setImageUrl(beer.getImageUrl());
		}
		beerRepo.saveAndFlush(managed);
		return managed;
	}

	@Override
	public boolean removeBeer(int id) {
		boolean removed = false;
		Beer beer = beerRepo.findById(id).get();
		if(beer != null) {
			beerRepo.delete(beer);
			removed = true;
		}
		return removed;
	}

	@Override
	public List<Beer> listAllBeerByType(String keyword) {
		keyword = "%" + keyword + "%";
		return beerRepo.findByTypeLike(keyword);
	}

	@Override
	public List<Beer> listBeerByKeyword(String keyword) {
		keyword = "%" + keyword + "%";
		return beerRepo.findByCompanyLikeOrNameLike(keyword, keyword);
	}

	@Override
	public List<Beer> searchByAbvRange(double low, double high) {
		return beerRepo.findByAbvBetween(low, high);
	}
	

}
