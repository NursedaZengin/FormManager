#pragma checksum "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5a06da80a4bd74c02fd52845b65b230322c196fb"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_ReturnManager), @"mvc.1.0.view", @"/Views/Home/ReturnManager.cshtml")]
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
#line 1 "D:\ReturnCRM\UI\Views\_ViewImports.cshtml"
using UI;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\ReturnCRM\UI\Views\_ViewImports.cshtml"
using UI.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5a06da80a4bd74c02fd52845b65b230322c196fb", @"/Views/Home/ReturnManager.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"52d79ad08d11418ded2b13adb4a9b2619d15bb23", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_ReturnManager : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<DB.Models.ReturnDto>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
  
    ViewData["Title"] = "İade Yönetimi";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"<div class=""content-header"">
    <div class=""container-fluid"">
        <div class=""row mb-2"">
            <div class=""col-sm-6"">
            </div>
            <div class=""col-sm-6"">
                <ol class=""breadcrumb float-right"">
                    <li class=""breadcrumb-item""><a href=""/home"">Dashboard</a></li>
                    <li class=""breadcrumb-item active"">İadeler</li>
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
                        <div class=""btn-group float-left"">
                            <a href=""/home/return-manager/add"" class=""btn btn-info mr-4 add-btn"" title=""İade Ekle""><i class=""fas fa-notes-medical add-i""></i></a>
                            <h3 class=""card-title ls"">İade Listesi</h3>
                        </div>
             ");
            WriteLiteral(@"       </div>
                    <div class=""card-body"">
                        <table id=""example1"" class=""table table-bordered table-striped"">
                            <thead>
                                <tr>
                                    <th>Şube</th>
                                    <th>Tarih</th>
                                    <th>Ürün</th>
                                    <th>Durum</th>
                                    <th>Kullanıcı</th>
                                    <th>İşlem</th>
                                </tr>
                            </thead>
                            <tbody>

");
#nullable restore
#line 44 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                                 if (Model.ReturnList.ToList().Count < 1)
                                {

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                                    <tr>
                                        <td colspan=""6"" style=""text-align: center;"">
                                            Listelenecek veri Yok.
                                        </td>
                                    </tr>
");
#nullable restore
#line 51 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                                }

#line default
#line hidden
#nullable disable
#nullable restore
#line 52 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                                 foreach (var item in Model.ReturnList)
                                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                            <tr data-id=\"");
#nullable restore
#line 54 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                                    Write(item.Id);

#line default
#line hidden
#nullable disable
            WriteLiteral("\" data-sort=\"");
#nullable restore
#line 54 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                                                         Write(item.Id);

#line default
#line hidden
#nullable disable
            WriteLiteral("\">\r\n                                <td>");
#nullable restore
#line 55 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                               Write(item._Branch.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                <td>");
#nullable restore
#line 56 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                               Write(DateConverter.getDatetime(item.Date).ToString("dd.MM.yyyy"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                <td>");
#nullable restore
#line 57 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                               Write(item.ProductName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                <td><span");
            BeginWriteAttribute("class", " class=\"", 2634, "\"", 2797, 2);
            WriteAttributeValue("", 2642, "p-2", 2642, 3, true);
#nullable restore
#line 58 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
WriteAttributeValue(" ", 2645, item.Status==1?"badge badge-pink":(item.Status==2?"badge badge-yellow":(item.Status==3?"badge badge-danger":(item.Status==4?"badge badge-info":""))), 2646, 151, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 58 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                                                                                                                                                                                                         Write(item._Status.Title);

#line default
#line hidden
#nullable disable
            WriteLiteral("</span></td>\r\n                                <td>");
#nullable restore
#line 59 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                               Write(item._User.FullName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                <td style=\"padding: .45rem;width: 100px;\">\r\n                                    <a");
            BeginWriteAttribute("href", " href=\"", 3009, "\"", 3053, 2);
            WriteAttributeValue("", 3016, "/home/return-manager/edit?id=", 3016, 29, true);
#nullable restore
#line 61 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
WriteAttributeValue("", 3045, item.Id, 3045, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"btn btn-default edit-comment btn-icon mb-1\" data-id=\"");
#nullable restore
#line 61 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                                                                                                                                           Write(item.Id);

#line default
#line hidden
#nullable disable
            WriteLiteral("\" title=\"İade Düzenle\">\r\n                                        <i class=\"far fa-edit\"></i>\r\n                                    </a>\r\n                                        <button data-id=\"");
#nullable restore
#line 64 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
                                                    Write(item.Id);

#line default
#line hidden
#nullable disable
            WriteLiteral("\" class=\"btn btn-danger btn-icon mb-1 ml-2 return-delete\" title=\"Sil\"> <i class=\"fas fa-trash\"></i></button>\r\n                                </td>\r\n                            </tr>\r\n");
#nullable restore
#line 67 "D:\ReturnCRM\UI\Views\Home\ReturnManager.cshtml"
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
<!-- Control Sidebar -->
<aside class=""control-sidebar control-sidebar-dark"">
    <!-- Control sidebar content goes here -->
</aside>
<div class=""modal fade"" id=""modal-default"" style=""display: none;"" aria-hidden=""true"">
    <div class=""modal-dialog"">
        <div class=""modal-content"" id=""modalContent"">

        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<DB.Models.ReturnDto> Html { get; private set; }
    }
}
#pragma warning restore 1591