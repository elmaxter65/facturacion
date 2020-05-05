export class MapExportData {

    static mapProducts(product: any) {
        let csvRow: any = {};
        csvRow.ProductID = product.ProductID
        csvRow.ProductName = product.ProductName
        csvRow.CategoryName = product.Category.CategoryName
        csvRow.UnitPrice = product.UnitPrice
        // rows can grow as per need.
        return csvRow;
    }
}