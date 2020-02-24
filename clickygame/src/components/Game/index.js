import React, { Component } from "react";
import Image from "../Image";


class Game extends Component {
    state = {
        score: 0,
        topScore: 0,
        photos: [
            {
                name: "Orange Tabby",
                src: "./imgs/cat.jpg",
                id: "1"
            },
            {
                name: "click",
                src: "https://i.pinimg.com/736x/c9/8e/e4/c98ee48d53c7b9e1ba07b5b4824e55c0--mickey-mouse-cartoon-cartoon-disney.jpg?b=t",
                id: "2"
            },
            {
                name: "scart",
                src: "https://thumbs.dreamstime.com/z/cartoon-child-ski-activity-happy-colorful-traditional-illustration-children-72241766.jpg",
                id: "3"
            },
            {
                name: "collie",
                src: "http://blogs.uoregon.edu/yusugeog181/files/2014/05/Border-Collie-Puppy-0-1rzbtly.jpg",
                id: "4"
            },
            {

                name: "clicky",
                src: "/imgs/Clicky.png",
                id: "5"
            },
            {
                name: "puppy",
                src: "http://clipartix.com/wp-content/uploads/2016/09/Cartoon-clipart-images-free-clipart-images-2.jpg",
                id: "6"
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
                        key={photo.id}
                    />
                ))}

            </div>
        )
    }
}


export default Game