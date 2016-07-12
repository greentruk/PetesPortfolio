using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PetesPortfolio.Startup))]
namespace PetesPortfolio
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
