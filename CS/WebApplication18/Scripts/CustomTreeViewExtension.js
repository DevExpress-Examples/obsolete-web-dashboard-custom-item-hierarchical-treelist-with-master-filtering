function registerCustomTreeView(dashboardControl) {
    dashboardControl.registerIcon('<svg id= "myTreeView" viewBox="0 0 24 24" ><path stroke="#42f48f" fill="#42f48f" d="M12 2 L2 22 L22 22 Z" /></svg>');
    return {
        name: "MyTreeView",
        metaData: customItemExtensionMeta,

        createViewerItem: function (model, $element, content) {
            return new viewer(model, $element, content, dashboardControl);
        }
    }
};

var customItemExtensionMeta = {
    bindings: [
        {
            propertyName: 'idBinding',
            dataItemType: 'Dimension',
            array: false,
            displayName: 'ID',
            placeholder: 'Add ID',
            configurePlaceholder: 'Configure ID',
        },
        {
            propertyName: 'parentIdBinding',
            dataItemType: 'Dimension',
            array: false,
            displayName: 'Parent ID',
            placeholder: 'Add Parent ID',
            configurePlaceholder: 'Configure Parent ID',
        },
        {
            propertyName: 'dimensionsBinding',
            dataItemType: 'Dimension',
            array: false,
            displayName: 'Dimensions',
            placeholder: 'Add Dimension',
            configurePlaceholder: 'Configure Dimension',
            enableInteractivity: true
        }
    ],
    interactivity: {
        filter: true,
        applyEmptyFilter: true
    },
    icon: 'myTreeView',
    groupName: 'common',
    title: 'MyTreeView',
    index: 110
};

var viewer = (function (_base) {
    __extends(viewer, _base);
    function viewer(model, $container, options, dashboardControl) {
        _base.call(this, model, $container, options);
        this.model = model;
        this.dashboardControl = dashboardControl;
    }
    viewer.prototype._requiredBindingsCount = 3;
    viewer.prototype._getTreeViewId = function () {
        return 'custom-tree-' + this.getName();
    };
    viewer.prototype.getGridContainer = function () {
        return $('#' + this._getTreeViewId());
    };
    viewer.prototype.renderContent = function ($element, changeExisting) {
        var columns = [];
        var dataSource = [];
        var _this = this;
        var treeViewId = this._getTreeViewId();
        //Check Bindings
        var bindings = this.getBindingValue('dimensionsBinding').concat(this.getBindingValue('idBinding')).concat(this.getBindingValue('parentIdBinding'));
        if (bindings.length != this._requiredBindingsCount)
            return;
        //Get Data Source
        this.model.iterateData(function (dataRow) {
            var row = {
                ID: dataRow.getDisplayText('idBinding')[0],
                ParentID: dataRow.getDisplayText('parentIdBinding')[0] != -1 ? dataRow.getDisplayText('parentIdBinding')[0] : null,
                DisplayField: dataRow.getDisplayText('dimensionsBinding')[0],
            };
            row._customData = dataRow;
            dataSource.push(row);
        });
        $element.empty();
        var treeView = $('<div id=' + treeViewId + '></div>').dxTreeView({
            items: dataSource,
            dataStructure: "plain",
            parentIdExpr: "ParentID",
            keyExpr: "ID",
            displayExpr: "DisplayField",
            selectionMode: "multiple",
            selectNodesRecursive: true,
            showCheckBoxesMode: "normal",
            onSelectionChanged: function (e) {
                var selectedNodeKeys = e.component.getSelectedNodesKeys();
                var selectedRows = dataSource
                    .filter(function (row) { return selectedNodeKeys.indexOf(row.ID) != -1 })
                    .map(function (row) {
                        return [row._customData.getUniqueValue('dimensionsBinding')[0]]
                    });
                var viewerApiExtension = _this.dashboardControl.findExtension("viewer-api");

                if (_this.getMasterFilterMode() == 'Multiple') {
                    if (selectedRows.length)
                        viewerApiExtension.setMasterFilter(_this.model.componentName(), selectedRows);
                    else
                        viewerApiExtension.clearMasterFilter(_this.model.componentName());
                }
            }
        });
        treeView.dxTreeView('instance').selectAll();
        $element.append(treeView);
    };
    return viewer;
}(DevExpress.JS.Dashboard.customViewerItem));
