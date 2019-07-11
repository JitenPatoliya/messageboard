using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MessageBoardBackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoardBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApiContext context;

        public UsersController(ApiContext context)
        {
            this.context = context;
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var user = context.Users.SingleOrDefault(x => x.Id == id);

            if (user == null)
                return NotFound("User not found");

            return Ok(user);
        }

        [Authorize]
        [HttpGet("me")]
        public IActionResult Get()
        {
            var user = GetSecureUser();
            return Ok(user);
        }

        [Authorize]
        [HttpPost("me")]
        public IActionResult Post([FromBody] EditProfile profileData)
        {
            var user = GetSecureUser();

            user.FirstName = profileData.FirstName ?? user.FirstName;
            user.LastName= profileData.LastName?? user.LastName;
            context.SaveChanges();

            return Ok(user);
        }

        public User GetSecureUser()
        {
            string id = HttpContext.User.Claims.First().Value;
            var user = context.Users.SingleOrDefault(x => x.Id == id);
            return user;
        }
    }
}