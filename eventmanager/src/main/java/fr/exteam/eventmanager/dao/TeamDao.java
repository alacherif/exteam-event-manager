/**
 * 
 */
package fr.exteam.eventmanager.dao;

import org.springframework.transaction.annotation.Transactional;

import fr.exteam.eventmanager.entities.Team;

/**
 * @author Ala
 *
 */
public interface TeamDao {

	@Transactional
	public void create(Team t);
	
	@Transactional
	public void update(Team t);
	
	public Team find(long id);
}
