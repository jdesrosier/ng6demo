import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],

    // Add this:
    animations: [
      trigger('listStagger', [
        transition('* <=> *', [
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateY(-35px)' }),
              stagger(
                '100ms',
                animate(
                  '550ms ease-out',
                  style({ opacity: 1, transform: 'translateY(0px)' })
                )
              )
            ],
            { optional: true }
          ),
          query(':leave', animate('150ms', style({ opacity: 0 })), {
            optional: true
          })
        ])
      ])
    ]
  })

export class LinksComponent implements OnInit {

  links$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getLinks().subscribe(
      data => this.links$ = data 
    );

}
