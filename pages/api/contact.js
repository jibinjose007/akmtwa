export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2",
    },
    auth: {
      user: "info.liagroupinternational@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: "info.liagroupinternational@gmail.com",
    to: "liagroupinternational@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<!DOCTYPE html>
    <html
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      lang="en"
    >
      <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        
        <style>
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
          }
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
          p {
            line-height: inherit;
          }
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0;
            overflow: hidden;
          }
          @media (max-width: 720px) {
            .desktop_hide table.icons-inner {
              display: inline-block !important;
            }
            .icons-inner {
              text-align: center;
            }
            .icons-inner td {
              margin: 0 auto;
            }
            .image_block img.big,
            .row-content {
              width: 100% !important;
            }
            .mobile_hide {
              display: none;
            }
            .stack .column {
              width: 100%;
              display: block;
            }
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0;
            }
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body
        style="
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        "
      >
        <table
          class="nl-container"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="
            mso-table-lspace: 0;
            mso-table-rspace: 0;
            background-color: #f9f9f9;
          "
        >
          <tbody>
            <tr>
              <td>
                <table
                  class="row row-1"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                <div
                                  class="spacer_block"
                                  style="
                                    height: 10px;
                                    line-height: 10px;
                                    font-size: 1px;
                                  "
                                >
                                  &#8202;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="row row-2"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                <table
                                  class="image_block"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        width: 100%;
                                        padding-right: 0;
                                        padding-left: 0;
                                      "
                                    >
                                      <div align="center" style="line-height: 10px">
                                        <img
                                          src="https://www.liagroupinternational.com/lia.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 154px;
                                            max-width: 100%;
                                          "
                                          width="154"
                                          alt="Alternate text"
                                          title="Alternate text"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="row row-3"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                <div
                                  class="spacer_block"
                                  style="
                                    height: 15px;
                                    line-height: 15px;
                                    font-size: 1px;
                                  "
                                >
                                  &#8202;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="row row-4"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 0;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="row row-5"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            background-color: #ffd3e0;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0;
                                  padding-bottom: 0;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                
                                <table
                                  class="text_block"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    word-break: break-word;
                                  "
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 18px;
                                            color: #191919;
                                            line-height: 1.5;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                            "
                                          >
                                            <strong
                                              ><span style="font-size: 38px"
                                                >${req.body.name},
                                              </span></strong
                                            >
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                            "
                                          >
                                            <strong
                                              ><span style="font-size: 38px"
                                                >Have send you a new message</span
                                              ></strong
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                               
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="row row-6"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            background-color: #fff;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0;
                                  padding-bottom: 5px;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                
                                <table
                                  class="text_block"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    word-break: break-word;
                                  "
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                        padding-top: 25px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 24px;
                                            color: #555;
                                            line-height: 2;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                         Message : ${req.body.message}
                                            
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                          Message from : ${req.body.email}
                                            
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                          Phone Number : ${req.body.phone}
                                            
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
               
        <!-- End -->
      </body>
    </html>
    `,
  };

  const thankyouMail = {
    from: "info.liagroupinternational@gmail.com",
    to: `${req.body.email}`,
    subject: `Thank you for contacting us - ${req.body.name}`,
    text:
      req.body.name +
      ", welcome to Lia Group International. Thank you for Contacting Us",
    html: `<!DOCTYPE html>
    <html
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      lang="en"
    >
      <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        
        <style>
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
          }
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
          p {
            line-height: inherit;
          }
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0;
            overflow: hidden;
          }
          @media (max-width: 720px) {
            .desktop_hide table.icons-inner {
              display: inline-block !important;
            }
            .icons-inner {
              text-align: center;
            }
            .icons-inner td {
              margin: 0 auto;
            }
            .image_block img.big,
            .row-content {
              width: 100% !important;
            }
            .mobile_hide {
              display: none;
            }
            .stack .column {
              width: 100%;
              display: block;
            }
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0;
            }
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body
        style="
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        "
      >
        <table
          class="nl-container"
          width="100%"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="
            mso-table-lspace: 0;
            mso-table-rspace: 0;
            background-color: #f9f9f9;
          "
        >
          <tbody>
            <tr>
              <td>
                <table
                  class="row row-1"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                <div
                                  class="spacer_block"
                                  style="
                                    height: 10px;
                                    line-height: 10px;
                                    font-size: 1px;
                                  "
                                >
                                  &#8202;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="row row-2"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                <table
                                  class="image_block"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        width: 100%;
                                        padding-right: 0;
                                        padding-left: 0;
                                      "
                                    >
                                      <div align="center" style="line-height: 10px">
                                        <img
                                          src="https://www.liagroupinternational.com/lia.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 154px;
                                            max-width: 100%;
                                          "
                                          width="154"
                                          alt="Alternate text"
                                          title="Alternate text"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="row row-3"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                <div
                                  class="spacer_block"
                                  style="
                                    height: 15px;
                                    line-height: 15px;
                                    font-size: 1px;
                                  "
                                >
                                  &#8202;
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="row row-4"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 0;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="row row-5"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            background-color: #ffd3e0;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0;
                                  padding-bottom: 0;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                <table
                                  class="image_block"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        width: 100%;
                                        padding-right: 0;
                                        padding-left: 0;
                                        padding-top: 30px;
                                      "
                                    >
                                      <div align="center" style="line-height: 10px">
                                        <img
                                          class="big"
                                          src="https://www.liagroupinternational.com/Welcome_Email.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 420px;
                                            max-width: 100%;
                                          "
                                          width="420"
                                          alt="I'm an image"
                                          title="I'm an image"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  class="text_block"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    word-break: break-word;
                                  "
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 18px;
                                            color: #191919;
                                            line-height: 1.5;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                            "
                                          >
                                            <strong
                                              ><span style="font-size: 38px"
                                                >${req.body.name},
                                              </span></strong
                                            >
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                            "
                                          >
                                            <strong
                                              ><span style="font-size: 38px"
                                                >welcome to Lia Group International!</span
                                              ></strong
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  class="text_block"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    word-break: break-word;
                                  "
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 65px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 14.399999999999999px;
                                            color: #191919;
                                            line-height: 1.2;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                            <span style="font-size: 22px"
                                              >Thank you for Contacting Us!</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="row row-6"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            background-color: #fff;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0;
                                  padding-bottom: 5px;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                <table
                                  class="social_block"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 50px;
                                        text-align: center;
                                      "
                                    >
                                      <table
                                        class="social-table"
                                        width="230px"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        align="center"
                                        style="
                                          mso-table-lspace: 0;
                                          mso-table-rspace: 0;
                                        "
                                      >
                                        <tr>
                                          <td style="padding: 0 7px 0 7px">
                                            <a
                                              href="https://www.facebook.com/"
                                              target="_blank"
                                              ><img
                                                src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/facebook@2x.png"
                                                width="32"
                                                height="32"
                                                alt="Facebook"
                                                title="Facebook"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                            /></a>
                                          </td>
                                          <td style="padding: 0 7px 0 7px">
                                            <a
                                              href="https://twitter.com/"
                                              target="_blank"
                                              ><img
                                                src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/twitter@2x.png"
                                                width="32"
                                                height="32"
                                                alt="Twitter"
                                                title="Twitter"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                            /></a>
                                          </td>
                                          <td style="padding: 0 7px 0 7px">
                                            <a
                                              href="https://instagram.com/"
                                              target="_blank"
                                              ><img
                                                src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/instagram@2x.png"
                                                width="32"
                                                height="32"
                                                alt="Instagram"
                                                title="Instagram"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                            /></a>
                                          </td>
                                          <td style="padding: 0 7px 0 7px">
                                            <a
                                              href="https://www.linkedin.com/"
                                              target="_blank"
                                              ><img
                                                src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/linkedin@2x.png"
                                                width="32"
                                                height="32"
                                                alt="LinkedIn"
                                                title="LinkedIn"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                            /></a>
                                          </td>
                                          <td style="padding: 0 7px 0 7px">
                                            <a href target="_blank"
                                              ><img
                                                src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/youtube@2x.png"
                                                width="32"
                                                height="32"
                                                alt="YouTube"
                                                title="YouTube"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                            /></a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  class="text_block"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    word-break: break-word;
                                  "
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                        padding-top: 25px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 24px;
                                            color: #555;
                                            line-height: 2;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                            If you have any questions, feel free
                                            message us at info.liagroupinternational@gmail.com. All
                                            right reserved. Update
                                            <a
                                              style="
                                                text-decoration: none;
                                                color: #555555;
                                              "
                                              href="#"
                                              target="_blank"
                                              rel="noopener"
                                              >email preferences</a
                                            >
                                            or
                                            <a
                                              style="
                                                text-decoration: none;
                                                color: #555555;
                                              "
                                              href="#"
                                              target="_blank"
                                              rel="noopener"
                                              >unsubscribe</a
                                            >.
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  class="text_block"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    word-break: break-word;
                                  "
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 24px;
                                            color: #555;
                                            line-height: 2;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                          Arafa building , Kariyannur, Erumapetty p.o , Thrissur dt , kerala
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  class="row row-7"
                  align="center"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="mso-table-lspace: 0; mso-table-rspace: 0"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          class="row-content stack"
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            mso-table-lspace: 0;
                            mso-table-rspace: 0;
                            background-color: #fff;
                            color: #000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                width="100%"
                                style="
                                  mso-table-lspace: 0;
                                  mso-table-rspace: 0;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 0;
                                  border-top: 0;
                                  border-right: 0;
                                  border-bottom: 0;
                                  border-left: 0;
                                "
                              >
                                <table
                                  class="text_block"
                                  width="100%"
                                  border="0"
                                  cellpadding="10"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    word-break: break-word;
                                  "
                                >
                                  <tr>
                                    <td>
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            mso-line-height-alt: 14.399999999999999px;
                                            color: #fff;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 12px;
                                              text-align: center;
                                            "
                                          >
                                            <span style="color: #555555"
                                              >Terms of use
                                              <strong>|</strong> Privacy
                                              Policy</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
        <!-- End -->
      </body>
    </html>
    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else {
      transporter.sendMail(thankyouMail, function (err2, info2) {
        if (err2) {
          console.log(err2);
        } else {
          console.log(info2);
          res.status(200).json({ submitted: true });
        }
      });
      console.log(info);
    }
  });
}
