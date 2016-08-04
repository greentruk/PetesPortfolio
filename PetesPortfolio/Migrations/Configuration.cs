namespace PetesPortfolio.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<PetesPortfolio.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }
        protected override void Seed(ApplicationDbContext context)
        {
            var roleManager = new RoleManager<IdentityRole>(
            new RoleStore<IdentityRole>(context));
            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                roleManager.Create(new IdentityRole { Name = "Admin" });
            }
            if (!context.Roles.Any(r => r.Name == "Moderator"))
            {
                roleManager.Create(new IdentityRole { Name = "Moderator" });
            }
            var userManager = new UserManager<ApplicationUser>(
           new UserStore<ApplicationUser>(context));
            if (!context.Users.Any(u => u.Email == "pete@peteharvey.com"))
            {
                userManager.Create(new ApplicationUser
                {
                    UserName = "pete@peteharvey.com",
                    Email = "pete@peteharvey.com",
                    FirstName = "Pete",
                    LastName = "Harvey",
                    DisplayName = "Pete Harvey"
                }, "Coder@207");
            }
            if (!context.Users.Any(u => u.Email == "moderator@coderfoundry.com"))
            {
                userManager.Create(new ApplicationUser
                {
                    UserName = "moderator@coderfoundry.com",
                    Email = "moderator@coderfoundry.com",
                    FirstName = "Jason",
                    LastName = "Twichell",
                    DisplayName = "J.Twich"
                }, "Abc&123!");
            }
            var userId = userManager.FindByEmail("pete@peteharvey.com").Id;
            userManager.AddToRole(userId, "Admin");

            var user_Id = userManager.FindByEmail("moderator@coderfoundry.com").Id;
            userManager.AddToRole(user_Id, "Moderator");
        }

    }
}