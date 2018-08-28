import {Params} from '@angular/router';

export interface BreadCrumb {
  label: string;
  queryParams?: Params;
  url: string;
};
