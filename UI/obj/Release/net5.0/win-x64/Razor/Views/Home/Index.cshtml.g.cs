#pragma checksum "D:\ReturnCRM\UI\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "57f0753faeca8eb435518973288c082a146d3fb1"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"57f0753faeca8eb435518973288c082a146d3fb1", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"52d79ad08d11418ded2b13adb4a9b2619d15bb23", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<DB.Models.IndexDto>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "D:\ReturnCRM\UI\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Ana sayfa";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"<section class=""content pt-60"">
    <div class=""container-fluid"">
        <!-- Small boxes (Stat box) -->
        <div class=""row"">
            <div class=""col-lg-3 col-6"">
                <!-- small box -->
                <div class=""small-box badge-pink"">
                    <div class=""inner"">
                        <h3>");
#nullable restore
#line 13 "D:\ReturnCRM\UI\Views\Home\Index.cshtml"
                       Write(Model.New);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h3>
                        <p>Yeni İade</p>
                    </div>
                    <div class=""icon"">
                        <i class=""fa-solid fa-octagon-plus""></i>
                    </div>
                    <a href=""/home/return-manager/1"" class=""small-box-footer"">Detay <i class=""fas fa-arrow-circle-right""></i></a>
                </div>
            </div>
            <!-- ./col -->
            <!-- ./col -->
            <div class=""col-lg-3 col-6"">
                <!-- small box -->
                <div class=""small-box bg-warning"">
                    <div class=""inner"">
                        <h3>");
#nullable restore
#line 28 "D:\ReturnCRM\UI\Views\Home\Index.cshtml"
                       Write(Model.Wait);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h3>
                        <p>Beklemede</p>
                    </div>
                    <div class=""icon"">
                        <i class=""ion ion-person-add""></i>
                    </div>
                    <a href=""/home/return-manager/2"" class=""small-box-footer"">Detay <i class=""fas fa-arrow-circle-right""></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class=""col-lg-3 col-6"">
                <!-- small box -->
                <div class=""small-box bg-info"">
                    <div class=""inner"">
                        <h3>");
#nullable restore
#line 42 "D:\ReturnCRM\UI\Views\Home\Index.cshtml"
                       Write(Model.Approve);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h3>
                        <p>Onaylandı</p>
                    </div>
                    <div class=""icon"">
                        <i class=""ion ion-pie-graph""></i>
                    </div>
                    <a href=""/home/return-manager/4"" class=""small-box-footer"">Detay <i class=""fas fa-arrow-circle-right""></i></a>
                </div>
            </div>
            <!-- ./col -->
            <div class=""col-lg-3 col-6"">
                <!-- small box -->
                <div class=""small-box badge-danger"">
                    <div class=""inner"">
                        <h3>");
#nullable restore
#line 56 "D:\ReturnCRM\UI\Views\Home\Index.cshtml"
                       Write(Model.Cancel);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h3>
                        <p>Reddedildi</p>
                    </div>
                    <div class=""icon"">
                        <i class=""ion ion-stats-bars""></i>
                    </div>
                    <a href=""/home/return-manager/3"" class=""small-box-footer"">Detay <i class=""fas fa-arrow-circle-right""></i></a>
                </div>
            </div>
        </div>
        </div>
</section>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<DB.Models.IndexDto> Html { get; private set; }
    }
}
#pragma warning restore 1591
