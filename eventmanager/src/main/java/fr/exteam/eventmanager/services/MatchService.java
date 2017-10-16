package fr.exteam.eventmanager.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.exteam.eventmanager.entities.Match;

public interface MatchService {

	@Transactional
	public void create(Match m);
	
	@Transactional
	public void update(Match m);
	
	public Match find(long id);
	
	public List<Match> findAll();
	
}
