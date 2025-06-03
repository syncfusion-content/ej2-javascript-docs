using Microsoft.AspNetCore.Mvc;
using WebApiAdaptor.Models;

namespace WebApiAdaptor.Controllers
{
    [Route("api/[controller]")]

    [ApiController]
    public class OrdersController : ControllerBase
    {
        // GET: api/Orders.
        [HttpGet]
        // Action to retrieve orders.
        public object Get()
        {
            var queryString = Request.Query;
            var data = OrdersDetails.GetAllRecords().ToList();
            int totalRecordsCount = data.Count;

            //Perform paging operation.
            int skip = Convert.ToInt32(queryString["$skip"]);
            int take = Convert.ToInt32(queryString["$top"]);
            if (take != 0)
            {
                data = data.Skip(skip).Take(take).ToList();
            }

            // Return the paginated data and the total record count.
            return new { Items = data, Count = totalRecordsCount };
        }

    }
}