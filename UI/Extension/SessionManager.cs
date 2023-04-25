using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace System
{
    public static class SessionManager
    {
        public static void SetObject(this ISession session, string key, object value) //anahtar ve değeri gönderilir
        {
            string objectStr = JsonConvert.SerializeObject(value); //obje olarak gelen valueyu stringe çevirir
            session.SetString(key, objectStr);
        }
        public static T GetObject<T>(this ISession session, string key) where T : class //gelen key değerine göre class türünde nesne döndürür, 
        {
            string objectStr = session.GetString(key); 
            return objectStr == null ? default(T) : JsonConvert.DeserializeObject<T>(objectStr);
        }


    }
}
