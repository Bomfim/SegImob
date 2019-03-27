namespace SegImobAPI.Migrations
{
    using SegImobAPI.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<SegImobAPI.Models.SegImobAPIContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(SegImobAPI.Models.SegImobAPIContext context)
        {

            context.Products.AddOrUpdate(x => x.Id,
                new Product() { Id = 1, Name = "TV", Price = 1400 },
                new Product() { Id = 2, Name = "Máquina de lavar", Price = 800 },
                new Product() { Id = 3, Name = "Microondas", Price = 300 });

            context.Sellers.AddOrUpdate(x => x.Id,
                new Seller() { Id = 1, Name = "Gil" },
                new Seller() { Id = 2, Name = "João das Neves" });

            context.Sales.AddOrUpdate(x => x.Id,
                new Sale() { Id = 1, ProductId = 1, SellerId = 1, Commission = 70 },
                new Sale() { Id = 2, ProductId = 1, SellerId = 2, Commission = 70 });
        }
    }
}
