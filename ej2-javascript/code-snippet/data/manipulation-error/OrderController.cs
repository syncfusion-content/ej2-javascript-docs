using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using UrlAdaptor.Models;

namespace UrlAdaptor.Controllers
{
  public class OrderController : ControllerBase
  {
    /// <summary>
    /// Processes the DataManager request to perform searching, filtering, sorting, and paging operations.
    /// </summary>
    /// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
    /// <returns>Returns a JSON object data and the total record count.</returns>
    [HttpPost]
    [Route("api/[controller]")]
    public object Post([FromBody] DataManagerRequest DataManagerRequest)
    {
      // Retrieve data from the data source (e.g., database)
      IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

      // Initialize queryableOperation instance.
      QueryableOperation queryableOperation = new QueryableOperation();

      // Get the total count of records.
      int totalRecordsCount = DataSource.Count();

      // Return data based on the request
      return new { result = DataSource, count = totalRecordsCount };
    }

    /// <summary>
    /// Retrieves all order records from the data source.
    /// </summary>
    /// <returns>A list of <see cref="OrdersDetails"/> objects representing all orders.</returns>
    [HttpGet]
    [Route("api/[controller]")]
    public List<OrdersDetails> GetOrderData()
    {
      var data = OrdersDetails.GetAllRecords().ToList();
      return data;
    }

    /// <summary>
    /// Inserts a new data item into the data collection.
    /// </summary>
    /// <param name="addRecord">The order to be inserted.</param>
    /// <returns>It returns the newly inserted record detail.</returns>
    [HttpPost]
    [Route("api/[controller]/Insert")]
    public IActionResult Insert([FromBody] CRUDModel<OrdersDetails> value)
    {
      if (value.value.OrderID == null && value.value.CustomerID == "" && value.value.EmployeeID ==null)
      {
        return BadRequest(new { message = "All fields are required to insert a new order." });
      }
      var existingOrder = OrdersDetails.order.FirstOrDefault(or => or.OrderID == value.value.OrderID);
      if (existingOrder == null)
      {
        OrdersDetails.order.Insert(0, value.value);
        return Ok(new { success = true });
      }
      else
      {
        return BadRequest(new { success = false, message = "Duplicate values cannot be inserted." });
      }
    }

    /// <summary>
    /// Updates an existing order.
    /// </summary>
    /// <param name="updateRecord">The updated order details.</param>
    /// <returns>It returns the updated order details.</returns>
    [HttpPost]
    [Route("api/[controller]/Update")]
    public IActionResult Update([FromBody] CRUDModel<OrdersDetails> Order)
    {
      var updatedOrder = Order.value;

      if (updatedOrder.OrderID > 10010 || updatedOrder.OrderID < 10030)
      {
        return BadRequest(new { message = "OrderID must be between 10010 and 10030 to update." });
      }

      else if (updatedOrder.OrderID==null)
      {
        return BadRequest(new { message = "'OrderID is required to update" });

      }

      var data = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == updatedOrder.OrderID);
      if (data == null)
      {
        return NotFound(new { message = "Order not found." });
      }

      // Update the existing record.
      data.OrderID = updatedOrder.OrderID;
      data.CustomerID = updatedOrder.CustomerID;
      data.EmployeeID = updatedOrder.EmployeeID;
      // Update other properties similarly.
      return Ok(new { success = true });
    }

    [HttpPost]
    [Route("api/[controller]/Remove")]
    public IActionResult Remove([FromBody] CRUDModel<OrdersDetails> value)
    {
      if (value == null || value.key == null)
      {
        return BadRequest(new { message = "'OrderID' is required to delete." });
      }

      int orderId = Convert.ToInt32(value.key);

      if (orderId < 10031 || orderId > 10045)
      {
        return BadRequest(new { message = "OrderID must be between 10031 and 10045 to delete." });
      }

      var data = OrdersDetails.GetAllRecords().FirstOrDefault(orderData => orderData.OrderID == orderId);
      if (data == null)
      {
        return NotFound(new { message = "Order not found." });
      }

      OrdersDetails.GetAllRecords().Remove(data);
      return Ok(new { success = true });
    }
  }

  public class CRUDModel<T> where T : class
  {
    public string? action { get; set; }
    public string? keyColumn { get; set; }
    public object? key { get; set; }
    public T? value { get; set; }
    public List<T>? added { get; set; }
    public List<T>? changed { get; set; }
    public List<T>? deleted { get; set; }
    public IDictionary<string, object>? @params { get; set; }
  }
}
