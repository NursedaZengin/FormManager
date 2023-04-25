using System;
using System.Collections.Generic;
using System.Text;

namespace System
{
    public static class DateConverter
    {
        public enum DateType
        {
            StartOfWeek = 0,
            EndOfWeek = 6
        }
        public static DateTime getDatetime(Int64 unix)
        {
            DateTime dtDateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0);
            dtDateTime = dtDateTime.AddSeconds(unix);
            return dtDateTime;

        }
        public static Int64 getUnix(DateTime datetime)
        {
            int dateInt = Convert.ToInt32((datetime.Subtract(new DateTime(1970, 1, 1))).TotalSeconds);
            return dateInt;
        }
      

    }
}
