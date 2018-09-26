import React, {Component} from "react";
import Header from "../Header";
import Card from "../Card";
import images from "../../images.json";
import "./Wrapper.css";


class Wrapper extends Component {
    state = {
        images: images,
        userScore: 0,
        idArray: []
    }

    handleClick = (id) => {
        //take in id and increment user score if id is has not already been clicked
        if (this.state.idArray.indexOf(id) === -1) {
            this.state.idArray.push(id);
            let newScore = this.state.userScore + 1;
            this.setState({userScore: newScore});
        } else {
            this.gameOver();
        }
        //randomize the card order
        this.randomize();
    }

    gameOver = () => {
        alert("You lost!");
        this.setState({
            images: images,
            userScore: 0,
            idArray: []
        });
    }

    randomize = () => {
        var newArray = this.state.images.sort(function(a, b) {
            return 0.5 - Math.random();
        })
        console.log(newArray);
        this.setState({images: newArray});
    }

    render() {
       return (
           <div className="wrapper">
            <Header score={this.state.userScore}>Friends Click Game!</Header>
                {this.state.images.map(image => (
                    <Card
                    id={image.id}
                    handleClick={this.handleClick}
                    key={image.id}
                    name={image.name}
                    url={image.url}
                    />
                ))}
           </div>

        );
    }
}

export default Wrapper;