const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

const React = require("react");

class New extends React.Component {
    render() {
        return (
            <body style={{ backgroundColor: "tan", textAlign: 'center' }}>
            <div>
                <h1 style={myStyle}>Who's that Pokemon?</h1>
                <nav>
                    <a href="/pokemon">Pokedex</a>
                </nav><br />
                <form action="/pokemon" method="POST">
                    Name:  <input type="text" name="name" /><br />
                    Image: <input type="text" name="img" /><br /><br />
                    <input type="submit" value="Create Pokemon"></input>
                </form>
            </div>
            </body>
        )
    }
}

module.exports = New;