import React from 'react'
import renderer from 'react-test-renderer'
import makeHtmlWithMeta from '../HtmlWithMeta'

describe('HtmlWithMeta', () => {
  test('when route is a static route', async () => {
    const HtmlWithMeta = await makeHtmlWithMeta({
      head: { htmlProps: { lang: 'en' } },
      plugins: [],
    })

    const htmlWithMeta = renderer
      .create(
        <HtmlWithMeta className="body">
          <head>
            <title>React Static</title>
          </head>
        </HtmlWithMeta>
      )
      .toJSON()

    expect(htmlWithMeta).toMatchSnapshot()
  })
})
