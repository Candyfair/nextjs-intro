const todo = ({todo}) => (
  <h1>{todo.id}. {todo.title}</h1>
);

export default todo;

export async function getStaticPaths() {
  // On récupère toutes les todos
  const req = await fetch('http://jsonplaceholder.typicode.com/todos');

  // On change la réponse en JSON
  const todos = await req.json();

  // On va créer un chemin par todo
  const paths = todos.map(todo => {
    return {
      params: {
        id: todo.id.toString(),
      }
    }
  })

  // On retourne tous les chemins
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch('http://jsonplaceholder.typicode.com/todos/' + id);
  const todo = await req.json();

  return {
    props: {todo}
  }
}