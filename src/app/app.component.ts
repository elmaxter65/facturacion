import { Component } from '@angular/core';
import { products } from 'src/app/data/products.data';
import {IExport } from 'src/app/interfaces/IExport';
import { MapExportData } from 'src/app/data/MapExportData';
import { ExportColumnHeaders } from 'src/app/models/export-headers.model';
import { ExportService } from 'src/app/services/export.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers :[ExportService]

})
export class AppComponent {
  title = 'angular-firebase-crud';
  public gridData: any[] = products;

  constructor(
    private exportService: ExportService
  ){

  }
  //Call this method on button
  exportToCSV() {
    this.title = 'Exporting to CSV';
    var exportData: IExport = {
      data: this.gridData.map(x => MapExportData.mapProducts(x)),
      columnHeaders: ExportColumnHeaders.ProductColumns,
      columnHeaderNotToBeIncluded: []
    }
    this.exportService.ExportToCSV(exportData);
  }
}
