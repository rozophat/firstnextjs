webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_BookList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BookList */ "./components/BookList.js");
/* harmony import */ var _components_AddBook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AddBook */ "./components/AddBook.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/phatnguyen/Projects/NextJsApp/pages/index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 // apollo client setup

var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_7__["default"]({
  uri: 'http://localhost:3001/graph'
});

var Index = function Index(props) {
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_8__["ApolloProvider"], {
    client: client,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_components_BookList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_components_AddBook__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2679520877",
    __self: _this
  }, "body{background:#eee;font-family:'Nunito SemiBold';}#main h1{color:#444;text-align:center;}#main{padding:0px;box-sizing:border-box;width:60%;height:100%;}#book-list{padding:0;}#book-list li{display:inline-block;margin:12px;padding:10px;border-radius:4px;border:1px solid #880E4F;box-shadow:1px 2px 3px rgba(0,0,0,0.3);cursor:pointer;color:#880E4F;}form{background:#fff;padding:20px;position:fixed;left:0;bottom:0;width:400px;}form .field{display:grid;grid-template-columns:1fr 1fr;grid-gap:10px;}form label{text-align:right;padding:6px;}form input,form select{margin:4px 0;padding:6px;box-sizing:border-box;}form button{color:#fff;font-size:2em;background:#AD1457;border:0;padding:0 10px;border-radius:50%;cursor:pointer;position:absolute;bottom:10px;left:10px;}#book-details{position:fixed;top:0;right:0;width:40%;height:100%;background:#AD1457;padding:30px;overflow:auto;box-shadow:-2px -3px 5px rgba(0,0,0,0.3);box-sizing:border-box;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGF0bmd1eWVuL1Byb2plY3RzL05leHRKc0FwcC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQnVCLEFBR3lCLEFBS0wsQUFLQyxBQU9GLEFBSVcsQUFXTCxBQVNILEFBTUksQUFLSixBQU1GLEFBYUksVUFyRGpCLENBWm9CLEFBcURKLENBaERRLENBK0JRLEFBV2xCLEVBbUJOLENBdkV3QixBQWdDakIsQ0FlRCxJQTFCQSxBQW1ESixJQW5CYyxBQU1ILElBckRyQixBQTJCaUIsQUFlakIsQUF5QlksSUFuREcsQ0FYSCxLQStERSxJQWhDRSxDQTlCRixBQXNCTCxBQTBCRSxFQTNEWCxBQXNCb0IsQ0ErQnBCLElBbkJXLEFBd0NVLEVBZEosR0FoRGpCLENBOEJBLEdBUGMsSUFaYSxJQXNDUCxFQWNMLEVBdkNmLFdBd0NnQixHQWRDLEdBdEN3QixRQXFERSxJQWR2QixrQkFDTixTQXZDRyxHQXdDTCxPQWFZLEdBWnhCLEVBeENnQixjQUNoQixHQW9EYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9waGF0bmd1eWVuL1Byb2plY3RzL05leHRKc0FwcC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Cb29rTGlzdCc7XG5pbXBvcnQgQWRkQm9vayBmcm9tICcuLi9jb21wb25lbnRzL0FkZEJvb2snO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IEFwb2xsb0NsaWVudCBmcm9tICdhcG9sbG8tYm9vc3QnO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5cbi8vIGFwb2xsbyBjbGllbnQgc2V0dXBcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvZ3JhcGgnXG59KTtcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgPExheW91dD5cbiAgICAgIDxCb29rTGlzdC8+XG4gICAgICA8QWRkQm9vay8+XG4gICAgPC9MYXlvdXQ+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHl7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNlbWlCb2xkJztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI21haW4gaDF7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNtYWlue1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI2Jvb2stbGlzdHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI2Jvb2stbGlzdCBsaXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4MEU0RjtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjODgwRTRGO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3Jte1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3JtIC5maWVsZHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9ybSBsYWJlbHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9ybSBpbnB1dCwgZm9ybSBzZWxlY3R7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9ybSBidXR0b257XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogI0FEMTQ1NztcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI2Jvb2stZGV0YWlsc3tcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNBRDE0NTc7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBib3gtc2hhZG93OiAtMnB4IC0zcHggNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAvLyA8TGF5b3V0PlxuICAvLyAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuICAvLyAgIDx1bD5cbiAgLy8gICAgIHtwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoXG4gIC8vICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuICAvLyAgICAgICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Nob3cuaWR9YH0+XG4gIC8vICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbiAgLy8gICAgICAgICA8L0xpbms+XG4gIC8vICAgICAgIDwvbGk+XG4gIC8vICAgICApKX1cbiAgLy8gICA8L3VsPlxuICAvLyA8L0xheW91dD5cbik7XG5cbi8vIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuLy8gICB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbi8vIGltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuLy8gZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcbi8vICAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4vLyAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuLy8gICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4vLyAgICAgYC9hcGkvcmFuZG9tUXVvdGUke3F1ZXJ5LmF1dGhvciA/ICc/YXV0aG9yPScgKyBxdWVyeS5hdXRob3IgOiAnJ31gLFxuLy8gICAgIGZldGNoZXJcbi8vICAgKTtcbi8vICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGhhcyBvcHRpb25hbCBjaGFpbmluZywgYWRkZWQgaW4gTmV4dC5qcyB2OS4xLjUsXG4vLyAgIC8vIGlzIHRoZSBzYW1lIGFzIGBkYXRhICYmIGRhdGEuYXV0aG9yYFxuLy8gICBjb25zdCBhdXRob3IgPSBkYXRhPy5hdXRob3I7XG4vLyAgIGxldCBxdW90ZSA9IGRhdGE/LnF1b3RlO1xuXG4vLyAgIGlmICghZGF0YSkgcXVvdGUgPSAnTG9hZGluZy4uLic7XG4vLyAgIGlmIChlcnJvcikgcXVvdGUgPSAnRmFpbGVkIHRvIGZldGNoIHRoZSBxdW90ZS4nO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPG1haW4gY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlXCI+e3F1b3RlfTwvZGl2PlxuLy8gICAgICAge2F1dGhvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj4tIHthdXRob3J9PC9zcGFuPn1cblxuLy8gICAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgICBtYWluIHtcbi8vICAgICAgICAgICB3aWR0aDogOTAlO1xuLy8gICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4vLyAgICAgICAgICAgbWFyZ2luOiAzMDBweCBhdXRvO1xuLy8gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAucXVvdGUge1xuLy8gICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuLy8gICAgICAgICAgIGNvbG9yOiAjZTI0M2RlO1xuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbi8vICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuYXV0aG9yIHtcbi8vICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbi8vICAgICAgICAgICBjb2xvcjogIzU1OTgzNDtcbi8vICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIGB9PC9zdHlsZT5cbi8vICAgICA8L21haW4+XG4vLyAgICk7XG4vLyB9XG5cbiJdfQ== */\n/*@ sourceURL=/Users/phatnguyen/Projects/NextJsApp/pages/index.js */")) // <Layout>
  //   <h1>Batman TV Shows</h1>
  //   <ul>
  //     {props.shows.map(show => (
  //       <li key={show.id}>
  //         <Link href="/p/[id]" as={`/p/${show.id}`}>
  //           <a>{show.name}</a>
  //         </Link>
  //       </li>
  //     ))}
  //   </ul>
  // </Layout>
  ;
}; // Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   console.log(`Show data fetched. Count: ${data.length}`);
//   return {
//     shows: data.map(entry => entry.show)
//   };
// };


