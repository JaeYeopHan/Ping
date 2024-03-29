﻿using System;
using System.Collections.Generic;
using LiteDB;
using Ping_Backend.Models;

namespace Ping_Backend.Services
{
    public static class DatabaseService
    {
        static LiteDatabase DB;

        static DatabaseService()
        {
            DB = new LiteDatabase("Filename=ping.db;Mode=Exclusive");
            Init();
        }

        public static void Init()
        {
            var pings = DB.GetCollection<Ping>("pings");
            var count = pings.Count(Query.All());
            if (count == 0)
            {
                // Create your new ping instance
                var demoData = DemoService.GetBaltimoreDemo();
                pings.InsertBulk(demoData);
            }
        }

        public static IEnumerable<Ping> GetAllPings()
        {

            // Get ping collection
            var pings = DB.GetCollection<Ping>("pings");
            return pings.FindAll();
        }

        public static void AddPing(Ping ping)
        {
            var pings = DB.GetCollection<Ping>("pings");
            pings.Insert(ping);
        }

        public static void UpdatePing(Ping ping)
        {
            var pings = DB.GetCollection<Ping>("pings");
            pings.Update(ping);
        }

        public static void DeletePing(string id)
        {
            var pings = DB.GetCollection<Ping>("pings");
            pings.Delete(id);
        }

        public static Ping GetPingById(string id)
        {
            // Get customer collection
            var pings = DB.GetCollection<Ping>("pings");
            var count = pings.Count(Query.All());
            if (count == 0)
            {
                // Create your new customer instance
                var demoData = DemoService.GetBaltimoreDemo();
                pings.InsertBulk(demoData);
            }
            return pings.FindById(id);

        }
    }
}
