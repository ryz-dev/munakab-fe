import React from "react"
import { Global, css } from "@emotion/core"

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
      @import url("https://rsms.me/inter/inter.css");

      @supports (font-variation-settings: normal) {
        html {
          font-family: "Inter var", sans-serif;
        }
      }

      html, body {
        font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI,
          Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
          Segoe UI Symbol;
        quotes: "â€œ" "â€";
      }

      html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        top: 0 !important;
        overscroll-behavior-y: none;
      }

      ul,
      ol,
      li,
      dl,
      dt,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hgroup,
      p,
      blockquote,
      figure,
      form,
      fieldset,
      input,
      legend,
      pre,
      abbr,
      button {
        margin: 0;
        padding: 0;
      }

      pre,
      code,
      address,
      caption,
      th,
      figcaption {
        font-size: 1em;
        font-weight: normal;
        font-style: normal;
      }

      fieldset,
      iframe,
      img {
        border: 0;
      }

      caption,
      th {
        text-align: left;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      article,
      aside,
      footer,
      header,
      nav,
      main,
      section,
      summary,
      details,
      hgroup,
      figure,
      figcaption {
        display: block;
      }

      audio,
      canvas,
      video,
      progress {
        display: inline-block;
        vertical-align: baseline;
      }

      button {
        background: none;
        border: 0;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        color: inherit;
        cursor: pointer;
        font: inherit;
        line-height: inherit;
        overflow: visible;
        vertical-align: inherit;
      }

      body {
        font-size: 16px;
        background: #f4f4f4;
        line-height: 1.47059;
        font-weight: 400;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI,
          Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
          Segoe UI Symbol;
        color: #333;
      }
      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      body,
      input,
      textarea,
      select,
      button {
        font-synthesis: none;
        -moz-font-feature-settings: "kern";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        direction: ltr;
        text-align: left;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI,
          Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
          Segoe UI Symbol !important;
      }

      .react-images__positioner {
        z-index: 99999 !important;
      }

      .skiptranslate {
        .goog-te-banner-frame {
          display: none;
          position: absolute;
        }
      }

      .goog-te-gadget {
        & > div {
          border-radius: 3px;
          border: 1px solid #d6d6d6;
          img {
            display: none;
          }
          span {
            padding: 0;
            border: none;
            .goog-te-menu-value {
              span {
                &:first-of-type {
                  padding-right: 4px;
                }
              }
            }
          }
        }
      }
    `}
  />
)

export default GlobalStyles
