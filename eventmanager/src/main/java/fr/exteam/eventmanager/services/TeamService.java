package fr.exteam.eventmanager.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.exteam.eventmanager.entities.Team;

public interface TeamService {

	@Transactional
	public void create(Team t);
	
	@Transactional
	public void update(Team t);
	
	public Team find(long id);
}
