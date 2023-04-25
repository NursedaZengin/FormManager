using Business.Abstract;
using Core.Extensions;
using DB.Entities;
using DB.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using UI.Models;

namespace UI.Controllers
{
    [ServiceFilter(typeof(LoginFilter))]
    public class HomeController : Controller
    {
        private IGeneralService _GeneralService;
        private IUserService _UserService;

        public HomeController( IGeneralService GeneralService,
            IUserService UserService)
        {
            _GeneralService = GeneralService;
            _UserService = UserService;
        }

        public IActionResult Index()
        {
            FormDto model = new FormDto();
            model.FormList = _GeneralService.GetAllForm();
            model.UserList = _UserService.GetAllUser();
            return View(model);
        }

        [Route("forms/add/save")]
        public IActionResult FormAddSave(Form Form)
        {
            var Session = HttpContext.Session.GetObject<User>("User");
            if (Session == null)
            {
                return RedirectToAction("", "Login");
            }
            Form model = new Form();
            model.Name = Form.Name;
            model.Description = Form.Description;
            model.CreatedBy = Session.Id;
            model.Fields = Form.Fields;
            //model.Status = 1;
            model.CreatedAt = DateConverter.getUnix(DateTime.Now);
            _GeneralService.AddForm(model);
            return Json(new ResponseModel() { Code = "200", Msg = "Form eklendi." });
        }

        [Route("forms/{id:int}")]
        public IActionResult FormShow(int id)
        {
            FormDto model = new FormDto();
            model.Form = _GeneralService.GetFormByFilter(b => b.Id == id).FirstOrDefault();
            if (model.Form == null)
            {
                return Json(new ResponseModel() { Code = "400", Msg = "Form bulunamadı." });
            }
            var Session = HttpContext.Session.GetObject<User>("User");
            if (Session == null)
            {
                return RedirectToAction("", "Login");
            }
            model.User = _UserService.GetById(Session.Id);
            model.FormFieldList = JsonConvert.DeserializeObject<List<FormFields>>(model.Form.Fields);
            return View(model);
        }
        //end form 

        // user manager
        [Route("user-manager")]
        public IActionResult UserManager()
        {
            return View(_UserService.GetAllUser());
        }

        [Route("user-manager/add")]
        public IActionResult UserAdd()
        {
            User model = new User();
            return View(model);
        }

        [Route("user-manager/add/save")]
        public IActionResult UserAddSave(User user)
        {
            User model = new User();
            var control=_UserService.UserControl(user.UserName);
            if(control==true)
            {
                return Json(new ResponseModel() { Code = "400", Msg = "Bu kullanıcı adına ait bir hesap zaten var!" });
            }
            model.UserName = user.UserName;
            model.FullName = user.FullName;
            model.Password = CryptoManager.getMD5(user.Password);
            model.Status = 1;
            _UserService.Add(model);
            return Json(new ResponseModel() { Code = "200", Msg = "Kullanıcı eklendi." });
        }

        [Route("user-manager/edit")]
        public IActionResult UserEdit(int id)
        {
            User model = _UserService.GetById(id);
            if (model == null)
            {
                return Json(new ResponseModel() { Code = "400", Msg = "Kullanıcı bulunamadı." });
            }
            return View(model);
        }

        [Route("user-manager/update/save")]
        public IActionResult UserEditSave(User user)
        {
            User model = _UserService.GetById(user.Id);
            if (model == null)
            {
                return Json(new ResponseModel() { Code = "400", Msg = "Kullanıcı bulunamadı." });
            }
            model.UserName = user.UserName;
            model.FullName = user.FullName;
            model.Status = user.Status;
            if (!String.IsNullOrEmpty(user.Password))
            { model.Password = CryptoManager.getMD5(user.Password); }
            _UserService.Update(model);
            return Json(new ResponseModel() { Code = "200", Msg = "Kullanıcı güncellendi." });
        }

        [Route("user-manager/delete")]
        public IActionResult UserDelete(int id)
        {
            User model = _UserService.GetById(id);
            if (model == null)
            {
                return Json(new ResponseModel() { Code = "400", Msg = "Kullanıcı bulunamadı." });
            }
            _UserService.Delete(model);
            return Json(new ResponseModel() { Code = "200", Msg = "Kullanıcı silindi." });
        }
        //end user manager



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
