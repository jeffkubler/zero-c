import { animate, style, transition, trigger } from "@angular/animations";

export const LOGIN_ANIMATIONS = [
  trigger('flyInOut', [
    // state('in', style({ transform: 'translateX(0)' })),
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      style({ transform: 'translateY(100%)' }),
      animate('0.2s ease-out')
    ])
  ])
]
