using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;

namespace WebApplicationProject.Pages
{
    public class HomeModel : PageModel
    {
        public string Message { get; set; }

        public void OnGet()
        {
            Message = "List of Exercises";
        }
    }
}