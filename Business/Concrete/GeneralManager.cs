using Business.Abstract;
using Core.Abstract;
using DB.Entities;
using DB.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class GeneralManager : IGeneralService
    {
        private readonly IRepository<Form> _form;
        public GeneralManager(IRepository<Form> Form)
        {
            _form = Form;
        }


        public List<Form> GetFormByFilter(Expression<Func<Form, bool>> filter)
        {
            return _form.Table.Where(filter).Include(b => b._User).ToList();
        }

        public void AddForm(Form entity)
        {
            _form.Insert(entity);
        }

        public List<Form> GetAllForm()
        {
            return _form.Table.Include(b=>b._User).ToList();
        }

       

        public Form GetFormById(int id)
        {
            return _form.Table.Where(b => b.Id == id).FirstOrDefault();
        }

     
        public void UpdateForm(Form entity)
        {
            _form.Update(entity);
        }


    

    }
}
