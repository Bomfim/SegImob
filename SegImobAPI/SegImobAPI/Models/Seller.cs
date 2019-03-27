using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SegImobAPI.Models
{
    public class Seller
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

    }
}