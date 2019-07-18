import {Component} from '@angular/core'

@Component({
    selector:'nav-bar',
    templateUrl: './navbar.component.html',
    styles:[`
    .nav.navbar-nav {font size: 8px;}
    #searchForm {margin-right: 80px;}
    @media (max-width: 1200px){#searchForm{display: }}
    li > a.active { color: #F97924; }
    ` ]
})
export class NavBarComponent {

}