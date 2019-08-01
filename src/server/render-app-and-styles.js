import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { Overview } from '../shared/Overview';

export const renderAppMarkupAndStyles = () => {
  const sheet = new ServerStyleSheet();
  let markup;
  let styleTags;
  try {
    markup = renderToString(sheet.collectStyles(
      <Overview />
    ));
    styleTags = sheet.getStyleTags();
  } catch (error) {
    console.error(error)
  } finally {
    sheet.seal()
  }
  return {
    markup,
    styleTags
  }
};
