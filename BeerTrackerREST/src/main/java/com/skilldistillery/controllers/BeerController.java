package com.skilldistillery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Beer;
import com.skilldistillery.repositories.BeerRepository;
import com.skilldistillery.services.BeerService;

@RestController
@RequestMapping("api")
public class BeerController {

	@Autowired
	private BeerService beerSer;
	
	@GetMapping("beers")
	public List<Beer> listBeers(){
		return beerSer.index();
	}
	@GetMapping("beers/{id}")
	private Beer findById(@PathVariable int id, HttpServletResponse res) {
		return beerSer.findById(id);
		
	}
	@PostMapping("beers")
	@ResponseBody
	private Beer addBeer(@RequestBody Beer beer) {
		return beerSer.addBeer(beer);
	}
	@PutMapping("beers/{id}")
	public Beer updateBeer(@RequestBody Beer beer, @PathVariable int id, HttpServletResponse res) {
		if(beer == null) {
			res.setStatus(404);
		}
		return beerSer.updateBeer(beer, id);
	}
	@DeleteMapping("beers/{id}")
	public void deleteBeer(@PathVariable int id, HttpServletResponse res) {
		if(beerSer.removeBeer(id)) {
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
	}
	@GetMapping("beers/search/type/{keyword}")
	public List<Beer> searchBeerByType(@PathVariable String keyword){
		return beerSer.listAllBeerByType(keyword);
	}
	@GetMapping("beers/search/companyorname/{keyword}")
	public List<Beer> searchBeerByCompanyOrName(@PathVariable String keyword){
		return beerSer.listBeerByKeyword(keyword);
	}
	@GetMapping("beers/search/abv/{low}/{high}")
	public List<Beer> seachBeerByAbvRange(@PathVariable double low, @PathVariable double high){
		return beerSer.searchByAbvRange(low, high);
	}
}
