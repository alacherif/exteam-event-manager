/**
 * 
 */
package fr.exteam.eventmanager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.exteam.eventmanager.entities.Team;
import fr.exteam.eventmanager.services.TeamService;

/**
 * @author Ala
 *
 */
@RestController
@RequestMapping("/team")
@CrossOrigin(origins = {"http://localhost:8080"})
public class TeamController {
	
	@Autowired
	public TeamService teamService;

	@RequestMapping("/{id}")
	public Team find(@PathVariable("id") long id){
		Team t = teamService.find(id);
		return t;
	}
}
