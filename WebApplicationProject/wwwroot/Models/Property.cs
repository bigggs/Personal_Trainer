using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationProject.Models
{
    public class Property
    {
        public int ID { get; set; }
        public string HouseNum { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Address3 { get; set; }
        [MaxLength(10)]
        public string PostCode { get; set; }

        [Display(Name = "Property 360 Image")]
        public string MainImagePath { get; set; }

        [NotMappedAttribute]
        public IFormFile MainImage { get; set; }

        public ICollection<Room> Rooms { get; set; }

    }
}
