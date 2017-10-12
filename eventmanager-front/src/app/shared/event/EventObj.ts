import { ITeam } from "../team";


export class EventObj{
    public id : string;
    public date: string;
    public nbrePlaces : number;
    public nbreResa : number;
    public guest :ITeam;
    public host :ITeam;


}