REST API reference
==================

More information coming soon!

.. contents::
   :local:
   :depth: 2

.. toctree::
    :titlesonly:
    :maxdepth: 2

.. tabs::

   .. code-tab:: php

      <?php 

      echo "Hello World"      

   .. tab:: curl

        :: 

          GET /Plone/front-page HTTP/1.1
          Host: localhost:8080
          Accept: application/json
          Authorization: Basic YWRtaW46YWRtaW4=


          HTTP/1.1 200 OK
          Content-Type: application/json

          {
            "@id": "http://localhost:8080/Plone/front-page",
            "@type": "Document",
            "UID": "1f699ffa110e45afb1ba502f75f7ec33",
            "allow_discussion": null,
            "changeNote": "",
            "contributors": [],
            "created": "2016-01-21T01:14:48+00:00",
            "creators": [
              "test_user_1_",
              "admin"
            ],
            "description": "Congratulations! You have successfully installed Plone.",
            "effective": null,
            "exclude_from_nav": false,
            "expires": null,
            "id": "front-page",
            "language": "",
            "modified": "2016-01-21T01:24:11+00:00",
            "parent": {
              "@id": "http://localhost:8080/Plone",
              "@type": "Plone Site",
              "description": "",
              "title": "Plone site"
            },
            "relatedItems": [],
            "review_state": "private",
            "rights": "",
            "subjects": [],
            "table_of_contents": null,
            "text": {
              "content-type": "text/plain",
              "data": "If you're seeing this instead of the web site you were expecting, the owner of this web site has just installed Plone. Do not contact the Plone Team or the Plone mailing lists about this.",
              "encoding": "utf-8"
            },
            "title": "Welcome to Plone"
          }

   .. tab:: Oranges

      Oranges are orange.


.. toctree::
    :titlesonly:
    :maxdepth: 2
