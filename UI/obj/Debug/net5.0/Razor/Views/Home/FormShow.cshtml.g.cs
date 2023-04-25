#pragma checksum "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f0fcfc892b5bf7f71dcf371f16f4aff607ba40a9"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_FormShow), @"mvc.1.0.view", @"/Views/Home/FormShow.cshtml")]
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
#line 1 "D:\LenaFormManager\UI\Views\_ViewImports.cshtml"
using UI;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\LenaFormManager\UI\Views\_ViewImports.cshtml"
using UI.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f0fcfc892b5bf7f71dcf371f16f4aff607ba40a9", @"/Views/Home/FormShow.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"52d79ad08d11418ded2b13adb4a9b2619d15bb23", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_FormShow : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<DB.Models.FormDto>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("action", new global::Microsoft.AspNetCore.Html.HtmlString("/"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("enctype", new global::Microsoft.AspNetCore.Html.HtmlString("multipart/form-data"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
  
    ViewData["Title"] = "Form Görünümü";

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
                    <li class=""breadcrumb-item""><a href=""/"">Dashboard</a></li>
                    <li class=""breadcrumb-item active"">Form Yönetimi</li>
                </ol>
            </div>
        </div>
    </div>
</div>
<section class=""content"">
    <div class=""container-fluid"">
        <div class=""row"">
            <div class=""col-md-12"">
                <div class=""card card-color"">
                    <div class=""card-header"">
                        <h3 class=""card-title float-none ls"">");
#nullable restore
#line 25 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
                                                        Write(Model.Form.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral(" Formu</h3>\r\n");
#nullable restore
#line 26 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
                         if (!String.IsNullOrEmpty(Model.Form.Description))
                        {

#line default
#line hidden
#nullable disable
            WriteLiteral("                            <p>");
#nullable restore
#line 28 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
                          Write(Model.Form.Description);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n");
#nullable restore
#line 29 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
                        }

#line default
#line hidden
#nullable disable
            WriteLiteral("                    </div>\r\n                    <div class=\"card-body\">\r\n                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f0fcfc892b5bf7f71dcf371f16f4aff607ba40a95859", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 33 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
                             foreach (var item in Model.FormFieldList)
                            {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                <div class=\"form-group row\">\r\n                                    <label for=\"alan1\" class=\"col-sm-2 col-form-label\">");
#nullable restore
#line 36 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
                                                                                  Write(item.FieldName);

#line default
#line hidden
#nullable disable
                WriteLiteral("</label>\r\n                                    <div class=\"col-sm-10\">\r\n                                        <input");
                BeginWriteAttribute("type", " type=\"", 1582, "\"", 1626, 1);
#nullable restore
#line 38 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
WriteAttributeValue("", 1589, item.DataType=="0"?"text":"number", 1589, 37, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                BeginWriteAttribute("placeholder", " placeholder=\"", 1627, "\"", 1656, 1);
#nullable restore
#line 38 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
WriteAttributeValue("", 1641, item.FieldName, 1641, 15, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                BeginWriteAttribute("class", " class=\"", 1657, "\"", 1710, 2);
                WriteAttributeValue("", 1665, "form-control", 1665, 12, true);
#nullable restore
#line 38 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
WriteAttributeValue(" ", 1677, SeoUrl.Generate(item.FieldName), 1678, 32, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                BeginWriteAttribute("value", " value=\"", 1711, "\"", 1719, 0);
                EndWriteAttribute();
                BeginWriteAttribute("id", " id=\"", 1720, "\"", 1757, 1);
#nullable restore
#line 38 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
WriteAttributeValue("", 1725, SeoUrl.Generate(item.FieldName), 1725, 32, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                BeginWriteAttribute("name", " name=\"", 1758, "\"", 1797, 1);
#nullable restore
#line 38 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
WriteAttributeValue("", 1765, SeoUrl.Generate(item.FieldName), 1765, 32, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(" ");
#nullable restore
#line 38 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
                                                                                                                                                                                                                                                                   Write(item.Required=="1"?"required":"");

#line default
#line hidden
#nullable disable
                WriteLiteral(">\r\n                                    </div>\r\n                                </div>\r\n");
#nullable restore
#line 41 "D:\LenaFormManager\UI\Views\Home\FormShow.cshtml"
                            }

#line default
#line hidden
#nullable disable
                WriteLiteral(@"                            <div class=""form-group row"">
                                <hr style="" width: 100%;"" />
                            </div>
                            <div class=""form-group row"">
                                <label for=""alan1"" class=""col-sm-2 col-form-label"">İşlem</label>
                                <div class=""col-sm-10"">
                                    <button class=""button special color2 btn-block"">Kaydet</button>
                                </div>
                            </div>
                        ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<DB.Models.FormDto> Html { get; private set; }
    }
}
#pragma warning restore 1591