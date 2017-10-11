package fr.exteam.eventmanager.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import fr.exteam.eventmanager.dao.MatchDao;
import fr.exteam.eventmanager.entities.Match;

@Repository
public class MatchDaoImpl implements MatchDao {
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public void create(Match m) {
		if(m!=null){
			em.persist(m);
		}
	}

	@Override
	public void update(Match m) {
		if(m!=null && m.getId() != 0){
			em.merge(m);
		}
	}

	@Override
	public Match find(long id) {
		return em.find(Match.class, id);
	}

	@Override
	public List<Match> findAll() {
		String sql = "select new Match(m, t1, t2) from "+ Match.class.getCanonicalName()+" m inner join m.team1 t1 inner join m.team2 t2";
		Query query = em.createQuery(sql);
		List<Match> matchs = query.getResultList();
		return matchs;
	}

	@Override
	public void delete(long id) {
		if(id!=0){
			Match m = find(id);
			em.remove(em.merge(m));
		}
	}
	
	
}
