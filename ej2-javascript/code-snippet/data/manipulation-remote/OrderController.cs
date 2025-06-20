using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using UrlAdaptor.Models;

namespace UrlAdaptor.Controllers
{
  [ApiController]
  public class OrderController : Controller
  {
    /// <summary>
    /// Processes the DataManager request to perform paging operations (skip and take) on the ordersdetails data.
    /// </summary>
    /// <param name="DataManagerRequest">Contains the details of the data operation requested, including paging parameters.</param>
    /// <returns>Returns a JSON object with the paginated data and the total record count.</returns>
    [HttpPost]
    [Route("api/[controller]")]
    public object Post([FromBody] DataManagerRequest DataManagerRequest)
    {
      // Retrieve data from the data source (e.g., database).
      IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

      // Initialize dataOperations instance.
      QueryableOperation queryableOperation = new QueryableOperation();

      // Get the total count of records.
      int totalRecordsCount = DataSource.Count();

      // Handling paging operation.
      if (DataManagerRequest.Skip != 0)
      {
        DataSource = queryableOperation.PerformSkip(DataSource, DataManagerRequest.Skip);
      }
      if (DataManagerRequest.Take != 0)
      {
        DataSource = queryableOperation.PerformTake(DataSource, DataManagerRequest.Take);
      }

      // Return the paginated data and the total record count.
      return new { result = DataSource, count = totalRecordsCount };
    }

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

    /// <summary>
    /// Inserts a new data item into the data collection.
    /// </summary>
    /// <param name="newRecord">It contains the new record detail which is need to be inserted.</param>
    /// <returns>Returns void</returns>
    [HttpPost]
    [Route("api/Grid/Insert")]
    public void Insert([FromBody] CRUdatamangerodel<OrdersDetails> newRecord)
    {
      if (newRecord.value != null)
      {
        OrdersDetails.GetAllRecords().Insert(0, newRecord.value);
      }
    }

    /// <summary>
    /// Update a existing data item from the data collection.
    /// </summary>
    /// <param name="Order">It contains the updated record detail which is need to be updated.</param>
    /// <returns>Returns void.</returns>
    [HttpPost]
    [Route("api/Grid/Update")]
    public void Update([FromBody] CRUdatamangerodel<OrdersDetails> Order)
    {
      var updatedOrder = Order.value;
      if (updatedOrder != null)
      {
        var data = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.OrderID == updatedOrder.OrderID);
        if (data != null)
        {
          // Update the existing record.
          data.OrderID = updatedOrder.OrderID;
          data.CustomerID = updatedOrder.CustomerID;
          data.EmployeeID = updatedOrder.EmployeeID;
          // Update other properties similarly.
        }
      }

    }

    /// <summary>
    /// Remove a specific data item from the data collection.
    /// </summary>
    /// <param name="value">It contains the specific record detail which is need to be removed.</param>
    /// <return>Returns void.</return>
    [HttpPost]
    [Route("api/Grid/Remove")]
    public void Remove([FromBody] CRUdatamangerodel<OrdersDetails> value)
    {
      int orderId = int.Parse((value.key).ToString());
      var data = OrdersDetails.GetAllRecords().FirstOrDefault(orderData => orderData.OrderID == orderId);
      if (data != null)
      {
        // Remove the record from the data collection.
        OrdersDetails.GetAllRecords().Remove(data);
      }
    }

  public class CRUdatamangerodel<T> where T : class
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
}
