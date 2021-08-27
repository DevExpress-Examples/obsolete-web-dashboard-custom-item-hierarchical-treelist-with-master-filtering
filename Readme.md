<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128580262/19.2.7%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T543679)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
<!-- default file list -->
*Files to look at*:

* **[Default.aspx](./CS/WebApplication18/Default.aspx) (VB: [Default.aspx](./VB/WebApplication18/Default.aspx))**
* [Default.aspx.cs](./CS/WebApplication18/Default.aspx.cs) (VB: [Default.aspx.vb](./VB/WebApplication18/Default.aspx.vb))
* [CustomTreeViewExtension.js](./CS/WebApplication18/Scripts/CustomTreeViewExtension.js) (VB: [CustomTreeViewExtension.js](./VB/WebApplication18/Scripts/CustomTreeViewExtension.js))
<!-- default file list end -->
# How to implement a custom TreeList Item with Master Filtering to display hierarchical data


This example demonstrates how to create a custom TreeView Dashboard Item to display hierarchical data. The example uses the DevExtreme <a href="https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxTreeView/">dxTreeView</a> widget and its API for data visualization.<br><br>To learn how to work with custom items, refer to the <a href="https://www.devexpress.com/Support/Center/p/T491984">T491984: Web Dashboard - How to create a custom dashboard item extension</a> article.<br><br>
<p><strong>Note:</strong> It is necessary to define three properties in the bindings section to display the tree view in this scenario: ID, ParentID, and Dimension. After that, the hierarchy will be created based on ID and ParentID relations and data from the Dimension field will be displayed.</p>

<br/>


