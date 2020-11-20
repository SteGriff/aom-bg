import { Injector, NgModule } from "@angular/core";
import { Transition, UIRouter, UIRouterModule } from "@uirouter/angular";
import { UnitViewComponent } from 'app/army/unit-view/unit-view.component';
import { UnitService } from 'app/army/unit.service';
import { HomeComponent } from 'app/home/home.component';

// Could import states from ts files
const homeState = { name: "home", url: "", component: HomeComponent };
const unitState = {
  name: "unit",
  url: "/unit/:unitName",
  component: UnitViewComponent,
  resolve: [
    {
      token: "unit",
      deps: [Transition, UnitService],
      resolveFn: (t: Transition, unitService: UnitService) => {
        console.log("%cunitService", "color: white; background: green; padding: 4px; border-radius: 4px;", unitService, "for", t.params().unitName);
        const ret = unitService.getByName(t.params().unitName)
        console.log("%creturn", "color: white; background: green; padding: 4px; border-radius: 4px;", ret);
        return ret;
      }
    }
  ]
};

@NgModule({
  imports: [
    UIRouterModule.forRoot({
      states: [
        homeState,
        unitState
      ],
      config: (router: UIRouter, injector: Injector) => {
        router.urlService.rules.initial({ state: "home" });
        router.trace.enable();
      }
    }),
  ],
  providers: [UnitService],
  exports: [UIRouterModule],
})
export class AppRoutingModule { }
