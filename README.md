# AbbeyReceipt API Documentation
**Show Transaction**
----
  Returns json data about a single transaction.

* **URL**

  /receipt/:transactionId

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `transactions=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **data:** `{ id : 12, branchCode : "Aty-100"... }`
    
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "No receipt found" }`

  
* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
  **Show Payment History**
----
  Returns json data about payment history for three(3) days associated  to a branch with respect to the teller that handled the transaction.

* **URL**

  /receipt/allTransation

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
  `None`    

* **Data Params**

  `branchCode=[integer]`
  `tellerId=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **data:** `{ id : 12, branchCode : "Aty-100"... }`
    
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "No receipt found" }`

  
* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
