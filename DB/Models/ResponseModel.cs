using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DB.Models
{
    public class ResponseModel
    {
        public string Status { get; set; }
        public string Code { get; set; }
        public string Msg { get; set; }
    }
}
