using System;
using System.Collections.Generic;

namespace PruebaCrud.Models;

public partial class Vehiculo
{
    public int IdRegistro { get; set; }

    public string? NoPlaca { get; set; }

    public string? Marca { get; set; }

    public string? Linea { get; set; }

    public string? Modelo { get; set; }

    public string? Tipo { get; set; }

    public string? Color { get; set; }
}
