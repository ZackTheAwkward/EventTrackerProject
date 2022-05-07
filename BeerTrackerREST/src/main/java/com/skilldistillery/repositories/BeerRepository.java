package com.skilldistillery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.skilldistillery.entities.Beer;

public interface BeerRepository extends JpaRepository<Beer, Integer> {
	
	List<Beer> findByTypeLike(@Param("k") String keyword);
	
	List<Beer> findByCompanyLikeOrNameLike(@Param("k") String keyword1, @Param("k") String keyword2);
	
	List<Beer> findByAbvBetween(double low, double high);
	

}
