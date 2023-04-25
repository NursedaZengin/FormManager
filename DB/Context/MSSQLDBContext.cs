using DB.Entities;
using Microsoft.EntityFrameworkCore;


namespace DB.Context
{
    public partial class MSSQLDBContext : DbContext
    {
        public MSSQLDBContext()
        {
        }

        public MSSQLDBContext(DbContextOptions<MSSQLDBContext> options)
             : base(options)
        {
        }


      
        public virtual DbSet<User> tb_User { get; set; }
        public virtual DbSet<Form> tb_Form { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

