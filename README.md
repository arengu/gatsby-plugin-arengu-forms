# Arengu Forms for Gatsby websites

This Gatsby plugin allows you to easily embed Arengu Forms into your Gatsby website.

## Install

```shell
npm install --save gatsby-plugin-arengu-forms
```

## Getting started

Add the Arengu Forms plugin to your `gatsby-config.js` file:

```javascript
plugins: [`gatsby-plugin-arengu-forms`]
```

This plugin will load into your website our (JavaScript SDK)[https://github.com/arengu/forms-js-sdk] asynchronously, so it won’t affect your website load speed.

## Usage

To use this plugin you have to import `ArenguForm` component and pass the required [props](#arenguform-props).

### Example of basic usage

```jsx
import React from "react"
import { ArenguForm } from "gatsby-plugin-arengu-forms"

const IndexPage = () => (
  <div>
    <ArenguForm id="123456789" />
  </div>
)

export default IndexPage
```

### Example of usage with `hiddenFields` prop

```jsx
import React from "react"
import { ArenguForm } from "gatsby-plugin-arengu-forms"

const IndexPage = () => (
  <div>
    <ArenguForm
      id="123456789"
      hiddenFields={[
        {
          key: 'userId',
          value: '12345',
        },
        {
          key: 'source',
          value: 'anyString',
        },
      ]}
    />
  </div>
)

export default IndexPage
```

## ArenguForm Props

| prop                      | type   | description                                                                        |
| ------------------------- | ------ | ---------------------------------------------------------------------------------- |
| id *(required)*           | string | The **Form ID** of your form. You can find it in your form settings or share page. |
| hiddenFields *(optional)* | array  | `Array of objects` with `key` and `value` properties |
