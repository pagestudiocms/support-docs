
Tags
=====================

PageStudio uses the PyroCMS version 2.2 Lex Parser. Tags allow you to tap into more advanced functionality using simple syntax right inside your layouts, page layouts, and even pages themselves. Tags can allow you to do some really powerful things without crowding your layouts with messy PHP code.

.. note:: The following was pulled directly from the PyroCMS documentation website.

The following guide will teach you the basics of tags and how to use them in your layouts.

.. contents::
   :local:
   :depth: 1

Basic Tags
######

At their very basic form, tags are simply a variable:

:: 
  
    {{ my_var }}

When you put that in your markup, it will be replaced by some value. Pretty simple!

.. note:: The white-space inside the curly braces is optional, but does help with aesthetics and readability.

Now let's take the example of a common concept in PageStudioCMS: a tag with two words separated by a colon:

::

    {{ settings:site_name }}

This tag has some basic parts: two curly braces on either site, and two text strings separated by a colon. This format tells PageStudioCMS that we want to access a plugin's function or plugin's variable. The first string, **settings** in this case, tells the tag what plugin to reference, and then the second string, **site_name** in this case, tells the tag what function or variable to call.

So if we put the above tag in our layout, and our site_name variable was set to "Bill's Bagels", then it would return:

:: 
  
 Bill's Bagels

Comments
######

If you'd like to comment out a section of code or content, you can wrap them inside ``{{# and #}}``. Ex: ``{{# This is a comment #}}``. This has the advantage over conventional HTML comment tags that it won't be visible to users viewing your website's source code.

Tag Attributes
######

What makes tags really powerful is they can take attributes that give you the freedom to modify the tag output based on input data. Here is an example:

::

    {{ url:segments segment="1" }}

In the above example, we are calling the url plugin which has a **segments** function. This is all well and good, but we can also pass the tag parameters in order to modify the output. In this case, we are telling the tag to get the first segment. So if your URL was *http://www.example.com/bills/bagels*, this tag would return:

::

    bills

You can have multiple parameters as well. So, for example, the ``segments`` function allows you to specify a default value via a second parameter:

:: 

    {{ url:segments segment="1" default="home" }}

If the first segment is empty, the tag will return "home".

.. note:: Some parameters are required and some are optional. Make sure to check the plugins section to make sure you are passing all of the right parameters, and if there are any optional ones that will give you added functionality you need.

Using Tags and Variables In Tag Parameters
******

Inside quotes, PageStudioCMS cannot parse curly braces. So, for instance, if you wanted to pass the value of the slug from the page plugin, this **will not work**:

::

    {{ url:segments segment="1" default="{{ page:slug }}" }}

However, you can pass a plugin function's output value or variable by eliminating the curly braces. So, **this will work**:

::

    {{ url:segments segment="1" default=page:slug }}

You can also use tag parameters in functions that are being used as a tag parameter by using a single curly brace with no spaces, and no quotes:

::

    {{ url:segments segment="1" default={foo:bar value="baz"} }}

Although this is an easy solution for single functions and variables, for more complex logic within tag paramters, you can use square braces instead of curly braces, like this:

:: 

    {{ url:segments segment="1" default="[[ page:slug ]]" }}

PageStudioCMS parses each parameter separately for square brackets, so you can even do logic within your paramters:

::

    {{ url:segments segment="1" default="[[ if global:environment == 'development' ]]dev_home[[ else ]]home[[ endif ]]" }}

Tag Pairs
######

Another powerful feature of PageStudioCMS tags is the ability to use data between tags. Take this example of a blog posts tag:

.. code-block:: html

    {{ blog:posts limit="2" order-by="title" order-dir="desc" }}
        <h2>{{ title }}</h2>
    {{ /blog:posts }}

As you'll notice, we have an opening and closing tag here. In this case, the blog **posts** function will repeat and parse the content between our tag pair for each blog post that matches the criteria we set up with our tag parameters. So for this tag, we might get this output:

.. code-block:: html

    <h2>Blog Post One</h2>
    <h2>Blog Post Two</h2>

Tag pairs don't necessarily loop through content, however. For example, we can simply use the content between the tags like we would a parameter, like in the format plugin:

.. code-block:: php

    {{ format:markdown }}Let's _convert_ this to **HTML**.{{ /format:markdown }}

Single Variable Loops
******

Occasionally, single tags can act as arrays of data that you can loop through. You can do so using a similar tag pair syntax:

