using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using learn_jp.Models;
using System.Text.Json;

namespace learn_jp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NiHonController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<NiHon> Get()
        {
            string jStr = @"[{""head"":[""見"",""み""],""tail"":""る"",""complete"":""見る"",""now"":{""y"":""見る"",""n"":""見ない"",""ry"":""見ます"",""rn"":""見ません""},""te"":""見て"",""zh_tw"":""看見"",""type"":""II""},{""head"":[""行"",""い""],""tail"":""く"",""complete"":""行く"",""now"":{""y"":""行く"",""n"":""行かない"",""ry"":""行きます"",""rn"":""行きません""},""te"":""行って"",""zh_tw"":""走"",""type"":""I""}]";
            return JsonSerializer.Deserialize<NiHon[]>(jStr).ToArray();
        }
    }
}
