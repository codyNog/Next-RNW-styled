import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { AppRegistry } from "react-native-web";
import styled from "styled-components";
// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const Body = styled.body({
  margin: 0
});

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent("test", () => Main);
    const { getStyleElement } = AppRegistry.getApplication("test");
    const page = renderPage();
    const styles = [
      <style
        key={"style"}
        dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
      />,
      getStyleElement()
    ];
    return { ...page, styles: React.Children.toArray(styles) };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </html>
    );
  }
}
