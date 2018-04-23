using DevExpress.DashboardWeb;
using DevExpress.DataAccess.ConnectionParameters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication18 {
    public partial class Default : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            DashboardFileStorage newDashboardStorage = new DashboardFileStorage(@"~/App_Data/Dashboards");
            ASPxDashboard1.SetDashboardStorage(newDashboardStorage);
        }

        protected void ASPxDashboard1_ConfigureDataConnection(object sender, DevExpress.DashboardWeb.ConfigureDataConnectionWebEventArgs e) {
            if (e.DataSourceName == "SQL Data Source 1") {
                e.ConnectionParameters = new XmlFileConnectionParameters() { FileName = Server.MapPath(@"/App_Data/Departments.xml") };
            }
        }
    }
}