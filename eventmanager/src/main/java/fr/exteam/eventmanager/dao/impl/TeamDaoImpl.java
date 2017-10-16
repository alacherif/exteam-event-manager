/**
 * 
 */
package fr.exteam.eventmanager.dao.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fr.exteam.eventmanager.dao.TeamDao;
import fr.exteam.eventmanager.entities.Team;

/**
 * @author Ala
 *
 */
@Repository
public class TeamDaoImpl implements TeamDao {
	
	@PersistenceContext
	private EntityManager em;

	@Transactional
	public void create(Team t){
		if(t != null){
			em.persist(t);
		}
	}
	
	@Transactional
	public void update(Team t){
		if(t!=null && t.getId()!= 0){
			em.merge(t);
		}
	}
	
	public Team find(long id){
		Team t = em.find(Team.class, id);
		return t;
	}
}
