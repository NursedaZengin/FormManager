#pragma checksum "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b43454559e66a6ec996332b7221763d2edbe235f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Panel_ProjectManager), @"mvc.1.0.view", @"/Views/Panel/ProjectManager.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\GitHub Repository\KodArge\kodArge\UI\Views\_ViewImports.cshtml"
using UI;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\GitHub Repository\KodArge\kodArge\UI\Views\_ViewImports.cshtml"
using UI.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b43454559e66a6ec996332b7221763d2edbe235f", @"/Views/Panel/ProjectManager.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"52d79ad08d11418ded2b13adb4a9b2619d15bb23", @"/Views/_ViewImports.cshtml")]
    public class Views_Panel_ProjectManager : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<DB.Models.ProjectDto>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
  
    ViewData["Title"] = "ProjeManager";
    Layout = "~/Views/Shared/_PanelLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"

<div class=""content-header"">
    <div class=""container-fluid"">
        <div class=""row mb-2"">
            <div class=""col-sm-6"">
                <h1 class=""m-0 text-dark"">Proje Yönetimi</h1>
            </div>
            <div class=""col-sm-6"">
                <ol class=""breadcrumb float-sm-right"">
                    <li class=""breadcrumb-item""><a href=""/panel"">Dashboard</a></li>
                    <li class=""breadcrumb-item active"">Projeler</li>
                </ol>
            </div>
        </div>
    </div>
</div>
<section class=""content"">
    <div class=""container-fluid"">
        <div class=""row"">
            <div class=""col-md-12"">
                <div class=""card"">
                    <div class=""card-header"">
                        <h3 class=""card-title"">Proje Listesi</h3>
                        <div class=""btn-group float-right"">
                            <a href=""/panel/project-manager/add"" class=""btn btn-info mr-4 "">Proje Ekle</a>
");
#nullable restore
#line 32 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                             foreach (var item in Model.LangList)
                            {


#line default
#line hidden
#nullable disable
            WriteLiteral("                                <a");
            BeginWriteAttribute("href", " href=\"", 1254, "\"", 1299, 2);
            WriteAttributeValue("", 1261, "/panel/project-manager?LangId=", 1261, 30, true);
#nullable restore
#line 35 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
WriteAttributeValue("", 1291, item.Id, 1291, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            BeginWriteAttribute("class", " class=\"", 1300, "\"", 1366, 3);
            WriteAttributeValue("", 1308, "btn", 1308, 3, true);
            WriteAttributeValue(" ", 1311, "btn-", 1312, 5, true);
#nullable restore
#line 35 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
WriteAttributeValue("", 1316, Model.SelectedLang.Id==item.Id?"primary":"info", 1316, 50, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 35 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                                                                                                                                               Write(item.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a>\r\n");
#nullable restore
#line 36 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                            }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                        </div>
                    </div>
                    <div class=""card-body"">
                        <table class=""table table-bordered"">
                            <thead>
                                <tr>
                                    <th>Başlık</th>
                                    <th>İşlem</th>
                                </tr>
                            </thead>
                            <tbody id=""sortable"">
");
#nullable restore
#line 48 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                                 if (Model.ProjectList.Count < 1)
                                {

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                                    <tr>
                                        <td colspan=""4"" style=""text-align: center;"">
                                            Listelenecek Proje Yok. Üst Kısımdan Proje Ekleyebilirsiniz.
                                        </td>
                                    </tr>
");
#nullable restore
#line 55 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                                }

#line default
#line hidden
#nullable disable
#nullable restore
#line 56 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                                 foreach (var item in Model.ProjectList.OrderBy(x => x.Id))
                                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                                    <tr data-id=\"");
#nullable restore
#line 58 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                                            Write(item.Id);

#line default
#line hidden
#nullable disable
            WriteLiteral("\" data-sort=\"");
#nullable restore
#line 58 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                                                                 Write(item.Id);

#line default
#line hidden
#nullable disable
            WriteLiteral("\">\r\n                                        <td>");
#nullable restore
#line 59 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                                       Write(Html.Raw(item.Title));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n\r\n                                        <td style=\"padding: .45rem;width: 130px;\">\r\n                                            <a");
            BeginWriteAttribute("href", " href=\"", 2765, "\"", 2811, 2);
            WriteAttributeValue("", 2772, "/panel/project-manager/edit?id=", 2772, 31, true);
#nullable restore
#line 62 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
WriteAttributeValue("", 2803, item.Id, 2803, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"btn btn-default  btn-icon mb-1\" data-id=\"");
#nullable restore
#line 62 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                                                                                                                                         Write(item.Id);

#line default
#line hidden
#nullable disable
            WriteLiteral("\" title=\"Proje Düzenle\">\r\n                                                <i class=\"far fa-edit\"></i>\r\n                                            </a>\r\n                                            <button data-id=\"");
#nullable restore
#line 65 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                                                        Write(item.Id);

#line default
#line hidden
#nullable disable
            WriteLiteral("\" class=\"btn btn-danger btn-icon mb-1 project-delete\" title=\"Sil\"> <i class=\"fas fa-trash\"></i></button>\r\n                                        </td>\r\n                                    </tr>\r\n");
#nullable restore
#line 68 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\ProjectManager.cshtml"
                                }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- /.card -->
            </div>
        </div>
    </div>
</section>



<div class=""modal fade"" id=""modal-default"" style=""display: none;"" aria-hidden=""true"">
    <div class=""modal-dialog"">
        <div class=""modal-content"" id=""modalContent"">

        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>



");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<DB.Models.ProjectDto> Html { get; private set; }
    }
}
#pragma warning restore 1591