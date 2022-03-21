import Link from 'next/link';
import Component from '../components/Component';
import Head from 'next/head';

const index = ({data}) => (
  <div>
    <Head>
      <title>Home | Learn Next.js</title>
      <meta name="keywords" content="Next.js, JavaScript, React..." />
    </Head>

    {
      data.map((todo) => 
      <div key={todo.id}>
        <h2>{todo.title}</h2>
        <p>{todo.title}</p>
      </div>
      )
    }

  </div>
);

export default index;

export async function getStaticProps() {
  // On récupère les datas de l'API
  const req = await fetch("http://jsonplaceholder.typicode.com/todos");

  // On transforme la réponse de la requête en JSON
  const data = await req.json();

  // On fait passer les datas dans les props
  return {
    props: {data},
  }
}
