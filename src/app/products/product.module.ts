import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductListComponents } from "./product-list.component";
import { ProductGuardService } from "./product-guard.service";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponents },
            { path: 'products/:id',
              canActivate: [ ProductGuardService ],
              component: ProductDetailComponent },

        ]),
        SharedModule
    ],
    declarations: [
        ProductListComponents,
        ProductDetailComponent,
        ConvertToSpacesPipe
    ],
    providers: [
        ProductService,
        ProductGuardService
    ]
})

export class ProductModule {

}