using DB.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IUserService
    {
        void Add(User user);
        void Update(User user);
        void Delete(User user);
        User GetById(int id);
        List<User> GetAll(int desc = 0, int status = 1);
        List<User> GetAllUser(int desc = 0);
        User GetByUsernamePassword(string username, string md5password);

        bool UserControl(string name);

    }
}
