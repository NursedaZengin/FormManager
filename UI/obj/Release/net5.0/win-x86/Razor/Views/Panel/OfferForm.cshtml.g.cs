#pragma checksum "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e349ba6dbf7040466960f98fa2378819d445b2ac"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Panel_OfferForm), @"mvc.1.0.view", @"/Views/Panel/OfferForm.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e349ba6dbf7040466960f98fa2378819d445b2ac", @"/Views/Panel/OfferForm.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"52d79ad08d11418ded2b13adb4a9b2619d15bb23", @"/Views/_ViewImports.cshtml")]
    public class Views_Panel_OfferForm : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<DB.Entities.FormMessages>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "1", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "0", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("form-offer-edit"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("enctype", new global::Microsoft.AspNetCore.Html.HtmlString("multipart/form-data"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
  
    ViewData["Title"] = "Teklif Formu Gelenler";
    Layout = "~/Views/Shared/_PanelLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<div class=""content-header"">
    <div class=""container-fluId"">
        <div class=""row mb-2"">
            <div class=""col-sm-6"">
                <h1 class=""m-0 text-dark"">Navbar</h1>
                <button class=""btn btn-info mt-2"" onClick=""window.history.back();"" name=""btn-back"" Id=""btn-back""><i class=""fas fa-arrow-left""></i> Geri</button>
            </div>
            <div class=""col-sm-6"">
                <ol class=""breadcrumb float-sm-right"">
                    <li class=""breadcrumb-item""><a href=""/panel"">Dashboard</a></li>
                </ol>
            </div>
        </div>
    </div>
</div>
<section class=""content"">
    <div class=""container-fluId"">
        <div class=""row"">
            <div class=""col-md-12"">
                <div class=""card"">
                    <div class=""card-header"">
                        <h3 class=""card-title"">Teklif Formu Düzenle</h3>
                    </div>
                    <div class=""card-body"">
                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e349ba6dbf7040466960f98fa2378819d445b2ac5926", async() => {
                WriteLiteral("\r\n                            <div class=\"form-group row\">\r\n                                <div class=\"col-sm-10\">\r\n                                    <input type=\"hidden\"");
                BeginWriteAttribute("placeholder", " placeholder=\"", 1380, "\"", 1394, 0);
                EndWriteAttribute();
                WriteLiteral(" class=\"form-control\"");
                BeginWriteAttribute("value", " value=\"", 1416, "\"", 1433, 1);
#nullable restore
#line 34 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
WriteAttributeValue("", 1424, Model.Id, 1424, 9, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(@" id=""id"" name=""id"" required>

                                </div>
                            </div>
                            <div class=""form-group row"">
                                <label for=""alan1"" class=""col-sm-2 col-form-label""> Mesaj Konusu</label>
                                <div class=""col-sm-10"">
                                    <input type=""text"" class=""form-control""");
                BeginWriteAttribute("value", " value=\"", 1838, "\"", 1879, 1);
#nullable restore
#line 41 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
WriteAttributeValue("", 1846, Model._FormMessageObject.Subject, 1846, 33, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(@" id=""Subject"" name=""Subject"" required disabled>
                                </div>
                            </div>
                            <div class=""form-group row"">
                                <label for=""alan1"" class=""col-sm-2 col-form-label""> Ad Soyad</label>
                                <div class=""col-sm-10"">
                                    <input type=""text"" class=""form-control""");
                BeginWriteAttribute("value", " value=\"", 2297, "\"", 2335, 1);
#nullable restore
#line 47 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
WriteAttributeValue("", 2305, Model._FormMessageObject.Name, 2305, 30, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(@" id=""Name"" name=""Name"" required disabled>
                                </div>
                            </div>
                            <div class=""form-group row"">
                                <label for=""alan1"" class=""col-sm-2 col-form-label"">Telefon</label>
                                <div class=""col-sm-10"">
                                    <input type=""text"" class=""form-control""");
                BeginWriteAttribute("value", " value=\"", 2745, "\"", 2784, 1);
#nullable restore
#line 53 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
WriteAttributeValue("", 2753, Model._FormMessageObject.Phone, 2753, 31, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(@" id=""Phone"" name=""Phone"" required disabled>
                                </div>
                            </div>
                            <div class=""form-group row"">
                                <label for=""alan1"" class=""col-sm-2 col-form-label"">E-Posta</label>
                                <div class=""col-sm-10"">
                                    <input type=""text"" class=""form-control""");
                BeginWriteAttribute("value", " value=\"", 3196, "\"", 3235, 1);
#nullable restore
#line 59 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
WriteAttributeValue("", 3204, Model._FormMessageObject.Email, 3204, 31, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(@" id=""Email"" name=""Email"" required disabled>
                                </div>
                            </div>
                            <div class=""form-group row"">
                                <label for=""alan1"" class=""col-sm-2 col-form-label"">Tarih</label>
                                <div class=""col-sm-10"">
                                    <input type=""text"" placeholder=""Tarih giriniz"" class=""form-control""");
                BeginWriteAttribute("value", " value=\"", 3673, "\"", 3711, 1);
#nullable restore
#line 65 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
WriteAttributeValue("", 3681, Model._FormMessageObject.Date, 3681, 30, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(@" id=""Date"" name=""Date"" disabled required>
                                </div>
                            </div>
                            <div class=""form-group row"">
                                <label for=""alan1"" class=""col-sm-2 col-form-label"">Not</label>
                                <div class=""col-sm-10"">
");
#nullable restore
#line 71 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
                                      
                                        var msglist = Newtonsoft.Json.JsonConvert.DeserializeObject<List<string>>(Model.Note);
                                        msglist.Reverse();
                                    

#line default
#line hidden
#nullable disable
                WriteLiteral("                                    <div style=\"max-height:180px;overflow-x:scroll;overflow-y:unset;\">\r\n");
#nullable restore
#line 76 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
                                         foreach (var item in msglist)
                                        {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                            <p class=\"text-black-50\">");
#nullable restore
#line 78 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
                                                                Write(item);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\r\n");
#nullable restore
#line 79 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
                                        }

#line default
#line hidden
#nullable disable
                WriteLiteral("                                    </div>\r\n                                    <hr />\r\n                                    <input type=\"text\" placeholder=\"Not giriniz\" class=\"form-control\"");
                BeginWriteAttribute("value", " value=\"", 4840, "\"", 4848, 0);
                EndWriteAttribute();
                WriteLiteral(@" id=""Note"" name=""Note"" required>
                                </div>
                            </div>
                            <div class=""form-group row"">
                                <label for=""alan1"" class=""col-sm-2 col-form-label"">Durumu</label>
                                <div class=""col-sm-10"">
                                    <select id=""Status"" name=""Status"" class=""Status form-control"">
");
#nullable restore
#line 89 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
                                         if (Model.Status == 0)
                                        {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                            ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e349ba6dbf7040466960f98fa2378819d445b2ac13911", async() => {
                    WriteLiteral("Açık");
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_0.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n                                            ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e349ba6dbf7040466960f98fa2378819d445b2ac15177", async() => {
                    WriteLiteral("Kapalı");
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_1.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
                BeginWriteTagHelperAttribute();
                __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
                __tagHelperExecutionContext.AddHtmlAttribute("selected", Html.Raw(__tagHelperStringValueBuffer), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.Minimized);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
#nullable restore
#line 93 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
                                        }
                                        else
                                        {

#line default
#line hidden
#nullable disable
                WriteLiteral("                                            ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e349ba6dbf7040466960f98fa2378819d445b2ac17085", async() => {
                    WriteLiteral("Açık");
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_0.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
                BeginWriteTagHelperAttribute();
                __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
                __tagHelperExecutionContext.AddHtmlAttribute("selected", Html.Raw(__tagHelperStringValueBuffer), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.Minimized);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n                                            ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e349ba6dbf7040466960f98fa2378819d445b2ac18674", async() => {
                    WriteLiteral("Kapalı");
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
                __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_1.Value;
                __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n");
#nullable restore
#line 98 "D:\GitHub Repository\KodArge\kodArge\UI\Views\Panel\OfferForm.cshtml"
                                        }

#line default
#line hidden
#nullable disable
                WriteLiteral(@"
                                    </select>
                                </div>
                            </div>
                            <!--Button-->
                            <div class=""form-group row"">
                                <label for=""alan1"" class=""col-sm-2 col-form-label"">İşlem</label>
                                <div class=""col-sm-10"">
                                    <button type=""submit"" class=""btn btn-info btn-block"">Kaydet</button>
                                </div>
                            </div>
                        ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.card -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n</section>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<DB.Entities.FormMessages> Html { get; private set; }
    }
}
#pragma warning restore 1591
