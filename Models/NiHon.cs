using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace learn_jp.Models
{
    public class NiHon
    {
        public string[] head { get; set; }
        public string tail { get; set; }
        public string complete { get; set; }
        public nowtype now { get; set; }
        public string te { get; set; }
        public string zh_tw { get; set; }
        public string type { get; set; }        
    }

    public class nowtype
    {
        public string y { get; set; }
        public string n { get; set; }
        public string ry { get; set; }
        public string rn { get; set; }
    }
}