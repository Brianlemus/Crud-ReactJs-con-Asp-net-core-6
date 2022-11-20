using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PruebaCrud.Models;

public partial class DbcanellaContext : DbContext
{
    public DbcanellaContext()
    {
    }

    public DbcanellaContext(DbContextOptions<DbcanellaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Vehiculo> Vehiculos { get; set; }

//    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//        => optionsBuilder.UseSqlServer("Server=VGTM-001TI002\\SQLSERVERLOCAL;Database=DBCANELLA;Trusted_Connection=SSPI;Encrypt=false;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Vehiculo>(entity =>
        {
            entity.HasKey(e => e.IdRegistro).HasName("PK__Vehiculo__62FC8F58A7B4AACE");

            entity.ToTable("Vehiculo");

            entity.Property(e => e.IdRegistro).HasColumnName("idRegistro");
            entity.Property(e => e.Color)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("color");
            entity.Property(e => e.Linea)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("linea");
            entity.Property(e => e.Marca)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("marca");
            entity.Property(e => e.Modelo)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("modelo");
            entity.Property(e => e.NoPlaca)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("noPlaca");
            entity.Property(e => e.Tipo)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("tipo");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
