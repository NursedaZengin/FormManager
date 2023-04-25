using DB.Entities;
using DB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IGeneralService
    {
        void AddForm(Form entity);
        void UpdateForm(Form entity);
        Form GetFormById(int id);
        List<Form> GetAllForm();
        List<Form> GetFormByFilter(Expression<Func<Form, bool>> filter);
      

    }
}
