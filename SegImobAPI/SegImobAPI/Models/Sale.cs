using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SegImobAPI.Models
{
    public class Sale
    {
        public int Id { get; set; }

        [Required]
        public int ProductId { get; set; }

        public Product Product { get; set; }

        [Required]
        public int SellerId { get; set; }

        public Seller Seller { get; set; }

        [Required]
        public double Commission { get; set; }
    }
}