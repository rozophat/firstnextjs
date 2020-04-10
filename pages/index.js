import Layout from '../components/MyLayout';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


// apollo client setup
const client = new ApolloClient({
  uri: 'https://firstnode-server.rozophat.now.sh/graph'
});

const Index = props => (
  <ApolloProvider client={client}>
    <Layout>
      <BookList/>
      <AddBook/>
    </Layout>
    <style jsx global>{`
      body{
        background: #eee;
        font-family: 'Nunito SemiBold';
      }
      
      #main h1{
        color: #444;
        text-align: center;
      }
      
      #main{
        padding: 0px;
        box-sizing: border-box;
        width: 60%;
        height: 100%;
      }
      
      #book-list{
        padding: 0;
      }
      
      #book-list li{
        display: inline-block;
        margin: 12px;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #880E4F;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
        cursor: pointer;
        color: #880E4F;
      }
      
      form{
        background: #fff;
        padding: 20px;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 400px;
      }
      
      form .field{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
      }
      
      form label{
        text-align: right;
        padding: 6px;
      }
      
      form input, form select{
        margin: 4px 0;
        padding: 6px;
        box-sizing: border-box;
      }
      
      form button{
        color: #fff;
        font-size: 2em;
        background: #AD1457;
        border: 0;
        padding: 0 10px;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        bottom: 10px;
        left: 10px;
      }
      
      #book-details{
        position: fixed;
        top: 0;
        right: 0;
        width: 40%;
        height: 100%;
        background: #AD1457;
        padding: 30px;
        overflow: auto;
        box-shadow: -2px -3px 5px rgba(0,0,0,0.3);
        box-sizing: border-box;
        color: #fff;
      }
    `}</style>
  </ApolloProvider>
  // <Layout>
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
);

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

export default Index;

// import { useRouter } from 'next/router';
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

