import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {

  const [people] = useState([
    {
        name: " Ganja Elon",
        url: "https://media.gettyimages.com/id/872508664/photo/elon-musk.jpg?s=2048x2048&w=gi&k=20&c=aW0SaeK1Hp9sOozaR0l9x0j0K6zBq8o6PtobGuPbnyU=",

    },
    {
        name: " Taklaa Bezos",
        url: "https://d1e00ek4ebabms.cloudfront.net/production/cc479444-4581-4ddf-b99f-d28954c5e958.jpg",

    },
    {
      name: " Taklaa Bezos",
      url: "https://d1e00ek4ebabms.cloudfront.net/production/cc479444-4581-4ddf-b99f-d28954c5e958.jpg",

    }
    
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log('Receiving ..' + nameToDelete);
    // setLastDirection(direction);

  };

  const outOfFrame = (name) => {
    console.log(name + 'left the screen')
  }
   

  return(
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {people.map((person) => (
            <TinderCard 
                className="swipe" 
                key={person.name} 
                preventSwipe = {["up", "down"]} 
                onSwipe= {(dir) => swiped(dir, person.name)}
                onCardLeftScreen = {() => outOfFrame(person.name)}
                >
                    <div 
                      style={{backgroundImage: 'url(' +(person.url)+ ')' }}
                      className='card'
                    >
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>)
                
            )}
        </div>
        
        

        
    </div>
  )
  
}

export default TinderCards