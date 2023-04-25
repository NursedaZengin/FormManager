using Business.Abstract;
using DB.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace UI
{
    public class LoginFilter : IActionFilter
    {


        public void OnActionExecuted(ActionExecutedContext context)
        {
            
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            var Session = context.HttpContext.Session.GetObject<User>("User");
            if (Session == null)
            {
                context.Result = new RedirectToRouteResult(
                new RouteValueDictionary { { "controller", "Login" }, { "action", "" } });
            }
      
        }
    }
}
