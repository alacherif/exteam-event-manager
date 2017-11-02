/**
 * 
 */
package fr.exteam.eventmanager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.exteam.eventmanager.entities.Match;
import fr.exteam.eventmanager.services.MatchService;

/**
 * @author Ala
 *
 */
@RestController
@CrossOrigin(origins = {"http://localhost:8080"})
public class MatchController {
	
	@Autowired
	public MatchService matchService;

	@RequestMapping("/match/{id}")
	public Match find(@PathVariable("id") long id){
		Match m = matchService.find(id);
		return m;
	}
	
	@RequestMapping("/matchs")
	public List<Match> findAll(){
		List<Match> matchs = matchService.findAll();
		return matchs;
	}
}
