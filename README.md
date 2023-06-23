# AbbeyReceipt API Documentation
**1 Show Transaction Details**
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
  
  **2 Show Payment History**
----
  Returns json data about payment history for three(3) days associated  to a branch with respect to the teller that handled the transaction.

* **URL**

  /receipt/allTransation

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
   
    None    

* **Data Params**

  `branchCode=[integer]`
  
  `tellerId=[integer]`

* **Success Response:**

  * **Code:** 200 <br />,
     **Message:** "Receipts succesfully Retrieved!",
     **data:** `[{ id : 12, branchCode : "Aty-100",tellerId:"Aty-139",transactionId:"8989898811"... },
      { id : 12, branchCode : "Aty-100",tellerId:"Aty-139",transactionId:"8989892211"... }]`
    
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Receipts not found" }`

  
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
**3 Save Deposit transaction **
----
  save deposit transaction to the Database.

* **URL**

  /receipt/

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
   
    None    

* **Data Params**

  `branchCode=[String]` [**Required:**]

  `branchName=[String]` [**Required:**]

  `benefactor=[String]` [**Required:**]

  `transactionId=[integer]` [**Required:**]

  `transactionDate=[date]`  [**Required:**]

  `amountInWords=[String]`  [**Required:**]

  `amountInNumbers=[integer]` [**Required:**]
  
  `transactionDescription=[string]` [**Required:**]

  `accountNumber=[string]`  [**Required:**]
 
   `depositorName=[string]`  [**Required:**]
   
   `tellerId=[string]`    [**Required:**]
   
   `Currency=[string]`   [**Required:**]
   
   `status=[string]`
     
   `chequeNumber=[string]`

* **Success Response:**

  * **Code:** 200 <br />,
     **Message:** "Receipts succesfully Retrieved!",
     **data:** `[{ id : 12, branchCode : "Aty-100",tellerId:"Aty-139",transactionId:"8989898811"... },
      { id : 12, branchCode : "Aty-100",tellerId:"Aty-139",transactionId:"8989892211"... }]`
    
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Receipts not found" }`

  
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
**4 Save MC transaction **
----
  save deposit transaction to the Database.

* **URL**

  /receipt/

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
   
    None    

* **Data Params**

  `branchCode=[String]`  [**Required:**]

  `branchName=[String]`   [**Required:**]

  `benefactor=[String]`

  `transactionId=[integer]` [**Required:**]

  `transactionDate=[date]` [**Required:**]

  `amountInWords=[String]`  [**Required:**]

  `amountInNumbers=[integer]`  [**Required:**]
  
  `transactionDescription=[string]`

  `accountNumber=[string]`
 
  `depositorName=[string]`
 
   `tellerId=[string]`   [**Required:**]
   
   `Currency=[string]`  [**Required:**]
  
   `chequeNumber=[string]`  [**Required:**]

* **Success Response:**

  * **Code:** 200 <br />,
     **Message:** "Receipts succesfully Retrieved!",
     **data:** `[{ id : 12, branchCode : "Aty-100",tellerId:"Aty-139",transactionId:"8989898811"... },
      { id : 12, branchCode : "Aty-100",tellerId:"Aty-139",transactionId:"8989892211"... }]`
    
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Receipts not found" }`

  
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
