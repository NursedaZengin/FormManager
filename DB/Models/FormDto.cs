using DB.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DB.Models
{
    public class FormDto
    {
        public Form Form { get; set; }
        public User User { get; set; }
        public List<FormFields> FormFieldList { get; set; }
        public List<Form> FormList { get; set; }
        public List<User> UserList { get; set; }
    }
}
