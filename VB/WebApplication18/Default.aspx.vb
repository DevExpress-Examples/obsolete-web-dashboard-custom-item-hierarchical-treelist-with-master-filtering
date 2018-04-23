Imports DevExpress.DashboardWeb
Imports DevExpress.DataAccess.ConnectionParameters
Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls

Namespace WebApplication18
    Partial Public Class [Default]
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim newDashboardStorage As New DashboardFileStorage("~/App_Data/Dashboards")
            ASPxDashboard1.SetDashboardStorage(newDashboardStorage)
        End Sub

        Protected Sub ASPxDashboard1_ConfigureDataConnection(ByVal sender As Object, ByVal e As DevExpress.DashboardWeb.ConfigureDataConnectionWebEventArgs)
            If e.DataSourceName = "SQL Data Source 1" Then
                e.ConnectionParameters = New XmlFileConnectionParameters() With {.FileName = Server.MapPath("/App_Data/Departments.xml")}
            End If
        End Sub
    End Class
End Namespace