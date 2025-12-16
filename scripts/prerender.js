#!/usr/bin/env node
import { run } from 'react-snap';
import routes from '../prerender-routes.json' assert { type: 'json' };

run({
  source: 'dist',
  destination: 'dist',
  minifyHtml: {
    collapseWhitespace: true,
    removeComments: true
  },
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  skipThirdPartyRequests: true,
  crawl: false,
  include: routes,
  viewport: {
    width: 1440,
    height: 900
  },
  fixWebpackChunksIssue: true
}).catch(console.error);
