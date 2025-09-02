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
        {
    path: 'day5',
    loadComponent: () =>
      import('./features/day5-formarray-ex/day5-formarray-ex')
        .then(m => m.Day5FormarrayEx),
  },
          {
    path: 'day6',
    loadComponent: () =>
      import('./features/day6-bt-style-form/day6-bt-style-form')
        .then(m => m.Day6BtStyleForm),
  },
            {
    path: 'day7',
    loadComponent: () =>
      import('./features/day7-material-form/day7-material-form')
        .then(m => m.Day7MaterialForm),
  },
              {
    path: 'day8',
    loadComponent: () =>
      import('./features/day8-formapi-inte/day8-formapi-inte')
        .then(m => m.Day8FormapiInte),
  },
                {
    path: 'day9',
    loadComponent: () =>
      import('./features/day9-employee-crud/day9-employee-crud')
        .then(m => m.Day9EmployeeCrud),
  },
  { path: '', redirectTo: 'day1', pathMatch: 'full' },
];
