/**
 * 
 */
package fr.exteam.eventmanager.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.exteam.eventmanager.dao.TeamDao;
import fr.exteam.eventmanager.entities.Team;
import fr.exteam.eventmanager.services.TeamService;

/**
 * @author Ala
 *
 */
@Service
public class TeamServiceImpl implements TeamService{
	
	@Autowired
	public TeamDao teamDao;

	@Override
	public void create(Team t) {
		teamDao.create(t);
	}

	@Override
	public void update(Team t) {
		teamDao.update(t);
	}

	@Override
	public Team find(long id) {
		Team t = teamDao.find(id);
		return t;
	}

}
