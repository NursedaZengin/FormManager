using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB.Models
{
   public class BaseClass
    {
        [Key]
        public int Id { get; set; }
        //public int Status { get; set; }
        public long CreatedAt { get; set; }
       // public long UpdatedAt { get; set; }
       // public long DeletedAt { get; set; }
    }
}
