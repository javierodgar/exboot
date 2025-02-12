import { Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {
        path: 'buttons',
        component: ButtonsComponent
    },
    {
        path: 'tabla',
        component: TableComponent
    },
    {
        path: 'form',
        component: FormComponent
    }
];
