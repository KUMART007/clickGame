import React, { Component } from "react";
class Game extends Component {
    state = {

    
        score: 0,
        topScore: 0,
        photos: [
            {
                src: "http://2.bp.blogspot.com/-jEvtYp2NVDU/UOQ9uCMXtpI/AAAAAAAAQQk/kA_elYotr3A/s1600/5299787-american-cocker-spaniel-puppy-with-paws-over-white-foreground.jpg",
                id: "1"
            },
            {
                src: "http://blogs.uoregon.edu/yusugeog181/files/2014/05/Border-Collie-Puppy-0-1rzbtly.jpg",
                id: "2"
            },
            {
                src: "http://1.bp.blogspot.com/-5tB9q0VGQq4/VQmz8PQ0J1I/AAAAAAAAG4w/bnm6wibMRHc/s1600/richiemale.JPG",
                id: "3"
            },
            {
                src: "http://1.bp.blogspot.com/-5tB9q0VGQq4/VQmz8PQ0J1I/AAAAAAAAG4w/bnm6wibMRHc/s1600/richiemale.JPG",
                id: "4"
            },
        ]

    }
    render() {
        return (
            <div>
                {this.state.photos.map((photo) => {
                    return (<img src={photo.src}></img>);
                })}
                
            </div>
        )
    }
}
export default Game