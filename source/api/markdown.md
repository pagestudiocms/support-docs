
REST API markdown
=====================

## GET 

### Get Entries

Returns a list of all current entries ordered by title ASC
```
GET \rest\v1\entries
```

```
  {
    {
      id: 12,
      title: 'Welcome to my website',
    }
  }
```

### Get Entry

Show detail information on a particular entry 
```
\rest\v1\entries\:id
```

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
id | Yes | int | 1 | The entity ID of the record in the `entries` table

**RST Table**

```eval_rst
.. tabs::

   .. code-tab:: php

      <?php 

      echo "Hello World"      

   .. tab:: response

      Oranges are orange.
```

``` important:: Its a note! in markdown!
```

### Get Entry Categories 

Show the categories a particual entry is tied to 
```
\rest\v1\entries\:id\categories
```

Key	| Required | Type	| Example	| Description
--- | --- | --- | --- | ---
id         | Yes | int | 1 | The entity ID of the record in the `entries` table
categories | Yes | string | | Implies that you want to look up categories for the specified entry 
