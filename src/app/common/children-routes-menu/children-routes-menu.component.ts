import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, filter, map} from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { NavigationRoute } from './navigation-route';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-children-routes-menu',
  templateUrl: './children-routes-menu.component.html',
  styleUrls: ['./children-routes-menu.component.scss']
})
export class ChildrenRoutesMenuComponent implements OnInit {

  childRoutes: Observable<NavigationRoute[]>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.childRoutes = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(() => this.getChildrenRoutes(this.activatedRoute))
    );
  }

  ngOnInit() {

  }

  private getChildrenRoutes(route: ActivatedRoute): NavigationRoute[] {

    const ROUTE_DATA = 'data';
    const ROUTE_DATA_LABEL = 'label';

    const routes = [];
    const children = route.firstChild.routeConfig.children;
    if (!children || children.length === 0) {
      return routes;
    }

    children.forEach(child => {

      if (!child.hasOwnProperty(ROUTE_DATA) || !child.data.hasOwnProperty(ROUTE_DATA_LABEL)) {
        throw Error(`'${child.path}' does not have label defined in data config.`);
      }

      routes.push({
        url: child.path,
        label: child.data[ROUTE_DATA_LABEL]
      });
    });

    return routes;
  }

}
