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
                  {
    path: 'day10',
    loadComponent: () =>
      import('./features/day10-material-table/day10-material-table')
        .then(m => m.Day10MaterialTable),
  },
                    {
    path: 'day11',
    loadComponent: () =>
      import('./features/day11-accordion-table/day11-accordion-table')
        .then(m => m.Day11AccordionTable),
  },
                      {
    path: 'day12',
    loadComponent: () =>
      import('./features/day12-export-table/day12-export-table')
        .then(m => m.Day12ExportTable),
  },
                        {
    path: 'day13',
    loadComponent: () =>
      import('./features/day13-search-filter/day13-search-filter')
        .then(m => m.Day13SearchFilter),
  },
                          {
    path: 'day14',
    loadComponent: () =>
      import('./features/day14-employee-table/day14-employee-table')
        .then(m => m.Day14EmployeeTable),
  },
                            {
    path: 'day15',
    loadComponent: () =>
      import('./features/day15-student-table/day15-student-table')
        .then(m => m.Day15StudentTable),
  },
                              {
    path: 'day16',
    loadComponent: () =>
      import('./features/day16-fileupload/day16-fileupload')
        .then(m => m.Day16Fileupload),
  },
                                {
    path: 'day17',
    loadComponent: () =>
      import('./features/day17-multifile-upload/day17-multifile-upload')
        .then(m => m.Day17MultifileUpload),
  },
  { path: '', redirectTo: 'day1', pathMatch: 'full' },
];
