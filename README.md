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

  ```
  axios.get('https://abbayreceipts.onrender.com/api/v1/receipt/',{
          params: {
            "branchCode": branchCode,
            "tellerId": tellerId
          }
        })
        .then(res=>{
          
        }).catch(err=>{
          
        })
    };

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

  * **Code:** 201 <br />,
     **Message:** "transaction Receipt succesfully Saved!",
     **url:** "https://ambprintsol.netlify.app/cheque/transactionId"`,
    
 
* **Error Response:**

  * **Code:** 500 <br />,
    **Message:** `{ "error saving Receipt" }`,
    **error**: err

  
**4 Save MC transaction **
----
  save MC transaction to the Database.

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
  
  * **Code:** 201 <br />,
       **Message:** "transaction Receipt succesfully Saved!",
       **url:** "https://ambprintsol.netlify.app/receipt/transactionId"`,
      
   
  * **Error Response:**
  
    * **Code:** 500 <br />,
      **Message:** `{ "error saving Receipt" }`,
      **error**: err

**4 update MC printer Status **
----
  updates the MC status as printed to avooid over printing

* **URL**

  /receipt/

* **Method:**

  `put`
  
*  **URL Params**

   **Required:**
   
    None    

* **Data Params**


  `transactionId=[integer]` [**Required:**]
  
   `status=[string]`  [**Required:**]

  * **Success Response:**
  
  * **Code:** 200 <br />,
       **Message:** "update  succesfully!",
      
   
  * **Error Response:**
  
    * **Code:** 500 <br />,
      **Message:** `Error Updating receipt!`,



