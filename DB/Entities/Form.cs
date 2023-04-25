using DB.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB.Entities
{
    public class Form:BaseClass
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Fields { get; set; }
        public int CreatedBy { get; set; }

        [ForeignKey("CreatedBy")]
        public virtual User _User { get; set; }
    }
}
