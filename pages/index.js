import { filmes} from "../data/filmes"

function Home () {
     return filmes.map (filme => {

    

    return <>
        <FilmeCard filme={filme} />

      

    </>

      })
}

function FilmeCard ({ filme }) {
    return <ul>
        <li>
            <p>Titulo: {filme.titulo}</p>
            <p> Ano: {filme.ano}</p>
        </li>
    </ul>
}

export default Home;
