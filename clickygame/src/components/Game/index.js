import React, { Component } from "react";
import Image from "../Image";


class Game extends Component {
    state = {
        score: 0,
        topScore: 0,
        photos: [
            {

                src: "/imgs/clicky boyz/Clicky.png",
                id: "1"
            },
            {
                src: "http://blogs.uoregon.edu/yusugeog181/files/2014/05/Border-Collie-Puppy-0-1rzbtly.jpg",
                id: "2"
            }
        ]
    }

    clickImage = img => {
        // let test = this.state.photos;
        let test = this.state.photos.filter(x => x.id !== img.id)

        test.push({src:img.src, id:img.id})
        
        this.setState({photos: test})
        
    }

    render() {
        return (
            <div>
                {this.state.photos.map(photo => (
                    // return
                    <Image
                        id={photo.id}
                        src={photo.src}
                        handleClick={this.clickImage}
                    />
                ))}

            </div>
        )
    }
}


export default Game