using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Abstract;
using DB.Entities;
using DB.Models;
using Microsoft.AspNetCore.Mvc;


namespace UI.Controllers
{
    public class LoginController : Controller
    {
        private IUserService _UserService; 
        public LoginController(IUserService UserService) 
        {
            _UserService = UserService;
        }
        public IActionResult Index()
        {
            var Session = HttpContext.Session.GetObject<User>("User");
            if (Session != null)
            {
                return RedirectToAction("", "Home");
            }
            
       
            return View();
        }

        public IActionResult Check(string Username, string Password)
        {
            if (!string.IsNullOrEmpty(Username) && !string.IsNullOrEmpty(Password))
            {
                var dbUser = _UserService.GetByUsernamePassword(Username, Core.Extensions.CryptoManager.getMD5(Password));
                if (dbUser != null)
                {
                    HttpContext.Session.SetObject("User", dbUser);
                    return Json(new ResponseModel() { Code = "200", Msg = "Giriş başarılı." });
                }
                else
                {
                    return Json(new ResponseModel() { Code = "400", Msg = "Eposta veya Şifre Hatalı!" });
                }
            }
            else
            {
                if (string.IsNullOrEmpty(Username))
                {
                    return Json(new ResponseModel() { Code = "400", Msg = "Eposta boş geçilemez!" });
                }
                else { return Json(new ResponseModel() { Code = "400", Msg = "Şifre boş geçilemez!" }); }
            }
        }
        public IActionResult Exit()
        {
            HttpContext.Session.SetObject("User", null); 
            return RedirectToAction("", "Login");
        }
    }
}
