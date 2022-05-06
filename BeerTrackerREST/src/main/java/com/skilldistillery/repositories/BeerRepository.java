package com.skilldistillery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Beer;

public interface BeerRepository extends JpaRepository<Beer, Integer> {

}
