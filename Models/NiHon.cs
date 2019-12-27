using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace learn_jp.Models
{
    public class NiHon
    {
        public int id { get; set; }
        public string kanji { get; set; }
        public string kana { get; set; }
        public string zh_tw { get; set; }   
    }
}