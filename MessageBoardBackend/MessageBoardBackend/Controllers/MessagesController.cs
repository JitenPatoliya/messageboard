using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MessageBoardBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoardBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly ApiContext context;

        public MessagesController(ApiContext context)
        {
            this.context = context;
        }

        public IEnumerable<Message> Get()
        {
            return context.Messages;
        }

        [HttpGet("{name}")]
        public IEnumerable<Message> Get(string name)
        {
            return context.Messages.Where(x => x.Owner == name);
        }

        [HttpPost]
        public Message Post([FromBody] Message message)
        {
            var dbMessge = context.Messages.Add(message).Entity;
            context.SaveChanges();
            return dbMessge;
        }

    }
}