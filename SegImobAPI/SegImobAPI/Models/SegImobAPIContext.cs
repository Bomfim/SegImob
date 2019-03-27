using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SegImobAPI.Models
{
    public class SegImobAPIContext : DbContext
    {

        public SegImobAPIContext() : base("name=SegImobAPIContext")
        {
            Database.Log = s => System.Diagnostics.Debug.WriteLine(s);
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Seller> Sellers { get; set; }

        public DbSet<Sale> Sales { get; set; }
    }
}