.. code-block:: html

    {{ images }}
        <img src="{{ url }}" />
    {{ /images }}

Tag Conditionals
######

Many times in your layouts you will want to show something under certain conditions. For instance, if a user is logged in or if a url segment has a certain value. PageStudioCMS tags allow you to do that with an if/else tag syntax.

.. note:: Undefined variables in Conditionals are evaluated to be null. This allows you to do things like ``{{ if foo }}`` to check if a variable exists.

Basic Conditionals
******

Here is a simple example of a conditional tag statement:

.. code-block:: html

    {{ if user:logged_in }}
         <p>You are logged in.</p>
    {{ endif }}

This general structure will look very familiar if you are acquainted with conditionals in languages like PHP. The first tag checks if the value of ``user:logged_in`` is true, and returns what is between that tag and the ``endif`` tag.

As of version 1.2.0 you can now perform conditional statements on ``image_field`` types. 

**Example**

.. code-block:: php 
    
    {{ if thumbnail }} {{ thumbnail }} {{ endif }}
    
**Output:**

.. code-block:: html

    <img src="path/to/your/image/image_name.jpg" />

Conditional Operators
******

You can use operators to compare values in an if statement. These used to compare two values. Here's an example:

.. code-block:: html

    {{ if {url:segments segment="2"} == 'categories' }}
        <p>Looks like you are in the categories section.</p>
    {{ endif }}

.. note:: PageStudioCMS function tags can be used in conditionals, but must be wrapped in single curly braces if they have one or more parameter, as in the above example.

.. note:: When using function tags wrapped in curly braces in conditionals, the space after the opening curly brace and before the closing curly brace must be omitted. The tag will not render properly otherwise. Ex: ``{url:segments segment="2"}``.

Here are the available conditional operators:


+---------------+--------------------------------------------------------------------------+
| Operator      | Notes                                                                    |
+===============+==========================================================================+
| ==            |  Equals. Values equal each other.                                        |
+---------------+--------------------------------------------------------------------------+
| !=            | Does not equal. Values do not equal each other.                          |
+---------------+--------------------------------------------------------------------------+
| ===           | Let's you define the sort order of the result set. Options are asc,      |
|               | or desc, default is asc.                                                 |
+---------------+--------------------------------------------------------------------------+
| !==           | Sets the limit of the number of events to be displayed.                  |
+---------------+--------------------------------------------------------------------------+
| >             | Greater than                                                             |
+---------------+--------------------------------------------------------------------------+
| <             | Less than                                                                | 
+---------------+--------------------------------------------------------------------------+
| >=            | Greater than or equal to                                                 |
+---------------+--------------------------------------------------------------------------+
| <=            | Less than or equal to                                                    |
+---------------+--------------------------------------------------------------------------+

You can also use the **!** or the **not** logical operator:

.. code-block:: html

    {{ if !user:logged_in }}
        <p>You are not logged in.</p>
    {{ endif }}

    {{ if not user:logged_in }}
        <p>You are not logged in.</p>
    {{ endif }}

.. note:: **!** and **not** are interchangeable. The only requirement is that not must have a space on both sides.

Checking if a Variable Exists
******

To check if a variable exists in a conditional, you use the exists keyword.

Examples
******

.. code-block:: html

    {{ if exists foo }}
        Foo Exists
    {{ elseif not exists foo }}
        Foo Does Not Exist
    {{ endif }}

You can also combine it with other conditions:

.. code-block:: html

    {{ if exists foo and foo !== 'bar' }}
        Something here
    {{ endif }}

The expression ``exists foo`` evaluates to either ``true`` or ``false``. Therefore something like this works as well:

.. code-block:: html

    {{ if exists foo == false }}
    {{ endif }}

Multiple Conditionals
******

You can have multiple conditionals for some more advanced conditional statements:

.. code-block:: html

    {{ if variables:custom_var == 'foo' }}
        <p>Looks like a foo.</p>
    {{ elseif variables:custom_var == 'bar' }}
        <p>Looks like a bar.</p>
    {{ else }}
        <p>Neither foo nor bar.</p>
    {{ endif }}

Logical Operators
******

You can also use logical operators like so:

.. code-block:: html

    {{ if variables:custom_var != 'foo' and variables:custom_var != 'bar' }}
         <p>No foos and no bars!</p>
    {{ endif }}

The logical operators available are:

-  and / &&
-  or / ||


.. toctree::
   :maxdepth: 2