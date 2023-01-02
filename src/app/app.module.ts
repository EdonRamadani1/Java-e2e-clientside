import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// added imports
import { MatComponentsModule } from './mat-components/mat-components.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { VendorModule } from './vendor/vendor.module';
import { ProductModule } from './product/product.module';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
 declarations: [
 AppComponent,
 HomeComponent,
 DeleteDialogComponent
 ],
 imports: [
 BrowserModule,
 AppRoutingModule,
 BrowserAnimationsModule,
 HttpClientModule,
 MatComponentsModule,
 VendorModule,
 ProductModule,
 PurchaseOrderModule,
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }