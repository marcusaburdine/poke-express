const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    textAlign: 'center'
}

const React = require("react")
class Index extends React.Component {
    render() {
        const { pokemon } = this.props

        return (
            <body style={{backgroundColor:"lightcoral",textAlign: 'center'}}>
                <div >
                    <h1 style={myStyle}>Pokedex </h1>
                    <nav>
                        <a href="/pokemon/new">Create New Pokemon</a>
                    </nav>
                    {
                        pokemon.map((pokemon, i) => {
                            let pokeName = pokemon.name
                            return (

                                <ul key={i}>
                                    <li>
                                        <a style={{textAlign: 'center'}} href={(`/pokemon/${pokemon._id}`)}>
                                            {pokeName.charAt(0).toUpperCase() + pokeName.slice(1).toLowerCase()}</a>

                                    </li>
                                </ul>
                            )
                        })
                    }
                </div >
            </body>
        )
    }
}
module.exports = Index



