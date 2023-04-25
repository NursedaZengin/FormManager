using Business.Abstract;
using Core.Abstract;
using DB.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class UserManager : IUserService
    {
        private readonly IRepository<User> _user;

        public bool UserControl(string name)
        {
            bool result = false;
            var user = _user.Table.Where(b => b.UserName == name).FirstOrDefault();
            if(user!=null)
            {
                result = true;
            }
            return result;
        }
        public UserManager(IRepository<User> user)
        {
            _user = user;
        }

        public void Add(User user)
        {
            _user.Insert(user);
        }

        public void Delete(User user)
        {
            _user.Delete(user);
        }

        public List<User> GetAll(int desc = 0, int status = 1)
        {
            if (desc == 1)
            {
                return _user.Table.Where(b => b.Status == status).OrderByDescending(b => b.Id).ToList();
            }
            else
            {
                return _user.Table.Where(b => b.Status == status).ToList();
            }

        }

        public List<User> GetAllUser(int desc = 0)
        {
            if (desc == 1)
            {
                return _user.Table.OrderByDescending(b => b.Id).ToList();
            }
            else
            {
                return _user.Table.ToList();
            }

        }

        public User GetById(int id)
        {
            return _user.Table.Where(b => b.Id == id).FirstOrDefault();
        }

        public User GetByUsernamePassword(string username, string password)
        {
            return _user.Table.Where(b => b.UserName == username && b.Password == password && b.Status==1).FirstOrDefault();
        }

        public void Update(User user)
        {
            _user.Update(user);
        }

     
    }
}
