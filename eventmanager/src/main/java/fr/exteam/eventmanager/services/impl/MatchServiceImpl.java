package fr.exteam.eventmanager.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.exteam.eventmanager.dao.MatchDao;
import fr.exteam.eventmanager.entities.Match;
import fr.exteam.eventmanager.services.MatchService;

@Service
public class MatchServiceImpl implements MatchService{

	@Autowired
	MatchDao matchDao;
	
	@Override
	public void create(Match m){
		matchDao.create(m);
	}
	
	@Override
	public void update(Match m){
		matchDao.update(m);
	}
	
	@Override
	public Match find(long id){
		return matchDao.find(id);
	}

	@Override
	public List<Match> findAll() {
		List<Match> matchs = matchDao.findAll();
		return matchs;
	}
}
