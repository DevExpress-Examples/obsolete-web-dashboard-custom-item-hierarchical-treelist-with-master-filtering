var CustomTreeViewExtension = (function () {
	var Dashboard = DevExpress.Dashboard;
	var dxTreeView = DevExpress.ui.dxTreeView;

	var customItemExtensionMeta = {
		bindings: [{
			propertyName: 'idBinding',
			dataItemType: 'Dimension',
			array: false,
			displayName: 'ID',
			placeholder: 'Add ID',
			configurePlaceholder: 'Configure ID',
		}, {
			propertyName: 'parentIdBinding',
			dataItemType: 'Dimension',
			array: false,
			displayName: 'Parent ID',
			placeholder: 'Add Parent ID',
			configurePlaceholder: 'Configure Parent ID',
		}, {
			propertyName: 'dimensionsBinding',
			dataItemType: 'Dimension',
			array: false,
			displayName: 'Dimensions',
			placeholder: 'Add Dimension',
			configurePlaceholder: 'Configure Dimension',
			enableInteractivity: true
		}],
		interactivity: {
			filter: true,
			applyEmptyFilter: true
		},
		icon: 'myTreeView',
		groupName: 'common',
		title: 'MyTreeView',
		index: 110
	};
	
	function Viewer(model, $container, options, dashboardControl) {
		Dashboard.CustomItemViewer.call(this, model, $container, options);
		this.model = model;
		this._requiredBindingsCount = 3;
		this.dashboardControl = dashboardControl;
	}
	Viewer.prototype = Object.create(Dashboard.CustomItemViewer.prototype);
	Viewer.prototype.constructor = Viewer;
	Viewer.prototype.renderContent = function ($element, changeExisting) {
		var _this = this;
		var dataSource = [];
			
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

		var container = $element.jquery ? $element[0] : $element;
		while(container.firstChild)
			container.removeChild(container.firstChild);
			
		var div = document.createElement('div');
		var treeView = new dxTreeView(div, {
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
			
		treeView.selectAll();
		container.appendChild(div);
	};
	
	function CustomTreeViewExtension(dashboardControl) {
		dashboardControl.registerIcon('<svg id= "myTreeView" viewBox="0 0 24 24" ><path stroke="#42f48f" fill="#42f48f" d="M12 2 L2 22 L22 22 Z" /></svg>');
		
		this.name = "MyTreeView";
		this.metaData = customItemExtensionMeta;
		this.createViewerItem = function (model, $element, content) {
			return new Viewer(model, $element, content, dashboardControl);
		}
	};

	return CustomTreeViewExtension;
})();