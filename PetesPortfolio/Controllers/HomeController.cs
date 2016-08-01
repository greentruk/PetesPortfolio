using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;



namespace PetesPortfolio.Controllers
{
    [RequireHttps]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult team()
        {
            return View();
        }
        public ActionResult Portfolio()
        {
            return View();
        }
        public ActionResult about()
        {
            return View();
        }

        public ActionResult resume()
        {

            return View();
        }

        public ActionResult Contact()
        {

            return View();
        }
    }
}