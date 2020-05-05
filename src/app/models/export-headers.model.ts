import { IExportColumnHeaders } from "../interfaces/IExport";

export class ExportColumnHeaders {

    // Headers for file
    public static get ProductColumns(): Array<IExportColumnHeaders> {
        return [
            { field: "ProductID", title: "Product Id" },
            { field: "ProductName", title: "Product Name" },
            { field: "CategoryName", title: "Category Name" },
            { field: "UnitPrice", title: "Unit Price" },
        ]
    }
}