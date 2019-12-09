using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using learn_jp.Models;
using System.Text.Json;
using System.IO;

namespace learn_jp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NiHonController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<NiHon> Get()
        {
            string jStr = "";
            using (var ss = new StreamReader("gogo.json"))
            {
                jStr = ss.ReadToEnd();
            }

            return JsonSerializer.Deserialize<NiHon[]>(jStr);
        }
    }
}
