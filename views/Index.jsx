const React = require("react")
class Index extends React.Component {
    render() {
        const { pokemon } = this.props

        return (
            <div>
                <h1>Pokedex </h1>
                <nav>
                    <a href="/pokemon/new">Create New Pokemon</a>
                </nav>
                {
                    pokemon.map((pokemon, i) => {
                        let pokeName = pokemon.name
                        return (
                            
                            <ul key={i}>
                                <li >
                                    <a href={(`/pokemon/${i}`)}>
                                    {pokeName.charAt(0).toUpperCase() + pokeName.slice(1).toLowerCase()}</a>
                                </li>
                            </ul>
                        )
                    })
                }
            </div >
        )
    }
}
module.exports = Index



