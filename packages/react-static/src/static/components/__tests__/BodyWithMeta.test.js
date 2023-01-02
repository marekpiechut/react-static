/**
 * @jest-environment jsdom
 */
import React from 'react'
import makeBodyWithMeta from '../BodyWithMeta'
import renderer from 'react-test-renderer'

describe('BodyWithMeta', () => {
  test('when route is a static route', async () => {
    process.env.REACT_STATIC_ASSETS_PATH = 'assets/path'
    const BodyWithMeta = await makeBodyWithMeta({
      head: { bodyProps: { lang: 'en' } },
      route: { redirect: false },
      inlineScripts: {
        routeInfo: {
          script: 'script',
        },
      },
      clientScripts: ['main.js', 'bootstrap.js'],
      plugins: [],
    })

    const bodyWithMeta = renderer
      .create(
        <BodyWithMeta className="body">
          <div>static page</div>
        </BodyWithMeta>
      )
      .toJSON()

    expect(bodyWithMeta).toMatchSnapshot()
  })

  test('when route is a redirect route', async () => {
    const BodyWithMeta = await makeBodyWithMeta({
      head: { bodyProps: { lang: 'en' } },
      route: { redirect: true },
      inlineScripts: {
        routeInfo: {
          script: 'script',
        },
      },
      clientScripts: ['main.js', 'bootstrap.js'],
      config: {},
      plugins: [],
    })

    const bodyWithMeta = renderer
      .create(
        <BodyWithMeta className="body">
          <div>static page</div>
        </BodyWithMeta>
      )
      .toJSON()

    expect(bodyWithMeta).toMatchSnapshot()
  })
})
