using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using MessageBoardBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace MessageBoardBackend.Controllers
{
    public class JwtPacket
    {
        public string Token { get; set; }
        public string FirstName { get; set; }
    }

    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApiContext context;

        public AuthController(ApiContext context)
        {
            this.context = context;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginData loginData)
        {
            var user = context.Users.SingleOrDefault(x => x.Email == loginData.Email && x.Password == loginData.Password);

            if (user == null)
                return NotFound("Email or Password incorrect");

            return Ok(CreateJwtPacket(user));
        }

        [HttpPost("register")]
        public JwtPacket Register([FromBody] User user)
        { 
            context.Users.Add(user);
            context.SaveChanges();

            return CreateJwtPacket(user);
        }

        JwtPacket CreateJwtPacket(User user)
        {
            var sigingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is the secret phrase"));
            var signingCred = new SigningCredentials(sigingKey, SecurityAlgorithms.HmacSha256);

            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id)
            };

            var jwt = new JwtSecurityToken(claims: claims, signingCredentials: signingCred);
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return new JwtPacket() { Token = encodedJwt, FirstName = user.FirstName };
        }
    }
}