const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

const React = require("react")
class Show extends React.Component {

    render() {
        const { name, img } = this.props.pokemon
        return (
            <body style={{ backgroundColor: "lightcyan", textAlign: 'center' }}>
                <div>
                    <h1 style={myStyle}>Gotta Catch 'Em All!</h1>
                    <a href="/pokemon">Pokedex</a><br /><br />
                    <img src={img + ".jpg"} />
                    <a href="/pokemon"></a>
                </div>
            </body>)
    }
}

module.exports = Show
