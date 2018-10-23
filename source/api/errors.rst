
REST API errors
=====================

Source: https://developer.paypal.com/docs/api/identity/

PayPal returns standard HTTP status codes for successful and error responses.

.. contents::
   :local:
   :depth: 2

HTTP status codes
####

==================  =============================  ============================
Status code         Description 	                  More information
==================  =============================  ============================    
200 	              Request OK 	
201 	              Resource created 	
400 	              Validation error 	              Validation errors
401 	              Unauthorized request 	          Authentication errors
402 	              Failed request 	
403 	              Forbidden 	
404 	              Resource was not found 	
500 	              Server error
==================  =============================  ============================

==================================  ===========================================
Status code                         Description (Reason)
==================================  ===========================================
200 OK 	                            Everything went well.
201 CREATED 	                      A new resource has been created.
204 NO CONTENT 	                    A new resource has been deleted.
400 BAD REQUEST 	                  The provided information is invalid, the request failed.
404 NOT FOUND 	                    The resource has not been found.
500, 502, 503, 504 Server errors 	  Something went wrong on our side. 
==================================  ===========================================

Error responses
#### 

The response body for all errors except Identity errors includes additional error details in this format:
::

    {  
        "name": "ERROR_NAME",
        "message": "ERROR_DESCRIPTION",
        "information_link": "ERROR_DOCUMENTATION_LINK",
        "details": "ERROR_DETAILS"
    }

The response body for Identity errors includes additional error details in this format:
::

    {  
        "error": "ERROR_NAME",
        "error_description": "ERROR_DESCRIPTION"
    }

Validation errors
####

HTTP 400 status code
***

To prevent validation errors, ensure that parameters are of the right type and conform to these constraints:

Parameter type 	Description
Character 	Names, addresses, phone numbers, and so on have maximum character limits.
Numeric 	Credit cards, amounts, card verification value (CVV), and so on must use non-negative numeric values and have required formats. For example, a CVV must be three or four numbers while a credit card number must contain only numbers.
Required 	Must be included in the request. For example, when you provide credit card information, you must include a postal code for most countries.
Monetary 	Must use the right currency.

For information about parameter types and constraints, see the REST API reference.
Authentication errors

For more information about authentication, see Make your first call.

HTTP 401 status code
####

Access token-related issues often cause authentication errors.

Ensure that the access token is valid and present and not expired.

Error messages
####

In addition to common REST API errors, the Identity API can return the following errors. Corrective action is provided where possible.

* **INVALID_CLIENT**
  Invalid client credentials Invalid credentials provided in authentication header. Set the correct Base64-encoded clientID:clientsecret in the authentication header.

* **INVALID_REQUEST**
  Invalid request Incorrect parameter provided. Check for typos and send the correct input parameter.

* **INVALID_REQUEST**
  Invalid access token Incorrect access token provided as bearer token. Send a valid access token as bearer token.

* **INTERNAL_SERVER_ERROR**
  Internal server error An internal server error has occurred. Check for error messages in the response.

    
.. toctree::
   :maxdepth: 2
   
 