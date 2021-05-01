import { animate, style, transition, trigger } from "@angular/animations";

export const HERO_ANIMATIONS = [
  trigger('fadeInOut', [
    // state('in', style({ transform: 'translateX(0)' })),
    transition(':enter', [
      style({ opacity: '0' }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({opacity: '1'}))
    ])
  ])
]
