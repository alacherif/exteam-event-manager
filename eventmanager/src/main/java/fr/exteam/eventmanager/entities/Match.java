/**
 * 
 */
package fr.exteam.eventmanager.entities;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * @author Ala
 *
 */
@Entity
public class Match {
	
	@Id
	@GeneratedValue
	private long id;
	
	private LocalDateTime time;
	
	private int nbrePlaces;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Team team1;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Team team2;
	
	public Match(){

	}
	
	public Match(Match m, Team t1, Team t2){
		this.id = m.getId();
		this.time = m.getTime();
		this.team1 = t1;
		this.team2 = t2;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public LocalDateTime getTime() {
		return time;
	}

	public void setTime(LocalDateTime time) {
		this.time = time;
	}

	public int getNbrePlaces() {
		return nbrePlaces;
	}

	public void setNbrePlaces(int nbrePlaces) {
		this.nbrePlaces = nbrePlaces;
	}

	public Team getTeam1() {
		return team1;
	}

	public void setTeam1(Team team1) {
		this.team1 = team1;
	}

	public Team getTeam2() {
		return team2;
	}

	public void setTeam2(Team team2) {
		this.team2 = team2;
	}

}
