using Microsoft.AspNetCore.Mvc;
using RemoteSaveAdaptor.Models;

namespace RemoteSaveAdaptor.Controllers
{
    [ApiController]
    public class OrdersController : Controller
    {
        /// <summary>
        /// Retrieves all order data records from the data source.
        /// </summary>
        /// <returns>Returns a list of all order records.</returns>
        [HttpGet]
        [Route("api/[controller]")]
        public List<OrdersDetails> GetOrderData()
        {
            var data = OrdersDetails.GetAllRecords().ToList();
            return data;
        }
    }
}