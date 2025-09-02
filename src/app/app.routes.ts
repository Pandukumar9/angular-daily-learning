import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'day1',
    loadComponent: () =>
      import('./features/day1-reactive-form/day1-reactive-form')
        .then(m => m.Day1ReactiveForm),
  },
  // You can uncomment and add more later
  {
    path: 'day2',
    loadComponent: () =>
      import('./features/day2-placeholder/day2-placeholder')
        .then(m => m.Day2Placeholder),
  },
    {
    path: 'day3',
    loadComponent: () =>
      import('./features/day3-reactiveform-vali/day3-reactiveform-vali')
        .then(m => m.Day3ReactiveformVali),
  },
      {
    path: 'day4',
    loadComponent: () =>
      import('./features/day4-dynamicform-con/day4-dynamicform-con')
        .then(m => m.Day4DynamicformCon),
  },
  { path: '', redirectTo: 'day1', pathMatch: 'full' },
];
