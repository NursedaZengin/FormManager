using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace System
{
    public static class SeoUrl
    {
        public static string Generate(string pTitle = "")
        {
            if (pTitle != "")
            {
                pTitle = pTitle.ToLower();
            }
            pTitle = pTitle.Replace(" ", "-");
            pTitle = pTitle.Replace(".", "-");

            pTitle = pTitle.Replace("ı", "i");
            pTitle = pTitle.Replace("ü", "u");
            pTitle = pTitle.Replace("ö", "o");
            pTitle = pTitle.Replace("ş", "s");
            pTitle = pTitle.Replace("ğ", "g");

            pTitle = pTitle.Replace("İ", "I");
            pTitle = pTitle.Replace("Ü", "U");
            pTitle = pTitle.Replace("Ö", "O");
            pTitle = pTitle.Replace("Ş", "S");
            pTitle = pTitle.Replace("Ğ", "g");

            pTitle = String.Join("", pTitle.Normalize(NormalizationForm.FormD) // türkçe karakterleri ingilizceye çevir.
                    .Where(c => char.GetUnicodeCategory(c) != UnicodeCategory.NonSpacingMark));


            pTitle = HttpUtility.UrlEncode(pTitle);
            return System.Text.RegularExpressions.Regex.Replace(pTitle, @"\%[0-9A-Fa-f]{2}", "");
        }
    }
}
