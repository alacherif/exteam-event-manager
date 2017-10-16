package fr.exteam.eventmanager.dao;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import fr.exteam.eventmanager.entities.Match;

public interface MatchDao {
	
	@Transactional
	public void create(Match m);
	
	@Transactional
	public void update(Match m);
	
	public Match find(long id);
	
	public List<Match> findAll();
	
	@Transactional
	public void delete(long id);
}
