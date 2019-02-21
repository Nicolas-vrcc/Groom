import React from 'react'
import '../styles/Room.css'

const Room = () => {
  return (
     <div className="Room">
       <h1>LE BIG GAY</h1>{/* Titre à dynamiser */}
       <div className="main_container">
         <div className="chat_display">
           <div className="messages_container">

             <div className="message">
               <div className="message_info"><span className="user">{/* User */}Username</span><span className="post_date">{/* Date */} - 18:12  </span></div> 
               <div className="message_bubble">{/* Content */}Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, modi laborum! Eaque numquam, animi, laboriosam tempore quisquam maxime facilis velit deserunt, aut dolorum quos obcaecati aliquam minus commodi debitis? Porro?</div>
             </div>
             {/* <DUPLICATS> */}
             <div className="message">
               <div className="message_info"><span className="user">Username</span><span className="post_date"> - 18:12 </span></div> 
               <div className="message_bubble">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
             </div>
             <div className="message">
               <div className="message_info"><span className="user">Username</span><span className="post_date"> - 18:12 </span></div> 
               <div className="message_bubble">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, modi laborum!</div>
             </div>
             <div className="message">
               <div className="message_info"><span className="user">Username</span><span className="post_date"> - 18:12 </span></div> 
               <div className="message_bubble">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis velit adipisci nemo inventore est modi unde reprehenderit nisi, harum at quidem ipsam mollitia quibusdam nobis ipsum ratione iure ad?</div>
             </div>
             <div className="message">
               <div className="message_info"><span className="user">Username</span><span className="post_date"> - 18:12 </span></div> 
               <div className="message_bubble">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint aliquam accusamus fugit, perspiciatis consequatur beatae nemo? Tempore voluptas illo voluptates? Quo perspiciatis nisi laudantium iure eius ullam consectetur similique.</div>
             </div>
             <div className="message">
               <div className="message_info"><span className="user">Username</span><span className="post_date"> - 18:12 </span></div> 
               <div className="message_bubble">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nobis minima facilis odio, quasi praesentium ipsa veritatis voluptatem esse, eius molestiae repellendus labore iusto obcaecati sed quidem in. Tempora, facilis.</div>
             </div>
             <div className="message">
               <div className="message_info"><span className="user">Username</span><span className="post_date"> - 18:12 </span></div> 
               <div className="message_bubble">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, modi laborum! Eaque numquam, animi, laboriosam tempore quisquam maxime facilis velit deserunt, aut dolorum quos obcaecati aliquam minus commodi debitis? Porro?</div>
             </div>
             {/* <DUPLICATS/>*/}
             
           </div>
         </div>
         <div className="user_input">là dedans faut mettre le form pour envoyer des messages</div>
       </div>
     </div>
  )
}

export default Room