
Themes
=======

.. contents::
   :local:
   :depth: 1

A starting point for developers of PageStudio templates

## Rational

While PageStudio provides a number of great themes, you may find you want to customize your own look and feel beyond the current capabilities of the Live Editor. This base template serves a means to quickly scaffold and bootstrap your own theme.

## Getting Started

To get started, create a web site that you can use to test your theme...
More info comming soon!

### Template Directories

Each template is organized using the following folder structure:

- assets/
    - css/
    - js/
- blocks/
    - block-templates/
- layouts/
    - data/
- partials/

**Understanding Template Folder Structure**

```
/<theme-name>/template.conf
/<theme-name>/assets/
/<theme-name>/blocks/
/<theme-name>/layouts/
/<theme-name>/layouts/data/blog-item-data.json
/<theme-name>/layouts/data/blog-list-data.json
/<theme-name>/partials/

/<theme-name>/layouts/
/<theme-name>/layouts/base-layout.php // replaces default.php
/<theme-name>/layout-partials/

/blog
/blog/blog-item.php
/blog/blog-page.php
/blog/blog-categories.php
```
### Essential Files

At the very minimum, your template needs a `template.conf` in the template root folder and a `default.php` in the layouts folder.

### Anatomy of the Template.conf

Comming soon!

## Template Tags

### Layout Tags
```
{{ template:headers }}
```

```
{{ template:footers }}
```

```
{{ template:stylesheets }}
```

```
{{ template:javascripts }}
```

Adding scripts not defined in template.conf 

```
{{ template:javascripts name="jquery|boostrap|main" footer="true" }}
```

```
{{ template:partial name="${filename}" }}
```

### Global Variable Tags

Outsite of plugin tags PageStudio also grants access to several global variables set by the system. They are accessible within a template file via the following tags: 

```
{{ global.page.id }}
{{ global.page.title }}
{{ global.page.css }}
{{ global.site.title }}
{{ global.site.description }}
{{ global.site.logo }}
```
