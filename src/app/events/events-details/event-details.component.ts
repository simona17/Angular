import {Component} from '@angular/core'
import {EventService } from '../shared/event.service'
import {ActivatedRoute} from '@angular/router'
@Component({
    selector: './event-details.component.html',
    templateUrl: './event-details.component.html',
    styles:[`
    .container {padding-left:20px;padding-right: 20px;}
    .event-image {height: 100px; }
    `]

})

export class EventDetailsComponent{
    event: any
    constructor (private eventService:EventService, private route:ActivatedRoute){
    }
    ngOnInit(){
        this.event =this.eventService.getEvent(
        +this.route.snapshot.params['id'])//give us the parameters off of the curent route that was used to access this component  
    }

}