/* harmony default export */ __webpack_exports__["default"] = (Index); // import { useRouter } from 'next/router';
// import useSWR from 'swr';
// function fetcher(url) {
//   return fetch(url).then(r => r.json());
// }
// export default function Index() {
//   const { query } = useRouter();
//   const { data, error } = useSWR(
//     `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
//     fetcher
//   );
//   // The following line has optional chaining, added in Next.js v9.1.5,
//   // is the same as `data && data.author`
//   const author = data?.author;
//   let quote = data?.quote;
//   if (!data) quote = 'Loading...';
//   if (error) quote = 'Failed to fetch the quote.';
//   return (
//     <main className="center">
//       <div className="quote">{quote}</div>
//       {author && <span className="author">- {author}</span>}
//       <style jsx>{`
//         main {
//           width: 90%;
//           max-width: 900px;
//           margin: 300px auto;
//           text-align: center;
//         }
//         .quote {
//           font-family: cursive;
//           color: #e243de;
//           font-size: 24px;
//           padding-bottom: 10px;
//         }
//         .author {
//           font-family: sans-serif;
//           color: #559834;
//           font-size: 20px;
//         }
//       `}</style>
//     </main>
//   );
// }

/***/ })

})
//# sourceMappingURL=index.js.0876fecbec607ba89481.hot-update.js.map