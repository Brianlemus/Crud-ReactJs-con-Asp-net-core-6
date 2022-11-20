using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaCrud.Models;

namespace PruebaCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiculoController : ControllerBase
    {
        private readonly DbcanellaContext _dbcontext;

        public VehiculoController(DbcanellaContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("ListaVehiculos")]
        public async Task<IActionResult> ListaVehiculos()
        {
            List<Vehiculo> ListaVehiculos = await _dbcontext.Vehiculos.OrderByDescending(c => c.IdRegistro).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, ListaVehiculos);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Vehiculo reques)
        {
            await _dbcontext.Vehiculos.AddAsync(reques);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Vehiculo reques)
        {
            _dbcontext.Vehiculos.Update(reques);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar( int id)
        {
            Vehiculo vehiculo = await _dbcontext.Vehiculos.FindAsync(id);

            _dbcontext.Vehiculos.Remove(vehiculo);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

    }
}
