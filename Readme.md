<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128580262/20.1.2%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T543679)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
<!-- default file list -->
*Files to look at*:

* [Default.aspx](./CS/WebApplication18/Default.aspx) (VB: [Default.aspx](./VB/WebApplication18/Default.aspx))
* [Default.aspx.cs](./CS/WebApplication18/Default.aspx.cs) (VB: [Default.aspx.vb](./VB/WebApplication18/Default.aspx.vb))
* [CustomTreeViewExtension.js](./CS/WebApplication18/Scripts/CustomTreeViewExtension.js) (VB: [CustomTreeViewExtension.js](./VB/WebApplication18/Scripts/CustomTreeViewExtension.js))
<!-- default file list end -->

# Dashboard for Web Forms - How to implement a custom TreeList Item with Master Filtering to display hierarchical data

This example demonstrates how to create a custom TreeView Dashboard Item to display hierarchical data. The example uses the DevExtreme <a href="https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxTreeView/">dxTreeView</a> widget and its API for data visualization.<br><br>To learn how to work with custom items, refer to the <a href="https://www.devexpress.com/Support/Center/p/T491984">T491984: Web Dashboard - How to create a custom dashboard item extension</a> article.<br><br>
<p><strong>Note:</strong> It is necessary to define three properties in the bindings section to display the tree view in this scenario: ID, ParentID, and Dimension. After that, the hierarchy will be created based on ID and ParentID relations and data from the Dimension field will be displayed.</p>

## Documentation

- [Client-Side API Overview for ASP.NET Web Forms Dashboard](https://docs.devexpress.com/Dashboard/116302/web-dashboard/aspnet-web-forms-dashboard-control/client-side-api-overview)
- [Extensions Overview](https://docs.devexpress.com/Dashboard/117543/web-dashboard/ui-elements-and-customization/extensions-overview)
- [Create a Custom Item](https://docs.devexpress.com/Dashboard/117546/web-dashboard/ui-elements-and-customization/create-a-custom-item)
- [Master Filtering](https://docs.devexpress.com/Dashboard/117060/web-dashboard/create-dashboards-on-the-web/interactivity/master-filtering)
- [ViewerApiExtension](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension)

## More Examples

- [Dashboard for Web Forms - How to: Apply Master Filter in Code](https://github.com/DevExpress-Examples/aspxdashboard-how-to-apply-master-filtering-in-code-t490897)
