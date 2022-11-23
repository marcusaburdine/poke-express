const React = require("react");

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>Who's that Pokemon?</h1>
                <nav>
                    <a href="/pokemon">Pokedex</a>
                </nav><br />
                <form action="/pokemon" method="POST">
                    Name:  <input type="text" name="name" /><br />
                    Image: <input type="url"  name="img"  /><br /><br />
                    <input type="submit" value="Create Pokemon"></input>
                </form>
            </div>
        )
    }
}

module.exports = New;