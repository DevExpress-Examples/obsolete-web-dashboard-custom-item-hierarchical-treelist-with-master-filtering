<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication18.Default" %>

<%@ Register Assembly="DevExpress.Dashboard.v20.1.Web.WebForms, Version=20.1.8.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.DashboardWeb" TagPrefix="dx" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <script type="text/javascript">
        function onBeforeRender(s, e) {
            var dashboardControl = s.getDashboardControl();
            dashboardControl.registerExtension(new CustomTreeViewExtension(dashboardControl));
        }
    </script>

</head>
<body>
    <form id="form1" runat="server">
        <div>
            <dx:ASPxDashboard ID="ASPxDashboard1" ClientInstanceName="webDashboard" runat="server" AllowExportDashboardItems="true" AllowExportDashboard="True" OnConfigureDataConnection="ASPxDashboard1_ConfigureDataConnection">
                <ClientSideEvents BeforeRender="onBeforeRender" />
            </dx:ASPxDashboard>
            <script src="Scripts/CustomTreeViewExtension.js"></script>
        </div>
    </form>
</body>
</html>
